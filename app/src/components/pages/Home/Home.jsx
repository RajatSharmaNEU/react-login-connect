import React from "react";
import Cards from "../../common/Cards";
import HomeData from "../../../content/HomeData";
import {Container} from "react-bootstrap";

const Home = () => {
    return (
        <Container className="text-center">
            <h1 className="text-primary">Roast Cafe</h1>
            <h5 className="text-dark m-5">
                Welcome to our cozy and charming cafe! Here at Roast, we strive to provide a warm and inviting
                atmosphere where you can relax, catch up with friends, or get some work done.
                Our menu features a variety of delicious coffee drinks, including classic espresso beverages, specialty
                lattes, and creamy cappuccinos. We also offer a selection of loose-leaf teas, refreshing iced beverages,
                and decadent hot chocolates.
            </h5>
            <hr/>
            <h4 className="text-dark">We are located at the following cities - </h4>
            <Cards className="d-inline-block" details={HomeData}/>
        </Container>
    )
};

export default Home;
