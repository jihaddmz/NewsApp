import {useEffect, useState} from "react";

interface Props<T> {
    fetchFunction: (parameter: any) => Promise<T>,
    autoFetch: boolean,
    parameter: any,
}

const useFetch = <T>(fetchFunction: (parameter: any) => Promise<T>, autoFetch: boolean, parameter: any) => {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>();

    const fetchData = async (parameter: any) => {
        try {
            setLoading(true);
            const data = await fetchFunction(parameter);
            setError(null)
            setLoading(false);
            setData(data);
        } catch (e) {
            setLoading(false);
            setError(e instanceof Error ? e : new Error("Error fetching data"));
        }
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData(parameter)
        }
    }, []);

    return {
        data, loading, error,
        refetch: fetchData
    };
}

export default useFetch;