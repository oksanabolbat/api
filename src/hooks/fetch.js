import { useState, useEffect } from "react";

export const useFetch = (fetchData, initialState) => {
    const [fetchedData, setFetchedData] = useState(initialState);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        async function getData() {
            setIsFetching(true);
            try {
                const data = await fetchData();

                setFetchedData(data);
            } catch (error) {
                setError({
                    message: error.message || "Failed to fetch data.",
                });
            }

            setIsFetching(false);
        }

        getData();
    }, []);
    return { fetchedData, setFetchedData, isFetching, error };
};
