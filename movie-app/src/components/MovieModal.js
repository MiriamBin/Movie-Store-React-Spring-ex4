import {Button, Modal} from "react-bootstrap";

function MovieModal({ movieData, showModal, setShowModal }) {
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