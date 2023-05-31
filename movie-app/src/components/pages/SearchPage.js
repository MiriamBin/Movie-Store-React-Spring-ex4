import React, {useState, useEffect} from 'react';
import {Col, Row, Spinner} from 'react-bootstrap';
import MediaList from '../MediaList';
import useFetch from '../hooks/useFetch';
import {POPULAR_MOVIES_URL} from '../constants/ApiUrl';
import FilterTabs from "../FilterTabs";



function SearchPage() {
    const FETCH_ERROR_MSG = 'Something went wrong...';
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
                {moviesIsLoading ? (
                    <Row className="justify-content-center text-center">
                        <Col>
                            <Spinner animation="border" variant="light" />
                        </Col>
                    </Row>
                ) : (
                    <MediaList listMovies={moviesData.results} />
                )}
            </Row>
        </>
    );
}

export default SearchPage;
