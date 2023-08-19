export interface INews {
    articles: IArticles[],
    status: string,
    totalResults: number
}

export interface IArticles {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: ISource
    title: string,
    url: string,
    urlToImage: string
}

interface ISource {
    id: string | null,
    name: string
}