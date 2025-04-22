const options = {
    baseURL: "https://gnews.io/api/v4",
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",

    }
}

const fetchApi = async (endpoint: string) => {
    return await fetch(`${options.baseURL}/search?q=${endpoint}&apikey=${options.apiKey}`, {headers: options.headers});
}

export const getNNews = async (number: number): Promise<News> => {
    try {
        const response = await fetchApi(`"None"&max=${number}`);
        return await response.json();
    } catch (e) {
        console.log(`Thee error is ${e}`);
        const error = e instanceof Error ? e : new Error("Error fetching news by title");
        throw error;
    }
}

export const getNewsByTitle = async (title: string): Promise<News> => {
    try {
        const response = await fetchApi(`${title}&in=title`);
        return await response.json();
    } catch (e) {
        console.log(`Thee error is ${e}`);
        const error = e instanceof Error ? e : new Error("Error fetching news by title");
        throw error;
    }
}

export const getNewsByKeywords = async (keywords: string): Promise<News> => {
    try {
        const response = await fetchApi(`"${keywords}"`);
        return await response.json();
    } catch (e) {
        console.log(`Thee error is ${e}`);
        const error = e instanceof Error ? e : new Error("Error fetching news by title");
        throw error;
    }
}



