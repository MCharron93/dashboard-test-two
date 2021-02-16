import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";

const LandingHeader = () => {
  return (
    <>
      <div className="header bg-gradient-secondary pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Google Analytics
                        </CardTitle>
                        <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="ni ni-bold-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span>
                    </p>  
                        </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Google Analytics
                        </CardTitle>
                        <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="ni ni-bold-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>  
                        </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sales
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="ni ni-money-coins" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          New Users
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">56 Active</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-purple text-white rounded-circle shadow">
                          <i className="ni ni-active-40" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 25%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingHeader;
