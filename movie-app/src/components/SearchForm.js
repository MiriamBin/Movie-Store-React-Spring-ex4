import React, { useState } from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import HistorySearch from './HistorySearch';
import {useContext} from 'react';
import {AppContext} from "../App";
import "./styles/SearchFormStyle.css"
import {SEARCH_MOVIES_URL} from "./constants/ApiUrl";

function SearchForm({ setMoviesUrl}) {
    //TODO: handle empty search query
    const {searchHistory, setSearchHistory} = useContext(AppContext);

    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMoviesUrl(SEARCH_MOVIES_URL + encodeURIComponent(searchQuery) +`&page=${1}`);
        setSearchHistory([...searchHistory, searchQuery]);
        setSearchQuery('');
    };

    const handleOnChange = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
        <Form bg="transparent" text="white" onSubmit={handleSubmit}>
            <Form.Text id="heading">Search</Form.Text>
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
            <Form.Text id="heading">Search History</Form.Text>

            <HistorySearch setSearchQuery={setSearchQuery} showDropdown={showDropdown}/>

        </Form>
    );
}

export default SearchForm;



