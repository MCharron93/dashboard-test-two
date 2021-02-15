import React from "react";

import {
    // Button,
    Card,
    CardHeader,
    CardBody,
    // FormGroup,
    // Form,
    // Input,
    // InputGroupAddon,
    // InputGroupText,
    // InputGroup,
    // Row,
    Col,
  } from "reactstrap";

const Landing = () => {
    return(
        <>
            <Col>
                <Card>
                    <CardHeader>
                        <div>
                            <h4>
                                Hello Nerds!
                            </h4>
                       </div> 
                    </CardHeader>
                    <CardBody>
                        <div>
                            <p>
                                This is just a test for creating a card.
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}

export default Landing;
