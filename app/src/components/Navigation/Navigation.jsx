import React from "react";
import {Link} from 'react-router-dom'
import {Nav} from "react-bootstrap";
import "./navigation.scss";

export default function Navigation() {
    return (
        <Nav className="justify-content-center">
            <Link to='/'>Home</Link>
            <Link to='/jobs'>Jobs</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
        </Nav>
    )
}