export type NewsType = {
    author: string
    title: string
    description: string
    content: string
    source: {
        id: null | string
        name: string
    }
    publishedAt: string
    url: string
    urlToImage: string
}
