import CardInfo from "./CardInfo";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function MediaList({ listMovies, cartItems, setCartItems }) {
    if (!Array.isArray(listMovies)) {
        return null; // Return null or show an alternative component/error message when listMovies is not an array
    }

    return (
        <Container>
            <Row>
                {listMovies.map((movie, idx) => (
                    <Col key={idx}>
                        <CardInfo movieData={movie} cartItems={cartItems} setCartItems={setCartItems} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default MediaList;