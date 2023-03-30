import React from "react";
import {Link} from 'react-router-dom'
import {Nav} from "react-bootstrap";
import "./navigation.scss";
import {func} from "prop-types";

const Navigation = (props) => {
    return (
        <Nav className="justify-content-evenly position-fixed top-0 w-100">
            <Link to='/'>Home</Link>
            <Link to='/jobs'>Jobs</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link className="text-danger" to='/' onClick={props.handleSignOut}>SignOut</Link>
        </Nav>
    )
}

Navigation.propTypes = {
    handleSignOut: func
}

export default Navigation;
