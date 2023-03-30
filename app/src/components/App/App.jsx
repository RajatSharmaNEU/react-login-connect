import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Login from "../pages/Login/Login";
import Navigation from "../common/Navigation/Navigation";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Jobs from "../pages/Jobs/Jobs";
import Contact from "../pages/Contact/Contact";
import "./app.scss";
import Footer from "../common/Footer/Footer";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleSuccessFulLogin() {
        console.log("loggedIn Successfully");
        setIsLoggedIn(true);
    }

    function handleSignOut() {
        setIsLoggedIn(false);
    }

    return (
        <Router>
            {isLoggedIn && <Navigation handleSignOut={handleSignOut}/>}
            <Routes>
                <Route exact path='/'
                       element={
                           isLoggedIn ?
                               <Navigate to="/home"/> :
                               <Login handleSuccessFulLogin={handleSuccessFulLogin}/>
                       }
                />
                {
                    isLoggedIn  &&
                    <>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/jobs' element={<Jobs/>}/>
                        <Route path='/about' element={<AboutUs/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                    </>
                }
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
