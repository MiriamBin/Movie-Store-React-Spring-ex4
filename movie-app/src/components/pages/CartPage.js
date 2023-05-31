import React, { useEffect } from 'react';
import useCart from '../hooks/useCart';
import CartItems from '../CartItems';
import OrderSummary from '../OrderSummary';
import { MSG_EMPTY_CART } from '../constants/Messages';
import { Container, Row, Col, Button } from 'react-bootstrap';

function CartPage() {
    const { cartItems, totalPrice, removeFromCart, clearCart, loading } = useCart();

    useEffect(() => {
        if(!cartItems.length){
            console.log("Cart is empty");
        }
    }, [cartItems]);

    if (loading) {
        return <div>Loading...</div>; // Or some loading spinner
    }

    return (
        <>
            {cartItems.length === 0 ? (
                    <Row className="justify-content-center text-center m-3">
                        <h1 className="text-white">{MSG_EMPTY_CART}</h1>
                    </Row>)
                :
                (<Container className="d-flex">
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
                </Container>)}
        </>
    )
}

export default CartPage;
