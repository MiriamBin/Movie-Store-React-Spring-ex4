import Container from "react-bootstrap/Container";
import {Button, Card, Col, Row} from "react-bootstrap";
import CardInfo from "./CardInfo";
import React from "react";

function CartItems({items}){

    function removeFromCart(event){
        event.preventDefault();
        console.log("removeFromCart");
    }

    return (
        <Container>
            <Row className="justify-content-center g-lg-5 g-md-4 g-sm-3 ">
                {items.map((movie, idx) => (
                    <Col key={idx}>
                        <Card className="myCard">
                            <div className="innerCard">
                                <div className="frontSide">
                                    <Card.Img variant="top"
                                              src={movie.imageUrl}
                                              alt={movie.title}
                                              className="cardImage"
                                    />
                                </div>
                                <div className="backSide">
                                    <Card.Title>
                                        {movie.title}
                                    </Card.Title>
                                    <Card.Text>
                                        price: {'3.99$'} {/*TODO: to change to a const variable*/}
                                    </Card.Text>
                                    <Button variant="primary" onClick={removeFromCart}>removeFromCart</Button>
                                    <Button className="btn">Read more</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default CartItems;