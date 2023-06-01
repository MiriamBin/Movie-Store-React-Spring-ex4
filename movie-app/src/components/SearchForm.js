import React, { useState } from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import HistorySearch from './HistorySearch';
import {useContext} from 'react';
import {AppContext} from "../App";
import "./styles/SearchFormStyle.css"
import {SEARCH_MOVIES_URL} from "./constants/ApiUrl";

function SearchForm({ setMoviesUrl}) {
    const {searchHistory, dispatch} = useContext(AppContext);

    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMoviesUrl(SEARCH_MOVIES_URL + encodeURIComponent(searchQuery) +`&page=${1}`);
        dispatch({ type: 'ADD', payload: searchQuery });
        setSearchQuery('');
    };

    const handleOnChange = (event) => {
        setSearchQuery(event.target.value);
    }

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



