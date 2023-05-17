import CardInfo from "./CardInfo";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function MediaList({ listMovies, cartItems, setCartItems }) {
    // TODO: i don't understand for what this function is used
    if (!Array.isArray(listMovies)) {
        return null; // Return null or show an alternative component/error message when listMovies is not an array
    }




    return (
        <Container>
            <Row className="justify-content-center g-lg-5 g-md-4 g-sm-3 ">
                {listMovies.map((movie, idx) => (
                    <Col key={idx}>
                        <CardInfo movieData={movie}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default MediaList;