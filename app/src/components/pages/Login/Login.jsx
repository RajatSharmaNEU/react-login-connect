import React, {useRef, useState} from "react";
import "../../../styles/form.scss";
import {func} from "prop-types";
import axios from "axios";
import {Alert, Button, Form} from "react-bootstrap";

const Login = (props) => {
    const [error, setError] = useState("");
    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = () => {
        axios.get("http://localhost:8080/user/login", {
            params: {
                email: userNameRef.current.value,
                password: passwordRef.current.value
            }
        })
            .then(() => {
                props.handleSuccessFulLogin();
            })
            .catch(error => {
                setError(error?.response?.data?.message);
            });
    }
    return (
        <>
            {
                error &&
                <Alert className="position-absolute top-0 w-100 text-center" variant="danger" onClose={() => setError(null)} dismissible>
                    {error}
                </Alert>
            }
            <div className="container col-5 login-form">
                <h3 className="text-center mt-5">Roast Cafe Login</h3>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" ref={userNameRef}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" ref={passwordRef}/>
                    </Form.Group>
                    <Button variant="outline-secondary" onClick={handleLogin}>Login</Button>
                </Form>
            </div>
        </>
    )
}

Login.propTypes = {
    handleSuccessFulLogin: func
}

export default Login