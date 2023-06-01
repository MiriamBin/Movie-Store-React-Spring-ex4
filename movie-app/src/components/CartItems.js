import CartProduct from "./CartProduct";
import {Col, Row, Container} from "react-bootstrap";
import React, {useContext} from "react";
import {AppContext} from "../App";

/**
 * CartItems component that renders the CartProduct component
 * @returns {JSX.Element} CartItems component
 */
function CartItems(){
    const {cartItems} = useContext(AppContext);

    /**
     * Renders the CartItems component
     */
    return (
        <Container>
            <Row className="justify-content-center ">
                {cartItems.map((item) => (
                    <Row key={item.id} className="m-2">
                        <Col>
                            <CartProduct product={item}/>
                        </Col>
                    </Row>
                ))}
            </Row>
        </Container>
    );
}
export default CartItems;