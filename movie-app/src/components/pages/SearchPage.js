import React, {useState, useEffect} from 'react';
import {Row, Spinner} from 'react-bootstrap';
import {POPULAR_MOVIES_URL} from '../constants/ApiUrl';
import {FETCH_ERROR_MSG} from "../constants/Messages";
import MediaList from '../MediaList';
import useFetch from '../hooks/useFetch';
import FilterTabs from "../FilterTabs";

function SearchPage() {
    const [queryParams, setQueryParams] = useState("");
    const [{ data: moviesData, isLoading: moviesIsLoading, isError: moviesIsError }, setMoviesUrl] = useFetch(
        POPULAR_MOVIES_URL + `&page=${1}`,
        { results: [] }
    );
    useEffect(() => {
        setMoviesUrl(POPULAR_MOVIES_URL + queryParams + `&page=${1}`);
    }, [queryParams]);


    return (
        <>
            <Row className="justify-content-center text-center m-3">
                <h1 className="text-white">Movies</h1>
            </Row>
            <Row className="justify-content-center text-center m-2">
                <FilterTabs setMoviesUrl={setMoviesUrl} queryParams={queryParams} setQueryParams={setQueryParams}/>
            </Row>
            <Row className="justify-content-center m-4 row-cols-1">
                {moviesIsError && <div className="alert alert-danger">{FETCH_ERROR_MSG}</div>}
                {moviesIsLoading ? (<Spinner animation="border" variant="light" />) : (<MediaList listMovies={moviesData.results} />)}
            </Row>
        </>
    );
}

export default SearchPage;
