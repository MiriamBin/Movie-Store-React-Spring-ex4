import React, { useEffect } from 'react';
import {useContext} from "react";
import CartItems from '../CartItems';
import OrderSummary from '../OrderSummary';
import {FETCH_ERROR_MSG, MSG_EMPTY_CART} from '../constants/Messages';
import {Container, Row, Col, Button, Spinner} from 'react-bootstrap';
import {AppContext} from "../../App";
import {MSG_CART_SERVER_ERROR} from '../constants/Messages'

function CartPage() {

    const { cartItems, loading, isError }  = useContext(AppContext);

    if(isError || loading){
        return (
            <>
                <Row className="justify-content-center text-center m-3">
                    <h1 className="text-white">Cart</h1>
                </Row>
                <Row className="justify-content-center text-center m-3">
                    {loading && <Spinner animation="border" variant="light"/>}
                    {isError && (<h2 className="text-white">{MSG_CART_SERVER_ERROR}</h2>) }
                </Row>
            </>
        )
    }

    return (
        <>
            <Row className="justify-content-center text-center m-3">
                <h1 className="text-white">Cart</h1>
            </Row>
            <Row className="justify-content-center text-center m-3">>
                {cartItems.length === 0 ?
                    (<h2 className="text-white">{MSG_EMPTY_CART}</h2>) :
                    (<Container>
                        <Row className="justify-content-center">
                            <Col>
                                <Row>
                                    <OrderSummary/>
                                </Row>
                            </Col>
                            <Col xs={8}>
                                <Container>
                                    <CartItems/>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                )}
            </Row>
        </>
    )
}

export default CartPage;
