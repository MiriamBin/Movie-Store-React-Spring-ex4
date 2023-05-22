import React from 'react';
import { Form, Button } from 'react-bootstrap';

function CheckoutPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted');
    }

    return (
        <div className="container">
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter first name" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid first name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter last name" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid last name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Complete Purchase
                </Button>
            </Form>
        </div>
    );
}

export default CheckoutPage;
