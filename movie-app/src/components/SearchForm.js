import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import HistorySearch from './HistorySearch';

function SearchForm({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchQuery);
    };

    return (
        <>
            <Form className="form" onSubmit={handleSubmit}>
                <Form.Text id="heading">Search</Form.Text>
                <Form.Group className="field" onClick={() => setShowDropdown(!showDropdown)}>
                    <Form.Control
                        placeholder="bla bla bla"
                        type="text"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                </Form.Group>

                <HistorySearch  setSearchQuery={setSearchQuery} showDropdown={showDropdown} />
                <Button className="search-btn" type="submit">
                    Search
                </Button>
            </Form>
        </>
    );
}

export default SearchForm;
