import React from "react";
import Cards from "../../common/Card/Cards";
import aboutUsData from "../../../content/aboutUsData";
import {Container} from "react-bootstrap";

const AboutUs = () => {
    return (
        <Container className="mt-5 mb-5">
            <h1 className="text-primary text-center mb-2">Our Goal</h1>
            <p className="p-5 text-dark">
                {
                    `
                    Welcome to our new cafe, where we serve up delicious drinks, tasty treats, and a cozy atmosphere that will make you feel right at home. Whether you're looking for a quick caffeine fix, a place to work or hang out with friends, or a sweet treat to brighten your day, we've got you covered.
                Our menu features a variety of coffee and tea drinks, made with high-quality beans and leaves, as well as a selection of juices, smoothies, and other beverages to suit all tastes. We also offer a range of pastries, cakes, and other baked goods, made fresh daily using only the finest ingredients.
                Our space is designed to be warm and inviting, with plenty of comfortable seating options and a relaxed, laid-back vibe. Whether you want to curl up with a book in our cozy corner, catch up with friends over a latte at our communal table, or get some work done on your laptop in our quiet zone, there's a spot for you here.
                We believe that a cafe should be more than just a place to grab a drink - it should be a hub of community activity, a place where people come together to connect, relax, and enjoy life's simple pleasures. That's why we host regular events and activities, from open mic nights to book clubs to art shows, that are open to all and help to foster a sense of belonging and community.
                So come on in, grab a seat, and let us treat you to a little slice of heaven. We can't wait to share our love of coffee, community, and creativity with you!
                    `
                }
            </p>
            <h1 className="text-primary text-center mb-5">Our Founders</h1>
            <Cards className="d-inline-block" details={aboutUsData}/>
        </Container>

    )
}

export default AboutUs