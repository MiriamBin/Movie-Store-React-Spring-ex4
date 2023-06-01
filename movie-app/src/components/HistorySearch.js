import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AppContext } from "../App";

import 'bootstrap-icons/font/bootstrap-icons.css';

function HistorySearch({ setSearchQuery }) {
    const { searchHistory, dispatch } = useContext(AppContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// HistorySearch component
    const handleDelete = (index) => {
        dispatch({ type: 'DELETE', payload: index });
    };

    const handleDeleteAll = () => {
        dispatch({ type: 'DELETE_ALL' });
    };

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
                            <div className="mt-auto p-1">
                                <Dropdown.Item key={index} className="d-flex justify-content-between align-items-center text-white">
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
