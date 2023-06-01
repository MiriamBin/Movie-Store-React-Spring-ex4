import {Button, Card, Col, Row, Image, Badge} from "react-bootstrap";
import { useContext } from "react";
import { AppContext } from "../App";
import { DEFAULT_MOVIE_IMAGE_URL } from "./constants/ApiUrl";

/**
 * CartProduct component that renders the CartProduct component
 * @param product
 * @returns {JSX.Element}
 * @constructor
 */
function CartProduct({ product }) {
    const { removeFromCart } = useContext(AppContext);

    return (
        <Card className="bg-transparent border-white">
            <Row className="no-gutters">
                <Col xs={12} md={4} className="d-flex align-items-center">
                    <Image src={!product.imageUrl ? DEFAULT_MOVIE_IMAGE_URL : product.imageUrl} alt={product.title} fluid />
                </Col>
                <Col xs={12} md={5}>
                    <Card.Body className="text-white">
                        <Card.Title>{product.title}</Card.Title>
                        <h5>
                            <Badge bg="success">${product.price}</Badge>
                        </h5>
                    </Card.Body>
                </Col>
                <Col xs={12} md={3} className="d-flex align-items-center">
                    <div className="mx-auto">
                        <Button
                            variant="outline-light m-3"
                            onClick={() => removeFromCart(product.id)}>Remove
                        </Button>
                    </div>
                </Col>
            </Row>
        </Card>
    );
}

export default CartProduct;
