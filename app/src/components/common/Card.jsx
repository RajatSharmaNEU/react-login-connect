import React from "react";
import {shape, string} from "prop-types";

const Card = (props) => {
    const {img, title, description} = props.detail;
    return (
        <div className="card">
            <div>
                <img src={img}/>
            </div>
            <div>
                <p className="text-center">{title}</p>
                <p>{description}</p></div>
        </div>
    )
}

Card.propTypes = {
    detail: shape(
        {
            img: string,
            title: string,
            description: string
        }
    )
}

export default Card;