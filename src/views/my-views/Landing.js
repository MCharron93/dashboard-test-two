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
                        <h5 className="text-uppercase text-muted ls-1 mb-1">
                            Updated Blog Posts
                        </h5>
                        <h4 className="display-4">
                            Using Bitcoin Payment
                        </h4>
                    </div> 
                </CardHeader>
                <CardBody>
                    <a href="https://www.happyhippoherbals.com/blog/using-bitcoin-payment-method-not-intimidating" target="_blank" rel="noreferrer">
                        <div  className="d-flex"> 
                            <img className="rounded card-img col-6" src="https://lh3.googleusercontent.com/mX5yY5b-ogMiLXOkE0gxt-MA2juBkbYySJ4OqxWgZq4bovO0bqSxOnzq45fr-CmBc47SbWftbf-_1k4iUnTkLgEd_CJEmR9aLeEe5pr5U2i_9sWqhQkzb1ZiEtGbnoFMeyIEZgA" alt=""/>
                            <p className="col-6 px-3">
                            To all our fellow Hippo Customers - we deeply apologize for the issues and inconveniences you have 
                            experienced with our Credit Card Processors going down. To explain, banks do not enjoy working with 
                            Kratom companies - in fact they usually refuse. Therefore it is very hard to find a Credit Card Processor 
                            that is safe and suitable for our company. We have thought about building our own website plugin, 
                            but things like that take time.We are currently working as hard as we can to find a replacement for 
                            PMC and our Off-Site Payment Method....
                            <br/>
                            <br/>
                            Read More?
                            </p>
                        </div>
                    </a>
                </CardBody>
            </Card>
          </div>
          <div className="col">
          <Card className="shadow border-0">
            <CardHeader>
                        <div>
                            <h5 className="text-uppercase text-muted ls-1 mb-1">
                                Site Wide News
                            </h5>
                            <h4 className="display-4">
                                Current Sales and Promos!
                            </h4>
                       </div> 
                    </CardHeader>
                    <CardBody>
                        <div>
                            <a href="https://www.happyhippoherbals.com/sales" target="_blank" rel="noreferrer">
                                
                            </a>
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
