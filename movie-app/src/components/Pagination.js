import {Button, Col, Row} from "react-bootstrap";
import React, {useEffect} from "react";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const getPageButtons = () => {
        const buttonsToShow = 5; // Total number of buttons to show (including ellipsis)
        const sideButtons = 2; // Number of buttons to show on each side

        const buttons = [];
        let startPage, endPage;

        if (totalPages <= buttonsToShow) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= sideButtons + 1) {
                startPage = 1;
                endPage = buttonsToShow - 1;
            } else if (currentPage >= totalPages - sideButtons) {
                startPage = totalPages - buttonsToShow + 2;
                endPage = totalPages;
            } else {
                startPage = currentPage - sideButtons;
                endPage = currentPage + sideButtons;
            }
        }

        // Add previous button
        buttons.push(
            <Col xs={6} sm={3} md={2} lg={1} key="prev">
                <Button
                    variant="outline-light"
                    className="w-100"
                    disabled={currentPage === 1}
                    onClick={handlePreviousPage}
                >
                    {'<'}
                </Button>
            </Col>
        );

        // Add ellipsis button if needed
        if (startPage > 1) {
            buttons.push(
                <Col xs={6} sm={3} md={2} lg={1} key="ellipsis-start">
                    <Button variant="outline-light" className="w-100" disabled>
                        ...
                    </Button>
                </Col>
            );
        }

        // Add page buttons
        for (let page = startPage; page <= endPage; page++) {
            buttons.push(
                <Col xs={6} sm={3} md={2} lg={1} key={page}>
                    <Button
                        variant={currentPage === page ? 'light' : 'outline-light'}
                        className="w-100"
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </Button>
                </Col>
            );
        }

        // Add ellipsis button if needed
        if (endPage < totalPages) {
            buttons.push(
                <Col xs={6} sm={3} md={2} lg={1} key="ellipsis-end">
                    <Button variant="outline-light" className="w-100" disabled>
                        ...
                    </Button>
                </Col>
            );
        }

        // Add next button
        buttons.push(
            <Col xs={6} sm={3} md={2} lg={1} key="next">
                <Button
                    variant="outline-light"
                    className="w-100"
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                >
                    {'>'}
                </Button>
            </Col>
        );

        return buttons;
    };

    return <Row className="justify-content-center text-center">{getPageButtons()}</Row>;
}

export default Pagination;