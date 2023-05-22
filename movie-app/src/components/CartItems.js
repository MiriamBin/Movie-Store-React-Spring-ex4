import Container from "react-bootstrap/Container";
import {Button, Card, Col, Row} from "react-bootstrap";
import CardInfo from "./CardInfo";
import React from "react";
import CartProduct from "./CartProduct";

function CartItems({items}){

    function removeFromCart(event){
        event.preventDefault();
        console.log("removeFromCart");
    }

//     <Col key={idx}>
//         <Card className="myCard">
//             <div className="innerCard">
//                 <div className="frontSide">
//                     <Card.Img variant="top"
//                               src={movie.imageUrl}
//                               alt={movie.title}
//                               className="cardImage"
//                     />
//                 </div>
//                 <div className="backSide">
//                     <Card.Title>
//                         {movie.title}
//                     </Card.Title>
//                     <Card.Text>
//                         price: {'3.99$'} {/*TODO: to change to a const variable*/}
//                     </Card.Text>
//                     <Button variant="primary" onClick={removeFromCart}>removeFromCart</Button>
//                     <Button className="btn">Read more</Button>
//                 </div>
//             </div>
//         </Card>
//     </Col>
// ))}

    return (
        <Container>
            <Row className="justify-content-center ">
                {items.map((movie, idx) => (
                    <Row className="m-2">
                        <Col key={idx}>
                            <CartProduct product={movie} idx={idx}/>
                        </Col>
                    </Row>
                ))}
            </Row>
        </Container>
    );
}
export default CartItems;