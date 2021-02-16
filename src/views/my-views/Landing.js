import React from "react";

import LandingHeader from 'components/Headers/LandingHeader.js'

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
        {/* NOTE this header is a custom component pulled in and can be altered easily */}
        <LandingHeader/>
        <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
            <CardHeader>
                        <div>
                            <h4>
                                Blog Title!
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
                            {/* NOTE an a tag that pushes to separate window for the IT tickets */}
                            <a href="https://form.asana.com/?k=qxP8ysQvIY6l5IDI4h9LUg&d=1195144362945755" target="_blank" rel="noreferrer">Here would be a quick snippet of the article that would like to more info </a>
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
                                Cool New Article!
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
                    <Button className="">Click me</Button>
                    </div>
            </Card>
          </div>
        </Row>
        </Container>
        </>
    )
}

export default Landing;
