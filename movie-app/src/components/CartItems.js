import Container from "react-bootstrap/Container";
import {Button, Card, Col, Row} from "react-bootstrap";
import CardInfo from "./CardInfo";
import React from "react";
import CartProduct from "./CartProduct";

function CartItems({items, removeFromCart}){

    return (
        <Container>
            <Row className="justify-content-center ">
                {items.map((movie, idx) => (
                    <Row className="m-2">
                        <Col key={idx}>
                            <CartProduct product={movie} idx={idx} removeFromCart={removeFromCart}/>
                        </Col>
                    </Row>
                ))}
            </Row>
        </Container>
    );
}
export default CartItems;