import Dropdown from "react-bootstrap/Dropdown";
import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import { StateContext } from './SearchPage';

function HistorySearch({ setSearchQuery, showDropdown }){
    const { historySearch, dispatch } = useContext(StateContext);

    const handleDelete = (index) => {
        dispatch({ type: 'DELETE', payload: index });
    };

    const handleDeleteAll = () => {
        dispatch({ type: 'DELETE_ALL' });
    };

    return (
        <Dropdown show={showDropdown}>
            <Dropdown.Menu id="dropdown-autoclose-true" className="w-50">
                <Dropdown.Item onClick={handleDeleteAll} className="d-flex justify-content-center align-items-center">
                    {
                        historySearch.length > 0 && (
                        <Button variant="danger">Clear All</Button>)
                    }
                </Dropdown.Item>
                {
                    historySearch.map((item, index) => (
                        <Dropdown.Item key={index} className="d-flex justify-content-between align-items-center">
                            <span onClick={(event) => setSearchQuery(item)}>{item}</span>
                            <Button variant="danger" size="sm" onClick={(event) => {
                                handleDelete(index);
                            }}>X</Button>
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}


export default HistorySearch;
