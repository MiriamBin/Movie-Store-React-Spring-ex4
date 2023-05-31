import React, { useEffect, useState } from 'react';
import CartItems from "../CartItems";
import {Button, Col, Row} from "react-bootstrap";
import OrderSummary from "../OrderSummary";
import Container from "react-bootstrap/Container";
import "../styles/CartSytle.css"


function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [message, setMessage] = useState('');
    const [showToast, setShowToast] = useState(false); // toast visibility statestate variable for message

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
                setTotalPrice(data.total);
            })
            .catch((error) => {
                setMessage('Error: ' + error);
                setShowToast(true); // Show the toast on error
            });
    }, []);

    function removeFromCart(productId) {
        fetch('/removeProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: productId }),
        })
            .then(response => {
                if (!response.ok) {
                    setMessage('Error');
                    setShowToast(true); // Show the toast on error
                }
                return response.json();

            }).then(data => {
            setCartItems(cartItems.filter(item => item.id !== productId));
            setTotalPrice(data.total);  // set total price state here
        })
            .catch(console.error);
    }

    function clearCart() {
        fetch('/clearCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then(data => {
                setCartItems(data.cart);  // Clear local cart
                setTotalPrice(data.total);  // Reset total price to 0
            })
            .catch(console.error);
    }

    return (
        <>
            <Container className="d-flex">
                <Row className="justify-content-center">
                    <Col>
                        <Row>
                            <OrderSummary totalPrice={totalPrice} cartItems={cartItems}/>
                        </Row>
                        <Row>
                            <Button variant="outline-light" onClick={clearCart}>Clear Cart</Button>
                        </Row>
                    </Col>
                    <Col xs={8}>
                        <CartItems items={cartItems} removeFromCart={removeFromCart}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CartPage;
