import {Button, Modal} from "react-bootstrap";

/**
 * MovieModal component that renders the MovieModal component
 * @param movieData - movie data
 * @param showModal - show modal
 * @param setShowModal  - set show modal
 * @returns {JSX.Element}   MovieModal component
 */
function MovieModal({ movieData, showModal, setShowModal }) {
    /**
     * Renders the MovieModal component
     */
    return (
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
    );
}

export default MovieModal;