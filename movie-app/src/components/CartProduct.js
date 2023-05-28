import {Button, Card} from "react-bootstrap";

function CartProduct({product, removeFromCart}) {
    return (
        <Card style={{ height: '15rem', width: 'auto', flexDirection: 'row', backgroundColor: 'transparent', borderColor: 'white' }}>
            <Card.Img variant="top" src={product.imageUrl} style={{ height: '100%', width: 'auto' }} />
            <Card.Body style={{ color: 'white' }}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
            </Card.Body>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Button variant="outline-light m-3" onClick={() => removeFromCart(product.id)}>Remove</Button>
                <Button variant="outline-light m-3">Info</Button>
            </div>
        </Card>
    );
}
export default CartProduct;
