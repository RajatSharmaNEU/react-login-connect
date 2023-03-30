import React from "react";
import {Container} from "react-bootstrap";
import jobsData from "../../../content/jobsData";
import Cards from "../../common/Cards";

const Jobs = () => {
    return (
        <Container>
            <h1 className="text-center py-3">Job Postings</h1>
            <Cards className="d-inline-block" details={jobsData}/>
        </Container>
    )
}

export default Jobs;