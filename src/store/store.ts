import create from 'zustand';
import {INews} from "../services/interfaces/news";
import {getAllNews} from "../services/newsApi";

interface State {
    news: INews;
    fetchNews: () => Promise<void>;
    filterByDate: (direction: string) => void;
    searchByTitle: (query: string) => void;
    error: Error | null;
}

export const useNewsStore = create<State>((set) => ({
    news: {
        status: '',
        totalResults: 0,
        articles: [],
    },
    error: null,
    fetchNews: async (sortBy = '') => {
        try {
            const response = await getAllNews(sortBy);
            set({ news: response });
        } catch (error) {
            set({ error: error as Error })
        }
    },
    filterByDate: async (direction: string) => {
        try {
            const currentNews: INews = await getAllNews();
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
    }
}));