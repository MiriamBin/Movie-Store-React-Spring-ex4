import React, { useEffect, useState } from 'react';
import MediaList from "./MediaList";
import CartItems from "./CartItems";
import {Button, Col, Row} from "react-bootstrap";
import OrderSummary from "./OrderSummary";
import Container from "react-bootstrap/Container";

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);  // new state variable for total price

    useEffect(() => {
        fetch('/getCart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setCartItems(data.cart);
                setTotalPrice(data.total);  // set total price state here
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    function removeFromCart(productId) {
        fetch('/removeProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productId),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                setCartItems(cartItems.filter(item => item.id !== productId));  // Update local state
            })
            .catch(console.error);
    }
    return (
        <Container className="d-flex">
            <Row className="justify-content-center">
                <Col xs={8}>
                    <CartItems items={cartItems} removeFromCart={removeFromCart}/>
                </Col>
                <Col>
                    <Row>
                        <OrderSummary totalPrice={totalPrice}/>  {/* use state variable here */}
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
