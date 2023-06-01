import {Button, Card} from "react-bootstrap";
import "./styles/CardInfo.css"
import {AppContext} from "../App";
import {useContext} from "react";

function CardInfo({movieData}) {

    const {addToCart} = useContext(AppContext);

    const PRICE = 3.99;

    function handleResponse(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    }

    function handleJson(data) {
        //console.log(data); TODO: get other from server
    }

    function handleError(error) {
        console.log(error);
    }

    function handleAddToCart(event) {
        event.preventDefault();
        addToCart({
            id: movieData.id,
            title: movieData.title,
            price: PRICE,
            imageUrl: `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`, //TODO: USE CONSTANT
        });
    }

    function getImageSource() {
        if (movieData.poster_path) {
            return `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
        } else { //TODO: use constant
            return './image-not-found.jpg'; // Replace with the URL of your default image
        }
    }

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
                        price: {PRICE}
                    </Card.Text>
                    <Button className="content-btn" onClick={handleAddToCart}>Add to cart</Button>
                    <Button className="content-btn">Read more</Button>
                </div>
            </div>
        </Card>
    );
}
export default CardInfo;