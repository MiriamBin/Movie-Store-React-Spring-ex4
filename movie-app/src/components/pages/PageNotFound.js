import {Row} from "react-bootstrap";
import React from "react";
import {MSG_PAGE_NOT_FOUND} from "../constants/Messages.js"

function PageNotFound() {
    return (
        <Row className="justify-content-center text-center m-3">
            <h1 className="text-white">{MSG_PAGE_NOT_FOUND}</h1>
        </Row>
    )
}
export default PageNotFound;
