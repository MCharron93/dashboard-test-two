/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import React, { useState } from "react";
// node.js library that concatenates classes (strings)
// import classnames from "classnames";
// javascipt plugin for creating charts
// import Chart from "chart.js";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  // NavItem,
  // NavLink,
  // Nav,
  // Progress,
  // Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  // chartOptions,
  // parseOptions,
  // chartExample1,
  // chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import PaymentModals from "components/Modals/PaymentModals";
import ShippingModals from "components/Modals/ShippingModals";
import ShipStationModal from "components/Modals/ShipStationModal";
import MissingPackageModal from "components/Modals/MissingPackageModal";
import BanCollectionModal from "components/Modals/BanCollectionModal";
import DiscountsModal from "components/Modals/DiscountsModal";
import ErrorModals from "components/Modals/ErrorHandlingModals";

const Index = (props) => {
  // const [
  //   // activeNav, 
  //   setActiveNav
  // ] = useState(1);
  // const [
  //   // chartExample1Data, 
  //   setChartExample1Data] = useState("data1");

  // if (window.Chart) {
  //   parseOptions(Chart, chartOptions());
  // }

  // const toggleNavs = (e, index) => {
  //   e.preventDefault();
  //   setActiveNav(index);
  //   setChartExample1Data("data" + index);
  // };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--8" fluid>
        <Row>
          <Col md={8}>
            <Row className="justify-content-between py-3 my-4">
            <Col md={6}>
            <Card className="shadow border-0 my-2" id="custom-card-border-payments">
              <CardHeader className="text-dark">
                <Row className="align-items-center">
                  <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Knowledge Base
                    </h6>
                    <h2 className="mb-0 text-success">Payment Processing and Financials</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div class="row">
                  {/* NOTE Consider breaking up knowledge base into sections, but make sure they are clear to read and make sense */}
                  <PaymentModals></PaymentModals>
                  <BanCollectionModal></BanCollectionModal>
                  <DiscountsModal></DiscountsModal>
                </div>
              </CardBody>
            </Card>
            </Col>
            <Col md={6}>
            <Card className="shadow border-0 my-2" id="custom-card-border-shipping">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Knowledge Base
                    </h6>
                    <h2 className="mb-0 text-indigo">Shipping Standard and Carriers</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
               <div className="row text-dark">
               <ShippingModals></ShippingModals>
               <ShipStationModal></ShipStationModal>
               <MissingPackageModal></MissingPackageModal>
               </div>
              </CardBody>
            </Card>
            </Col>
            <Col className="my-3">
            <Card className="shadow border-0">
              <CardHeader className="bg-gradient-info">
                <Row className="align-items-center">
                  <div className="col">
                  <h5 className="text-uppercase text-muted ls-1 mb-1">
                      Customer Recognition
                    </h5>
                    <h3 className="mb-0 display-4 font-weight-bold">Hippo Hype</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      className="rounded"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
              <Row>
  <Col sm="3">Bradley Deal via TrustPilot</Col>
  <Col sm="9">
    <a href="https://www.trustpilot.com/review/www.happyhippoherbals.com" target="_blank" rel="noreferrer">
    <p className="font-weight-bold">
    "Happy Hippo Herbals sell the best kratom than any of the other vendors 
    I've tried!Whatever you get from them is high quality and I never ever 
    have been dissatisfied with any of the products that I've bought including 
    the kratom and CBD oil !Customer service is superb!..." Read More?
    </p>
    </a>
  </Col>
  <Col sm="3">Linda Callahan via KratomIQ</Col>
  <Col sm="9">
    <a href="https://www.kratomiq.com/happy-hippo-herbals-review/" target="_blank" rel="noreferrer">
    <p className="font-weight-bold">
     "Without doubt Happy Hippo Herbals offers the highest quality Kratom I have tried as of yet. If I find a better alternative, I’ll let you know..." Read More?
    </p>
    </a>
  </Col>
  <Col sm="3">Jennifer Kurtz via kratomguides</Col>
  <Col sm="9">
    <a href="https://kratomguides.com/happy-hippo-herbal-reviews/" target="_blank" rel="noreferrer">
    <p className="font-weight-bold">
      "They offer the highest quality kratom strains with various categories such as slow, moderate and fast. 
      You need to consume less amount of kratom power when compared to other brands.Excellent customer service.
      They offer you with over delivery of the powder along with free samples..." Read More? 
    </p>
    </a>
  </Col>
</Row>
              </CardBody>
            </Card>
            </Col>
            </Row>
          </Col>

          {/* NOTE card separater */}
          <Col className="my-4 p-3">
          <Row>
          <Col className="my-2">
            <Card className="bg-white shadow border-0" id="custom-card-border-errors">
              <CardHeader className="text-dark">
                <Row className="align-items-center">
                  <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Knowledge Base
                    </h6>
                    <h2 className="mb-0 text-danger">Error Handling</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div class="row">
                  <ErrorModals></ErrorModals> 
                  <ErrorModals></ErrorModals>                 
                </div>
              </CardBody>
            </Card>
            </Col>
            </Row>
          </Col>
        </Row>

{/* NOTE changed the overlay of elemtents in thier rows and cols */}
        {/* <Row className="justify-content-center my-4">
          <Col className="mb-5 mb-xl-0" xl="4">
            <Card className="shadow border-0" id="custom-card-border-payments">
              <CardHeader className="text-dark">
                <Row className="align-items-center">
                  <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Knowledge Base
                    </h6>
                    <h2 className="mb-0 text-secondary">Payment Processing and Financials</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div class="row"> */}
                  {/* NOTE Consider breaking up knowledge base into sections, but make sure they are clear to read and make sense */}
                  {/* <PaymentModals></PaymentModals>
                  <BanCollectionModal></BanCollectionModal>
                  <DiscountsModal></DiscountsModal>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5" xl="4">
            <Card className="shadow border-0" id="custom-card-border-shipping">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Knowledge Base
                    </h6>
                    <h2 className="mb-0 text-indigo">Shipping Standard and Carriers</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
               <div className="row text-dark">
               <ShippingModals></ShippingModals>
               <ShipStationModal></ShipStationModal>
               <MissingPackageModal></MissingPackageModal>
               </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5" xl="4">
            <Card className="bg-gradient-default shadow border-0">
              <CardHeader className="text-dark">
                <Row className="align-items-center">
                  <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Knowledge Base
                    </h6>
                    <h2 className="mb-0">Error Handling</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div class="row">
                  <ErrorModals></ErrorModals> 
                  <ErrorModals></ErrorModals>                 
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="my-4">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow mt--6 border-0">
              <CardHeader className="bg-gradient-green">
                <Row className="align-items-center">
                  <div className="col">
                  <h5 className="text-uppercase text-muted ls-1 mb-1">
                      Customer Recognition
                    </h5>
                    <h3 className="mb-0 display-4 font-weight-bold">Hippo Hype</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      className="rounded"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
              <Row>
  <Col sm="3">Bradley Deal via TrustPilot</Col>
  <Col sm="9">
    <a href="https://www.trustpilot.com/review/www.happyhippoherbals.com" target="_blank" rel="noreferrer">
    <p className="font-weight-bold">
    "Happy Hippo Herbals sell the best kratom than any of the other vendors 
    I've tried!Whatever you get from them is high quality and I never ever 
    have been dissatisfied with any of the products that I've bought including 
    the kratom and CBD oil !Customer service is superb!..." Read More?
    </p>
    </a>
  </Col>
  <Col sm="3">Linda Callahan via KratomIQ</Col>
  <Col sm="9">
    <a href="https://www.kratomiq.com/happy-hippo-herbals-review/" target="_blank" rel="noreferrer">
    <p className="font-weight-bold">
     "Without doubt Happy Hippo Herbals offers the highest quality Kratom I have tried as of yet. If I find a better alternative, I’ll let you know..." Read More?
    </p>
    </a>
  </Col>
  <Col sm="3">Jennifer Kurtz via kratomguides</Col>
  <Col sm="9">
    <a href="https://kratomguides.com/happy-hippo-herbal-reviews/" target="_blank" rel="noreferrer">
    <p className="font-weight-bold">
      "They offer the highest quality kratom strains with various categories such as slow, moderate and fast. 
      You need to consume less amount of kratom power when compared to other brands.Excellent customer service.
      They offer you with over delivery of the powder along with free samples..." Read More? 
    </p>
    </a>
  </Col>
</Row>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Index;

