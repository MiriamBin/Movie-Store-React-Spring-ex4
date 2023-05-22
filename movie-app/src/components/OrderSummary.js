import {Button, Card, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function OrderSummary({totalPrice}){
    return (
        <Row className="m-2">
            <Card style={{ height: '20rem', backgroundColor: 'transparent', borderColor: 'white'}}>
                <Card.Body className="text-white text-center d-flex flex-column justify-content-between" style={{ fontSize: '1.5em' }}>
                    <Card.Title className="mb-3">Order Summary</Card.Title>
                    <Card.Text className="mb-3">Price: ${totalPrice}</Card.Text>
                    <Button variant="outline-light" href="/checkout-page">Checkout</Button>
                </Card.Body>
            </Card>
        </Row>
    );
}
export default OrderSummary;