/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';


/!** this is the definition of a React custom hook that will fetch data from some API.
 *
 * it returns a function that will be used as a callback
 * to set the URL to fetch using axios, and various states to track the fetching
 * @param initialUrl since we're using axios you may pass a string
 * or an object such as {url: 'https://hn.algolia.com/api/v1/search?query=useState', method: 'get'}
 * @param initialData
 * @returns {[{isLoading: boolean, isError: boolean, data: unknown}, ((value: unknown) => void)]}
 *!/
const SearchFetch = (initialUrl, initialData) => {

    const [data, setData] = useState(initialData); // data to be fetched
    const [url, setUrl] = useState(initialUrl); // any change on this state variable will trigger a fetch
    const [isLoading, setIsLoading] = useState(false); // is it fetching?
    const [isError, setIsError] = useState(false); // is there an error?

    // we are using useEffect to fetch data from the API
    // when the url state changes
    useEffect(() => {
        // this code returns a promise, but an effect can only return void or a cleanup function.
        // so we need to wrap the promise in a function that returns void
        const fetchData = async () => {
            setIsError(false); // reset error state
            setIsLoading(true); // set loading state to true to show loading indicator for example
            try {
                const result = await axios(url); // not that you can pass full object to axios including method, url, data
                setData(result.data); // set data state
            } catch (error) {
                setIsError(true); // an error occurred, set error state to true
            } finally {
                setIsLoading(false); // set loading state to false to hide loading indicator
            }
        };

        fetchData(); // execute the function above

    }, [url]); // trigger the effect when url changes

    return [{ data, isLoading, isError }, setUrl]; // return the data and the URL setter function
};

export default SearchFetch*/
