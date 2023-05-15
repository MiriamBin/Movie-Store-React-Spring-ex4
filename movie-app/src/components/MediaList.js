import CardInfo from "./CardInfo";
import React from "react";
import {Col, Row} from "react-bootstrap";

function MediaList({listMovies, cartItems, setCartItems}){

    return (
        <Row xs={5} md={5} className="g-4">
            {listMovies.map((movie, idx) => (
                <Col key={idx}>
                    <CardInfo movieData={movie} cartItems={cartItems} setCartItems ={setCartItems}/>
                </Col>
            ))}
        </Row>
    );
}
export default MediaList;