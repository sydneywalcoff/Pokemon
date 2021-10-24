import { useState, useEffect } from 'react';
import { traverseTwoPhase } from 'react-dom/test-utils';

export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const runFetch = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setData(json);
                setIsLoading(false);
            } catch(e) {
                setError(e);
            }
        };
        runFetch();
    }, []);
    return { data, error, isLoading };
};