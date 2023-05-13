import {Button, Card} from "react-bootstrap";

function CardInfo({movieData, cartItems, setCartItems}) {

    function addToCart(event) {
        event.preventDefault();
        setCartItems((cartItems)=>[...cartItems, movieData]);
        console.log(cartItems);
    }

    return (
        <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} />
            <Card.Body>
                <Card.Title>{movieData.title}</Card.Title>
                <Card.Text>
                    {movieData.overview}
                </Card.Text>
            </Card.Body>
            <Button variant="primary" onClick={addToCart}>Add to cart</Button>
        </Card>
    );
}
export default CardInfo;