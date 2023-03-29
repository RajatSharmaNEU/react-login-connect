import React, {useRef, useState} from "react";
import "./login.scss";
import {func} from "prop-types";
import axios from "axios";

const Login = (props) => {
    const [error, setError] = useState("");
    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = () => {
        // console.log(userNameRef.current.value + "--" + passwordRef.current.value);
        axios.get("http://localhost:8080/user/getAll")
            .then(users => {
                users.data.some(user => user.email === userNameRef.current.value)
                    ? props.handleSuccessFulLogin()
                    : setError("User not found")
            })

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