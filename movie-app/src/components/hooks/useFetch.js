import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Custom hook for fetch data from server
 * @param initialUrl - initial url
 * @param initialData   - initial data
 * @returns {[{isLoading: boolean, isError: boolean, data: unknown},((value: unknown) => void)]} - data, isLoading, isError
 */
const useFetch = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    /**
     * Fetch data from server
     */
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await axios(url);
                setData(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData().then(r => r);
    }, [url]);
    return [{ data, isLoading, isError }, setUrl];
};

export default useFetch;