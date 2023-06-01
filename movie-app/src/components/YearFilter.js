import React, { useEffect, useState } from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import Pagination from "./Pagination";

/**
 * YearFilter component that renders the year filter
 * @param setQueryParams - function that sets the query params
 * @returns {JSX.Element} - YearFilter component
 */
function YearFilter({ setQueryParams }) {
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 24; // Define how many items per page

    /**
     * useEffect hook that generates the years array
     */
    useEffect(() => {
        // Generate years from current year to 1882
        const currentYear = new Date().getFullYear();
        const yearsArray = Array.from(
            { length: currentYear - 1882 + 1 },
            (_, index) => currentYear - index
        );
        setYears(yearsArray);
    }, []);

    /**
     * useEffect hook that sets the query params
     */
    useEffect(() => {
        if (selectedYear.length > 0) {
            setQueryParams(`&primary_release_year=${selectedYear}`);
        } else {
            setQueryParams('');
        }
    }, [selectedYear]);

    /**
     * handleYearSelect function that handles the year selection
     * @param year  - year to be selected
     */
    const handleYearSelect = (year) => {
        const isYearSelected = selectedYear.includes(year);
        if (isYearSelected) {
            setSelectedYear((prevYear) => prevYear.filter((prev) => prev !== year));
        } else {
            setSelectedYear((prevYear) => [...prevYear, year]);
        }
    };

    /**
     * handleClearYearSelection function that clears the year selection
     */
    const handleClearYearSelection = () => {
        setSelectedYear([]);
    };

    const totalPages = Math.ceil(years.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = years.slice(indexOfFirstItem, indexOfLastItem);
    const range = `${years[indexOfFirstItem]} - ${years[Math.min(indexOfLastItem - 1, years.length - 1)]}`;

    /**
     * Return the YearFilter component
     */
    return (
        <>
            <Card bg="transparent" text="white">
                <Card.Header>
                    <Row className="justify-content-center text-center">
                        <h5 className="text-white">{range}</h5>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="justify-content-start text-center">
                            {currentItems.map((year) => (
                                <Col xs={6} sm={4} md={3} lg={3} xl={2} key={year}>
                                    <Button
                                        variant={selectedYear.includes(year) ? 'light' : 'outline-light'}
                                        className="w-100 m-1"
                                        onClick={() => handleYearSelect(year)}
                                    >
                                        {year}
                                    </Button>
                                </Col>
                            ))}
                        </Row>
                        <Row className="justify-content-center text-center">
                            {selectedYear.length > 0 && (
                                <Col>
                                    <Button
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        lg={3}
                                        xl={2}
                                        variant="outline-danger m-2"
                                        onClick={handleClearYearSelection}
                                    >
                                        Clear Years Selection
                                    </Button>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </Card.Body>
                <Card.Footer>
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </Card.Footer>
            </Card>
        </>
    );
}

export default YearFilter;
