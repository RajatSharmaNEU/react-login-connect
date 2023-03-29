import React, {useRef, useState} from "react";
import "./login.scss";
import {func} from "prop-types";
import axios from "axios";

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
            .then((response) => {
                console.log(response);
                props.handleSuccessFulLogin();
            })
            .catch(error => {
                console.log(error);
                setError(error?.response?.data?.message);
            });
    }
    return (
        <div className="login-page">
            {error && <h1>{error}</h1>}
            <h1>Login Page</h1>
            <form>
                <label>
                    Username:
                    <input type="text" ref={userNameRef} className="login-input"/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" ref={passwordRef} className="login-input"/>
                </label>
                <br/>
                <button type='button' className="login-button" onClick={handleLogin}>Sign In</button>
            </form>
        </div>
    )
}

Login.propTypes = {
    handleSuccessFulLogin: func
}

export default Login