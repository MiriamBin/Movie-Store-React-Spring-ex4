import {Button, Card, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./CartSytle.css"

function OrderSummary({totalPrice, cartItems}){
    return (
        <Row className="m-2">
            <Card style={{ height: '20rem', backgroundColor: 'transparent', borderColor: 'white'}}>
                <Card.Body className="text-white text-center d-flex flex-column justify-content-between" style={{ fontSize: '1.5em' }}>
                    <Card.Title className="mb-3">Order Summary</Card.Title>
                    <Card.Text className="mb-3">Price: ${totalPrice}</Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button
                            className="content-btn-cart"
                            href="/checkout-page"
                            disabled={cartItems.length === 0}>
                            Checkout
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Row>
    );
}
export default OrderSummary;