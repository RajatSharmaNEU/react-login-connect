import React from "react";
import {Button, Form} from "react-bootstrap";

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
    }
    return (
        <div className="container mt-5 col-6 offset-3">
            <h2 className="mb-3">Contact us for further information.</h2>
            <Form onSubmit={handleSubmit} className="align-items-stretch">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" id="name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <textarea className="form-control" id="message" required />
                </Form.Group>
                <Button variant="danger" type="submit" className="align-items-stretch">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact;