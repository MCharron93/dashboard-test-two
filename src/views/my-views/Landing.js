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
    Col,
  } from "reactstrap";

const Landing = () => {
    return(
        <>
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
            </Card>
          </div>
        </Row>
      </Container>
        <Container className="bg-primary">
            <Row className="m-5">
            <Col>
                <Card>
                   
                </Card>
            </Col>
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
            </Col><Col>
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
                    <Button className="text-indigo">Click me</Button>
                </Card>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default Landing;
