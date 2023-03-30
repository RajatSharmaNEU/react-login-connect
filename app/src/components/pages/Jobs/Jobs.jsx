import React from "react";
import {Container} from "react-bootstrap";
import jobsData from "../../../content/jobsData";
import Cards from "../../common/Card/Cards";

const Jobs = () => {
    return (
        <Container className="mt-5 mb-5">
            <h1 className="text-primary text-center mb-2">Job Posting</h1>
            <Cards className="d-inline-block" details={jobsData}/>
        </Container>
    )
}

export default Jobs;