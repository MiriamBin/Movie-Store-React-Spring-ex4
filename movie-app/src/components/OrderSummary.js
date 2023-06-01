import {Button, Card, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./styles/CartSytle.css"
import {LinkContainer} from "react-router-bootstrap";
import React, {useContext} from "react";
import {AppContext} from "../App";

function OrderSummary(){
    const {cartItems, totalPrice, clearCart} = useContext(AppContext);
    return (
        <Row className="m-2">
            <Card style={{ height: '20rem', backgroundColor: 'transparent', borderColor: 'white'}}>
                <Card.Body className="text-white text-center d-flex flex-column justify-content-between" style={{ fontSize: '1.5em' }}>
                    <Card.Title className="mb-3">Order Summary</Card.Title>
                    <Card.Text className="mb-3">Price: ${totalPrice}</Card.Text>
                    <div className="d-flex justify-content-center">
                        <LinkContainer to="/checkout-page">
                            <Button
                                className="content-btn-cart"
                                disabled={cartItems.length === 0}
                            >
                                Checkout
                            </Button>
                        </LinkContainer>
                    </div>
                </Card.Body>
            </Card>
            <Card.Footer className="text-white text-center d-flex flex-column justify-content-between mt-3">
                <Button variant="outline-light" onClick={clearCart}>Clear Cart</Button>
            </Card.Footer>
        </Row>
    );
}
export default OrderSummary;