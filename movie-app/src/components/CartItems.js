import CartProduct from "./CartProduct";
import {Col, Row, Container} from "react-bootstrap";
import React, {useContext} from "react";
import {AppContext} from "../App";

function CartItems(){
    const {cartItems} = useContext(AppContext);
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