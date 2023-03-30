import React from "react";
import {array, string} from "prop-types";
import "./card.scss";
import Card from "./Card";

const Cards = (props) => {
    return (
        <div className="card__wrap--outer">
            <div className="card__wrap--inner">
                {props.details.map((detail, index) => (
                    <Card key={index} detail={detail}/>
                ))}
            </div>

        </div>
    );
}

Cards.propTypes = {
    className: string,
    details: array
}

export default Cards;