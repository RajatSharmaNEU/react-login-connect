import React from "react";
import {Link} from 'react-router-dom'

export default function Navigation(){
    return(
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/jobs'>Jobs</Link>
            </nav>
            <footer>
                <div>This is footer</div>
            </footer>
        </div>
    )
}