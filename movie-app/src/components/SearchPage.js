import React, {useState, useEffect, useReducer, createContext} from 'react';
import axios from 'axios';
import {Button, Col, Form, Row, Spinner} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import MediaList from './MediaList';
import CardInfo from "./CardInfo";
import HistorySearch from "./HistorySearch";
import SearchForm from './SearchForm';

export const StateContext = createContext();

const useFetch = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);



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

        fetchData();
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};

const historyReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state.includes(action.payload) ? state : [...state, action.payload];
        case 'DELETE':
            const newState = [...state];
            newState.splice(action.payload, 1);
            return newState;
        case 'DELETE_ALL':
            return [];
        default:
            throw new Error();
    }
}

function SearchPage({ cartItems, setCartItems }) {
    const API_KEY = '78d0428861881a4570bce56c00beab85';
    const TMDB_BASE_URL = `https://api.themoviedb.org/3/`;
    const FETCH_ERROR_MSG = 'Something went wrong...';

    const TMDB_TRENDING_ALL_URL = `${TMDB_BASE_URL}movie/popular?api_key=${API_KEY}&include_adult=false&include_video=false&sort_by=popularity.desc&page=1`;
    const TMDB_SEARCH_URL = `${TMDB_BASE_URL}search/movie?api_key=${API_KEY}&include_adult=false&include_video=false&query=`;

    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);

    const [{ data, isLoading, isError }, doFetch] = useFetch(TMDB_TRENDING_ALL_URL + page, { results: [] });
    const [historySearch, dispatch] = useReducer(historyReducer, []);

    const handleSubmit = (query) => {
        dispatch({ type: 'ADD', payload: query });
        setSearchQuery(query);
        setPage(1);
        doFetch(TMDB_SEARCH_URL + encodeURIComponent(query));
    };

    useEffect(() => {
        doFetch(TMDB_TRENDING_ALL_URL + page);
    }, [doFetch, page]);

    return (
        <StateContext.Provider value={{ historySearch, dispatch }}>
            <Row className="justify-content-center m-4 row-cols-1">
                <SearchForm onSubmit={handleSubmit}  />
            </Row>
            <Row>

            </Row>
            <Row className="justify-content-center m-4 row-cols-1">
                {isError && <div className="alert alert-danger">{FETCH_ERROR_MSG}</div>}

                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <MediaList listMovies={data.results}/>
                )}
            </Row>
            <Row>

            </Row>
        </StateContext.Provider>
    );
}

export default SearchPage;
