import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import useFetch from './hooks/useFetch';
import {GENRES_MOVIE_LIST_URL} from "./constants/ApiUrl";
import {FETCH_ERROR_MSG} from "./constants/Messages";

/**
 * Genres component that renders the genres buttons
 * @param setQueryParams - function that sets the query params
 * @returns {JSX.Element} Genres component
 */
function Genres({setQueryParams}) {
    const [{ data: genresData, isLoading: genreIsLoading, isError: genreIsError }] = useFetch(GENRES_MOVIE_LIST_URL, { genres: [] });
    const [selectedGenres, setSelectedGenres] = useState([]);

    /**
     * Sets the genreUrl when the selectedGenres changes
     */
    useEffect(() => {
        let genreIds = '';
        if (selectedGenres.length > 0) {
            genreIds = `&with_genres=${selectedGenres.map((genre) => genre.id).join('|')}`;
        }
        setQueryParams(genreIds);
    }, [selectedGenres]);

    /**
     * Sets the genreUrl
     * @param genre - genre object
     */
    const handleGenreSelect = (genre) => {
        const isGenreSelected = selectedGenres.some((selectedGenre) => selectedGenre.id === genre.id);
        if (isGenreSelected) {
            setSelectedGenres((prevGenres) => prevGenres.filter((prevGenre) => prevGenre.id !== genre.id));
        } else {
            setSelectedGenres((prevGenres) => [...prevGenres, genre]);
        }
    };

    /**
     * Clears the selected genres
     */
    const handleClearSelection = () => {
        setSelectedGenres([]);
    };

    /**
     * If genreIsLoading is true, render a spinner, if genreIsError is true, render an error message, otherwise render the genres buttons
     */
    if (genreIsLoading) {
        return (
            <Row className="justify-content-center text-center">
                <Col>
                    <Spinner animation="border" variant="light" />
                </Col>
            </Row>
        );
    }

    /**
     * If genreIsError is true, render an error message
     */
    if (genreIsError) {
        return (
            <Row className="justify-content-center text-center">
                <Col>
                    <h4 className="text-white">Error: {FETCH_ERROR_MSG}</h4>
                </Col>
            </Row>
        );
    }

    /**
     * Otherwise render the genres buttons
     */
    return (
            <Row className="justify-content text-center m-2">
                {genresData.genres.map((genre) => (
                    <Col key={genre.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Button
                            variant={selectedGenres.some((selectedGenre) => selectedGenre.id === genre.id) ? "light" : "outline-light"}
                            className="w-100 mb-2"
                            onClick={() => handleGenreSelect(genre)}>
                            {genre.name}
                        </Button>
                    </Col>
                ))}
                {selectedGenres.length > 0 && (
                    <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Button
                            variant="outline-danger"
                            className="w-100"
                            onClick={handleClearSelection}>
                            Clear genres Selection
                        </Button>
                    </Col>
                )}
            </Row>
    );
}

export default Genres;
