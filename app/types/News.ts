type News = {
    totalArticles: number,
    articles: Article[],
}

type Article = {
    title: string,
    description: string,
    content: string,
    url: string,
    image: string,
    publishedAt: string,
    source: Source
}

type Source = {
    name: string,
    url: string,
}