import { useContext } from "react";
import CartItems from '../CartItems';
import OrderSummary from '../OrderSummary';
import {MSG_EMPTY_CART } from '../constants/Messages';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { AppContext } from "../../App";
import { MSG_CART_SERVER_ERROR } from '../constants/Messages';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * CartPage component that renders the CartItems and OrderSummary components
 * @returns {JSX.Element} CartPage component
 * @constructor CartPage
 */
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
        <Container fluid className="py-3">
            <Row className="justify-content-center text-center my-3">
                <h1 className="text-white">Cart</h1>
            </Row>
            <Row className="justify-content-center text-center my-3">
                {loading && <Spinner animation="border" variant="light" />}
                {isError && <h2 className="text-white">{MSG_CART_SERVER_ERROR}</h2>}
            </Row>
            {!isError && !loading && (
                <div>
                    <Row className="justify-content-center text-center my-3">
                        {cartItems.length === 0 ? (
                            <h2 className="text-white">{MSG_EMPTY_CART}</h2>
                        ) : (
                            <>
                                <Col lg={6}>
                                    <CartItems />
                                </Col>
                            </>
                        )}
                        <Col lg={4}>
                            <OrderSummary />
                        </Col>
                    </Row>
                </div>
            )}
        </Container>
    );
}

    export default CartPage;
