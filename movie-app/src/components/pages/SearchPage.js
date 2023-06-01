import React, {useState, useEffect} from 'react';
import {Row, Spinner} from 'react-bootstrap';
import {POPULAR_MOVIES_URL} from '../constants/ApiUrl';
import {FETCH_ERROR_MSG} from "../constants/Messages";
import MediaList from '../MediaList';
import useFetch from '../hooks/useFetch';
import FilterTabs from "../FilterTabs";
import Pagination from "../Pagination";

/**
 * SearchPage component that renders the FilterTabs, MediaList and Pagination components
 * @returns {JSX.Element} SearchPage component
 */
function SearchPage() {
    const [queryParams, setQueryParams] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    /**
     * Fetches the movies data from the API
     */
    const [{ data: moviesData, isLoading: moviesIsLoading, isError: moviesIsError }, setMoviesUrl] = useFetch(
        POPULAR_MOVIES_URL + `&page=${currentPage}`,
        { results: [] }
    );

    /**
     * Sets the moviesUrl and totalPages when the queryParams or currentPage changes
     */
    useEffect(() => {
        setMoviesUrl(POPULAR_MOVIES_URL + queryParams + `&page=${currentPage}`);
        setTotalPages(moviesData.total_pages)
    }, [queryParams, currentPage]);

    /**
     * If moviesIsError is true, render an error message, otherwise render the FilterTabs, MediaList and Pagination components
     */
    return (
        <>
            <Row className="justify-content-center text-center m-3">
                <h1 className="text-white">Movies</h1>
            </Row>
            <Row className="justify-content-center text-center m-2">
                <FilterTabs setMoviesUrl={setMoviesUrl} queryParams={queryParams} setQueryParams={setQueryParams}/>
            </Row>

            <Row className="justify-content-center text-center mb-5">
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
            </Row>

            <Row className="justify-content-center m-4 row-cols-1">
                {moviesIsError && <div className="alert alert-danger">{FETCH_ERROR_MSG}</div>}
                {moviesIsLoading ? (<Spinner animation="border" variant="light" />) :
                    (<MediaList listMovies={moviesData.results} />)}
            </Row>
        </>
    );
}

export default SearchPage;
