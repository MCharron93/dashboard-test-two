import React from "react";

import LandingHeader from 'components/Headers/LandingHeader.js'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

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
        {/* NOTE this header is a custom component pulled in and can be altered easily */}
        <LandingHeader/>
        <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-none" id="custom-card-border-blog">
                <CardHeader>
                    <div className="row">
                        <div className="col">
                        <h5 className="text-uppercase text-muted ls-1 mb-1">
                            Updated Blog Posts
                        </h5>
                        <h4 className="display-4">
                            Using Bitcoin Payment
                        </h4>
                        </div>
                        <Col className="col-auto d-flex align-items-center">
                        <div className="icon icon-shape bg-secondary text-white rounded-circle">
                          <AttachMoneyIcon></AttachMoneyIcon>
                        </div>
                      </Col>
                    </div> 
                </CardHeader>
                <CardBody>
                    
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
                            <a href="https://www.happyhippoherbals.com/blog/using-bitcoin-payment-method-not-intimidating" target="_blank" rel="noreferrer">
                            <Button color="secondary">
                                Read More?
                            </Button>
                            </a>
                            </p>
                        </div>
                </CardBody>
            </Card>
          </div>
          <div className="col">
          <Card className="shadow border-none"  id="custom-card-border-sales">
                <CardHeader>
                    <div className="row">
                        <div className="col">
                        <h5 className="text-uppercase text-muted ls-1 mb-1">
                            Site Wide News
                        </h5>
                        <h4 className="display-4">
                            Happy Hippo Weekly Sales
                        </h4>
                        </div>
                        <Col className="col-auto d-flex align-items-center">
                        <div className="icon icon-shape bg-purple text-white rounded-circle shadow-sm">
                          <LoyaltyIcon></LoyaltyIcon>
                        </div>
                      </Col>
                    </div> 
                </CardHeader>
                    <CardBody>
                        <div>
                            <ul>
                                <a href="https://www.happyhippoherbals.com/green-sundanese-kratom" target="_blank" rel="noreferrer">
                                    <li className="display-4 py-3 custom-link">Jolly Green Hippo(Green Sundanese)</li>
                                </a>
                                <a href="https://www.happyhippoherbals.com/red-hulu-kratom" target="_blank" rel="noreferrer">
                                    <li className="display-4 py-3 custom-link">Happy Heart Hippo(Red Hulu)</li>
                                </a>
                                <a href="https://www.happyhippoherbals.com/hugs-n-kisses-hippo" target="_blank" rel="noreferrer">
                                    <li className="display-4 py-3 custom-link">Hugs n' Kisses Hippo(Red Malay & White Sumatra)</li>
                                </a>
                            </ul>  
                        </div>
                    </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
            {/* NOTE margin classes work the same due to boostrap for React */}
        <div className="col my-4">
            <Card className="shadow border-0" id="custom-card-border-story">
                <CardHeader>
                    <div className="row">
                        <div className="col">
                            <h5 className="text-uppercase text-muted ls-1 mb-1">
                                From Our Founder
                            </h5>
                            <h4 className="display-4">
                                Welcome to Your New Family
                            </h4>
                        </div>
                        <Col className="col-auto d-flex align-items-center">
                            <div className="icon icon-shape text-white bg-primary rounded-circle shadow-sm">
                                <PeopleOutlineIcon></PeopleOutlineIcon>
                            </div>
                      </Col>
                    </div> 
                </CardHeader>
                    <CardBody>
                        <div>
                            <p>
                                You have joined a new team of employees (many whom are friends and family!)
                                that have changed the lives of countless people.
                            </p>
                            <p>
                                We get thousands (and I mean -- thousands!) of emials from people who have said that 
                                'Happy Hiipo has saved their lives.' This isn't an exaggeration.
                            </p>
                            <p>
                                While our main product, Kratom, doesn't work equally as well for everyone, for many, Kratom is a life changer. 
                                We aren't able to make claims about out products in writing, so please ask another staff member about Kratom. What it does,
                                how it works, why people use it, and why it is a life-changer.  
                            </p>
                            <p>
                                In 2013 when Happy Hippo was born, Kratom was a very obscure product. Since then, hundreds of different Kratom companies have joined
                                the marketplace and the demand has grown. The advantages Happy Hippo has is --
                                <ul>
                                    <li>Our Kratom is actually really good</li>
                                    <li>Our shipping speeds are faster than Amazon</li>
                                    <li>Our customer service is fun and makes people happy!</li>
                                </ul>
                            </p>
                        </div>
                    </CardBody>
            </Card>
          </div>
        </Row>
        </Container>
        </>
    )
}

export default Landing;
