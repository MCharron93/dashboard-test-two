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
    CardFooter,
  } from "reactstrap";

const Landing = () => {
    return(
        <>
        {/* NOTE this header is a custom component pulled in and can be altered easily */}
        <LandingHeader/>
        <Container className="mt--7" fluid>
        <Row>
          <div className="col-8">
            <Card className="shadow border-none p-3" id="custom-card-border-blog">
                <CardHeader>
                    <div className="row">
                        <div className="col">
                        <h5 className="text-uppercase text-muted ls-1 mb-1">
                            Updated Blog Posts
                        </h5>
                        <h4 className="display-4 text-secondary">
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
                            <img className="img-fluid col-6" src="https://lh3.googleusercontent.com/mX5yY5b-ogMiLXOkE0gxt-MA2juBkbYySJ4OqxWgZq4bovO0bqSxOnzq45fr-CmBc47SbWftbf-_1k4iUnTkLgEd_CJEmR9aLeEe5pr5U2i_9sWqhQkzb1ZiEtGbnoFMeyIEZgA" alt=""/>
                            <p className="col-6 px-3 indent-text">
                            To all our fellow Hippo Customers - we deeply apologize for the issues and inconveniences you have 
                            experienced with our Credit Card Processors going down. To explain, banks do not enjoy working with 
                            Kratom companies - in fact they usually refuse. Therefore it is very hard to find a Credit Card Processor 
                            that is safe and suitable for our company. We have thought about building our own website plugin, 
                            but things like that take time.We are currently working as hard as we can to find a replacement for 
                            PMC and our Off-Site Payment Method....
                            <br/>
                            <br/>
                            <a href="https://www.happyhippoherbals.com/blog/using-bitcoin-payment-method-not-intimidating" target="_blank" rel="noreferrer">
                            <Button color="secondary" className="btn-secondary">
                                Read More?
                            </Button>
                            </a>
                            </p>
                        </div>
                </CardBody>
            </Card>
          </div>
          <div className="col">
          <Card className="shadow border-none p-3"  id="custom-card-border-sales">
                <CardHeader>
                    <div className="row">
                        <div className="col">
                        <h5 className="text-uppercase text-muted ls-1 mb-1">
                            Site Wide News
                        </h5>
                        <h4 className="display-4 custom-header-sales">
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
                                    <li className="h4 py-3 custom-link">Jolly Green Hippo(Green Sundanese)</li>
                                </a>
                                <a href="https://www.happyhippoherbals.com/red-hulu-kratom" target="_blank" rel="noreferrer">
                                    <li className="h4 py-3 custom-link">Happy Heart Hippo(Red Hulu)</li>
                                </a>
                                <a href="https://www.happyhippoherbals.com/hugs-n-kisses-hippo" target="_blank" rel="noreferrer">
                                    <li className="h4 py-3 custom-link">Hugs n' Kisses Hippo(Red Malay & White Sumatra)</li>
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
            <Card className="shadow border-none p-3" id="custom-card-border-story">
                <CardHeader>
                    <div className="row">
                        <div className="col">
                            <h5 className="text-uppercase text-muted ls-1 mb-1">
                                From Our Founder
                            </h5>
                            <h4 className="display-4 text-primary">
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
                            <p  className="font-weight-400 indent-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis asperiores nulla voluptas impedit praesentium officia aliquid atque voluptate iste ullam optio sed corrupti, debitis quas, nam iure omnis ut! Quisquam!
                            Laudantium sed excepturi earum ea illo rem voluptas, sequi, ut provident possimus fuga nisi labore reprehenderit tempora laborum deleniti! Consequatur iusto illo assumenda at, officiis enim porro ipsa reprehenderit adipisci.
                            Facere tenetur tempora natus totam eos quibusdam. Rerum quo cumque tenetur porro. Sed quo, quidem perspiciatis iusto ut exercitationem ab! Esse ipsa mollitia asperiores deleniti aliquam natus at nesciunt ex.
                            Enim maxime vitae voluptates impedit alias natus iure veniam aut dolore sint? Nemo, consequatur sint. Ducimus ut sed obcaecati voluptatibus animi totam, minima, accusantium provident eius esse eos eum error.
                            Praesentium aliquid ex minima rem fugit enim modi quisquam, totam tempore perspiciatis animi dolor consectetur? Ad nostrum expedita, voluptas similique inventore, officia odit molestias, praesentium quod veniam ut laudantium sit?</p>
                            
                            <p className="font-weight-400 indent-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ducimus et alias fuga corrupti voluptas saepe libero dolorem delectus dolor veniam architecto, nesciunt esse fugiat ipsam, molestias quos illum dolorum.
                            Aliquam libero labore incidunt vitae accusantium obcaecati quibusdam perferendis consequuntur harum iste non praesentium totam doloribus facilis ex odio velit tenetur, laboriosam consequatur eveniet dignissimos earum! Ratione dolorum nam voluptatem.</p>
                            
                            <p className="font-weight-400 indent-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius sapiente distinctio rerum animi. Commodi atque possimus accusamus eaque porro optio in ea, praesentium eum adipisci iure autem quibusdam culpa.
                                Excepturi exercitationem repellat corrupti esse nesciunt. Autem officiis voluptates asperiores harum, temporibus consectetur, consequatur voluptatibus odio, error dolor maiores dolorum! Magni laudantium, dolorem ad provident nam deserunt? Consectetur, libero tempore.
                                Dolores, obcaecati nisi? Dolore ipsam sint, alias veritatis praesentium, quis consequatur, sequi quam odit debitis perspiciatis. Quas tempore corporis dolores optio. Inventore veniam libero eum perferendis esse dolore rem illo.
                                Rerum suscipit tempora, ipsam deserunt impedit laborum accusamus error ducimus, saepe cumque ex temporibus sapiente eos recusandae consequuntur. Sit natus velit reiciendis voluptatum saepe fuga possimus, architecto recusandae voluptatem? Necessitatibus?
                                Beatae, deleniti, cum, dignissimos tenetur eum necessitatibus consectetur doloribus quae cupiditate dolorum aliquam iure. Aperiam tenetur non quidem eum iusto, voluptatem quo voluptatum, inventore nesciunt quia tempora, temporibus a enim.
                                Atque labore iste expedita quae autem fugit voluptas illo non accusantium. Autem amet sint molestiae vel itaque temporibus reprehenderit eligendi ea, rem quasi provident iusto, facere beatae, voluptatibus accusamus tempora.
                                Repellendus, animi porro consequuntur fugit corporis reiciendis cupiditate mollitia incidunt dolore distinctio sequi adipisci ab veniam molestias illum est architecto fuga illo? Eum animi vel vitae esse aliquid soluta quia!
                                Provident, sapiente. Nam nemo deserunt ratione tempora beatae animi amet exercitationem minima, voluptas eaque fugit maiores culpa dolor eveniet quidem est corrupti necessitatibus aliquid magni! Ratione nulla sapiente quibusdam assumenda?
                            </p>
                            {/* <p>
                                You have joined a new team of employees (many whom are friends and family!) that have changed the lives of countless people. 
                                We get thousands (and I mean -- thousands!) of emials from people who have said that 'Happy Hippo has saved their lives.' 
                                This isn't an exaggeration.
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
                                There's a lot of cheap, low-tier Kratom out there and it doesn't work, or worse -- it makes people feel like crap.
                                I have personally used our Kratom for nearly a decade -- every. single. day. I'm a huge believer in Kratom and Happy Hippo. We are often
                                the first place that consumers find super, high-end quality Kratom and they become customers for life. 
                                You have joined a company that makes an enormous difference in the world, but is vehemently loathed by the pharmaceutical industry who seek to
                                keep "patients" dependent to their expensive and addictive poison. 
                            </p> */}
                        </div>
                    </CardBody>
                    <CardFooter className="row justify-content-end">
                        <div>
                            <a className="col" href="https://mail.google.com/mail/u/0/?tab=cm#inbox" target="_blank" rel="noreferrer">
                            <Button className="btn" color="primary">Email Chris</Button>
                            </a>
                        </div>
                    </CardFooter>
            </Card>
          </div>
        </Row>
        </Container>
        </>
    )
}

export default Landing;
