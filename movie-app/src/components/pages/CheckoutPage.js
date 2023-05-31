import React, { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import "../styles/CheckoutStyle.css";
import Container from "react-bootstrap/Container";

function CheckoutPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [firstNameInvalid, setFirstNameInvalid] = useState(false);
    const [lastNameInvalid, setLastNameInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);

    const VALIDATION_MESSAGE_NAME = 'Please enter a valid name';
    const VALIDATION_MESSAGE_EMAIL = 'Please enter a valid email';

    const validateEmail = (email) => {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const validateName = (name) => {
        let re = /^[a-zA-Z\s]*$/;
        return re.test(name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isFirstNameValid = firstName !== '' && validateName(firstName);
        const isLastNameValid = lastName !== '' && validateName(lastName);
        const isEmailValid = email !== '' && validateEmail(email);

        setFirstNameInvalid(!isFirstNameValid);
        setLastNameInvalid(!isLastNameValid);
        setEmailInvalid(!isEmailValid);

        if (isFirstNameValid && isLastNameValid && isEmailValid) {
            fetch('/doPurchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    payment: 0.0
                }),
            })
                .then(response => {
                    if (response.status !== 201) { // check for the status code you're returning
                        return Promise.reject(response.json());
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((errorPromise) => {
                    errorPromise.then((errorMap) => {
                        console.error('Server validation error:', errorMap);
                        if (errorMap.hasOwnProperty('firstName')) {
                            setFirstNameInvalid(true);
                        }
                        if (errorMap.hasOwnProperty('lastName')) {
                            setLastNameInvalid(true);
                        }
                        if (errorMap.hasOwnProperty('email')) {
                            setEmailInvalid(true);
                        }
                    });
                });
        }
    };

    return (
        <Container bg="transparent" text="white" className="col-6">
            <Form className="checkout-form" onSubmit={handleSubmit}>
                <Form.Text id="checkout-form-heading">Checkout</Form.Text>
                <Form.Group className="checkout-form-field m-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        isInvalid={firstNameInvalid}
                    />
                    <Alert variant="danger" show={firstNameInvalid}>
                        {VALIDATION_MESSAGE_NAME}
                    </Alert>
                </Form.Group>

                <Form.Group className="checkout-form-field m-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        isInvalid={lastNameInvalid}
                    />
                    <Alert variant="danger" show={lastNameInvalid}>
                        {VALIDATION_MESSAGE_NAME}
                    </Alert>
                </Form.Group>

                <Form.Group className="checkout-form-field m-3">
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        isInvalid={emailInvalid}
                    />
                    <Alert variant="danger" show={emailInvalid}>
                        {VALIDATION_MESSAGE_EMAIL}
                    </Alert>
                </Form.Group>


                    <Button className="checkout-form-btn" type="submit">
                        Complete Purchase
                    </Button>

            </Form>
        </Container>
    );
}

export default CheckoutPage;

