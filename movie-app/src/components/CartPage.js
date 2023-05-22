import React, { useEffect, useState } from 'react';
import MediaList from "./MediaList";
import CartItems from "./CartItems";
import {Button, Col, Row} from "react-bootstrap";
import OrderSummary from "./OrderSummary";
import Container from "react-bootstrap/Container";

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('/getCart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => setCartItems(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    console.log(cartItems);
    return (
        <Container className="d-flex">
            <Row className="justify-content-center">
                <Col xs={8}>
                    <CartItems items={cartItems}/>
                </Col>
                <Col>
                    <Row>
                        <OrderSummary totalPrice={"100000"}/>
                    </Row>
                    <Row>
                        <Button className="content-btn-p"> Clear Cart</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default CartPage;
