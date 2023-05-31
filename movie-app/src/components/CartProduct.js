import { Button, Card, Col, Row, Image } from "react-bootstrap";

function CartProduct({ product, removeFromCart }) {
    return (
        <Card className="bg-transparent border-white">
            <Row className="no-gutters">
                <Col xs={12} md={4}>
                    <Image src={product.imageUrl} alt={product.title} fluid />
                </Col>
                <Col xs={12} md={5}>
                    <Card.Body className="text-white">
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>${product.price}</Card.Text>
                    </Card.Body>
                </Col>
                <Col xs={12} md={3} className="d-flex align-items-center">
                    <div className="mx-auto">
                        <Button variant="outline-light m-3" onClick={() => removeFromCart(product.id)}>Remove</Button>
                        <Button variant="outline-light m-3">Info</Button>
                    </div>
                </Col>
            </Row>
        </Card>
    );
}
export default CartProduct;
