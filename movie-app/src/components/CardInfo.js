import {Button, Card} from "react-bootstrap";

function CardInfo({movieData, cartItems, setCartItems}) {

    function handleResponse(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    }

    function handleJson(data) {
        console.log(data);
    }

    function handleError(error) {
        console.log(error);
    }

    function addToCart(event) {
        event.preventDefault();
        //setCartItems((cartItems)=>[...cartItems, movieData]);
        //console.log(cartItems);

        // Send POST request to server
        fetch('/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                msg: "movieData", // Here you can put any data you want to send to server
            }),
        })
            .then(handleResponse)
            .then(handleJson)
            .catch(handleError);
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