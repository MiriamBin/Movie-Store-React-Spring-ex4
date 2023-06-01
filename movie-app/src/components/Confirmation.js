import React, {useState} from 'react';
import { Toast } from 'react-bootstrap';

function Confirmation({ message, showToast, setShowToast }) {
    const [show, setShow] = useState(showToast);

    return (
        <Toast style={{ position: 'fixed', bottom: 20, right: 20 }} onClose={() => { setShow(false); setShowToast(false); }} show={show} delay={3000} autohide>
            <Toast.Header>
                <strong className="mr-auto">Confirmation</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
}

export default Confirmation;
