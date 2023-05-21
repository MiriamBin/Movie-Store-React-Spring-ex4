import {Button, Card} from "react-bootstrap";
import "./CardInfo.css"

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

    function getImageSource() {
        if (movieData.poster_path) {
            return `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
        } else {
            return './image-not-found-resized.jpg'; // Replace with the URL of your default image
        }
    }

/*
    Title: Cars
    Original Title: Cars
    Release Date: June 8, 2006
    Overview: Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.
    Popularity: 42.409
    Vote Average: 6.92
    Vote Count: 12,572
    Adult: false
    Backdrop Path: "/sd4xN5xi8tKRPrJOWwNiZEile7f.jpg"
    Genre IDs: [16, 12, 35, 10751]
    Original Language: English
    Poster Path: "/u4G8EkiIBZYx0wEg2xDlXZigTOZ.jpg"
    Video: false
*/
    console.log(movieData); //TODO: to be removed

    return (
        <Card className="myCard">
            <div className="innerCard">
                <div className="frontSide">
                    <Card.Img variant="top"
                              src={getImageSource()}
                              alt={movieData.title}
                              className="cardImage"
                    />
                </div>
                <div className="backSide">
                    <Card.Title>
                        {movieData.title}
                    </Card.Title>
                    <Card.Text>
                        price: {'3.99$'} {/*TODO: to change to a const variable*/}
                    </Card.Text>
                    <Button variant="primary" onClick={addToCart}>Add to cart</Button>
                    <Button className="btn">Read more</Button>
                </div>
            </div>
        </Card>
    );
}
export default CardInfo;