import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Login from "../pages/Login/Login";
import Navigation from "../Navigation/Navigation";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Jobs from "../pages/Jobs/Jobs";
import Contact from "../pages/Contact/Contact";
import "./app.scss";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleSuccessFulLogin() {
        console.log("loggedIn Successfully");
        setIsLoggedIn(true);
    }

    return (
        <Router>
            {isLoggedIn && <Navigation/>}
            <Routes>
                <Route path='/' element={isLoggedIn ? <Navigate to="/home"/> : <Login handleSuccessFulLogin={handleSuccessFulLogin}/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/jobs' element={<Jobs/>}/>
                <Route path='/profile' element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;
