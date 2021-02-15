import React from "react";

import Header from 'components/Headers/Header.js'

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Container,
    // FormGroup,
    // Form,
    // Input,
    // InputGroupAddon,
    // InputGroupText,
    // InputGroup,
    Row,
    // Col,
  } from "reactstrap";

const Landing = () => {
    return(
        <>
        {/* NOTE this header is a custom component pulled in, a new component can be made from the templated ones */}
        <Header />
        <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
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
          </div>
          <div className="col">
          <Card className="shadow border-0">
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
          </div>
        </Row>
        <Row>
            {/* NOTE margin classes work the same due to boostrap for React */}
        <div className="col my-4">
            <Card className="shadow border-0">
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
                    {/* NOTE using bootstrap, many commands are the same for styling and orientation */}
                    <div className="justify-content-center d-flex">
                    <Button className="btn-sml">Click me</Button>
                    </div>
            </Card>
          </div>
        </Row>
        </Container>
        </>
    )
}

export default Landing;
