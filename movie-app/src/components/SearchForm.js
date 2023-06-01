import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import HistorySearch from './HistorySearch';
import {useContext} from 'react';
import {AppContext} from "../App";
import "./styles/SearchFormStyle.css"
import {SEARCH_MOVIES_URL} from "./constants/ApiUrl";

/**
 * SearchForm component that renders the SearchForm component
 * @param setMoviesUrl - set movies url
 * @returns {JSX.Element} SearchForm component

 */
function SearchForm({ setMoviesUrl}) {
    const {dispatch} = useContext(AppContext);

    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    /**
     * handleSubmit function that handles the submission of the search query
     * @param event - event handler for the submission of the search query
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        setMoviesUrl(SEARCH_MOVIES_URL + encodeURIComponent(searchQuery) +`&page=${1}`);
        dispatch({ type: 'ADD', payload: searchQuery });
        setSearchQuery('');
    };

    /**
     * handleOnChange function that handles the change of the search query
     * @param event - event handler for the change of the search query
     */
    const handleOnChange = (event) => {
        setSearchQuery(event.target.value);
    }

    /**
     * SearchForm component that renders the SearchForm component
     */
    return (
        <Form bg="transparent" text="white" onSubmit={handleSubmit}>
            <Form.Group className="search-form-field" onClick={() => setShowDropdown(!showDropdown)}>
                <Form.Control
                    required
                    placeholder="Titles, people..."
                    type="text"
                    value={searchQuery}
                    onChange={handleOnChange}/>
            </Form.Group>
            <Form.Group>
                <Button className="search-form-search-btn w-100" type="submit">
                    Search
                </Button>
            </Form.Group>
            <HistorySearch setSearchQuery={setSearchQuery} showDropdown={showDropdown}/>
        </Form>
    );
}

export default SearchForm;



