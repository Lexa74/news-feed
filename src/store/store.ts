import create from 'zustand';
import {IArticles, INews} from "../services/interfaces/news";
import {getAllNews, getNewsById} from "../services/newsApi";

interface State {
    news: INews;
    newsById: IArticles[];
    fetchNews: () => Promise<void>;
    filterByDate: (direction: string) => void;
    searchByTitle: (query: string) => void;
    getNewsById: (nameId: string) => void;
    error: Error | null;
}

export const useNewsStore = create<State>((set, get) => ({
    news: {
        status: '',
        totalResults: 0,
        articles: [],
    },
    newsById: [],
    error: null,
    fetchNews: async () => {
        try {
            const response = await getAllNews();
            set({ news: response });
        } catch (error) {
            set({ error: error as Error })
        }
    },
    filterByDate: (direction: string) => {
        try {
            const currentNews: INews = get().news;
            currentNews.articles.sort((a: { publishedAt: string | number | Date; }, b: { publishedAt: string | number | Date; }) => {
                let dateA = new Date(a.publishedAt);
                let dateB = new Date(b.publishedAt);
                return direction === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
            });
            set({ news: currentNews });
        } catch (error) {
            set({ error: error as Error })
        }
    },
    searchByTitle: async (query: string) => {
        try {
            const currentNews: INews = await getAllNews();
            const filteredNews = currentNews.articles.filter(article => article.title.includes(query));
            set({news: {...currentNews, articles: filteredNews}});
        } catch (error) {
            set({ error: error as Error })
        }
    },
    getNewsById: async (nameId: string) => {
        try {
            const currentNews: INews = await getNewsById(nameId);
            set({newsById: currentNews.articles});
        } catch (error) {
            set({ error: error as Error })
        }
    }
}));