import {Button, Card, Modal} from "react-bootstrap";
import "./styles/CardInfo.css"
import {AppContext} from "../App";
import {DEFAULT_MOVIE_IMAGE_URL, TMDB_IMAGE_BASE_URL} from "./constants/ApiUrl";
import {useContext, useState} from "react";

function CardInfo({movieData}) {
    const [showModal, setShowModal] = useState(false);
    const {addToCart} = useContext(AppContext);

    const PRICE = 3.99;

    function handleAddToCart(event) {
        event.preventDefault();
        addToCart({
            id: movieData.id,
            title: movieData.title,
            price: PRICE,
            imageUrl: `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`,
        });
    }

    function getImageSource() {
        if (movieData.poster_path) {
            return `${TMDB_IMAGE_BASE_URL}${movieData.poster_path}`;
        } else {
            return DEFAULT_MOVIE_IMAGE_URL;
        }
    }

    function handleReadMore(event) {
        event.preventDefault();
        setShowModal(true);
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
                    <Button className="content-btn" onClick={handleReadMore}>Read more</Button>
                </div>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName="dark-modal">
                <Modal.Header closeButton style={{ backgroundColor: '#333', color: 'white' }}>
                    <Modal.Title>{movieData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#333', color: 'white' }}>
                    <p>{movieData.overview}</p>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#333' }}>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </Card>
    );
}
export default CardInfo;