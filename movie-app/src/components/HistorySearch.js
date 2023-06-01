import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AppContext } from "../App";

import 'bootstrap-icons/font/bootstrap-icons.css';

/**
 * HistorySearch component that renders the HistorySearch component
 * @param setSearchQuery - search query
 * @returns {JSX.Element} HistorySearch component
 */
function HistorySearch({ setSearchQuery }) {
    const { searchHistory, dispatch } = useContext(AppContext);
    const [show, setShow] = useState(false);

    /**
     * handleClose and handleShow functions that handle the closing and opening of the Offcanvas
     */
    const handleClose = () => setShow(false);
    /**
     * handleShow function that handles the opening of the Offcanvas
     */
    const handleShow = () => setShow(true);

    /**
     * handleDelete function that handles the deletion of the search history
     * @param index
     */
    const handleDelete = (index) => {
        dispatch({ type: 'DELETE', payload: index });
    };

    /**
     * handleDeleteAll function that handles the deletion of all the search history
     */
    const handleDeleteAll = () => {
        dispatch({ type: 'DELETE_ALL' });
    };

    /**
     * HistorySearch component that renders the HistorySearch component
     */
    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                <i className="bi bi-clock-history"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="bg-dark text-white d-flex flex-column">
                <Offcanvas.Header closeButton className="bg-secondary">
                    <Offcanvas.Title>Search History</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column justify-content-between">
                    <div>
                        {searchHistory.map((item, index) => (
                            <div key={index} className="mt-auto p-1">
                                <Dropdown.Item className="d-flex justify-content-between align-items-center text-white">
                                    <span onClick={() => setSearchQuery(item)}>{item}</span>
                                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)}>X</Button>
                                </Dropdown.Item>
                            </div>
                        ))}
                    </div>
                    {searchHistory.length > 0 && (
                        <div className="mt-auto">
                            <Button variant="outline-danger" onClick={handleDeleteAll}>Clear All</Button>
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas>


        </>
    );
}

export default HistorySearch;
