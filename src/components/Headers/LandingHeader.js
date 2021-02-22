import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const LandingHeader = () => {
  return (
    <>
      <div className="header bg-gradient-pink pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <a href="https://analytics.google.com/analytics/web/#/report-home/" rel="noreferrer" target="_blank">
                <Card className="card-stats shadow mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Users
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">6.6K</span>
                      </div>
                      <Col className="col-auto">
                      <div className="icon icon-shape bg-default text-white rounded-circle shadow-sm">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-secondary mr-2">
                        <i className="fas fa-arrow-up" /> 0.9%
                      </span>{" "}
                      <span className="text-nowrap">Last 7 Days</span>
                    </p>
                  </CardBody>
                </Card>
                </a>
              </Col>
              <Col lg="6" xl="3">
              <a href="https://analytics.google.com/analytics/web/#/report-home/" rel="noreferrer" target="_blank">
                <Card className="card-stats shadow mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Active Users Now
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">38</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow-sm">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-secondary mr-2">
                        <i className="fas fa-arrow-up" /> 8.7%
                      </span>{" "}
                      <span className="text-nowrap">Currently Viewing via Mobile</span>
                    </p>
                  </CardBody>
                </Card>
                </a>
              </Col>
              <Col lg="6" xl="3">
              <a href="https://analytics.google.com/analytics/web/#/report-home/" rel="noreferrer" target="_blank">
                <Card className="card-stats shadow mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Revenue
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">$240k</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-indigo text-white rounded-circle shadow-sm">
                          <i className="ni ni-money-coins" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 6.6%
                      </span>{" "}
                      <span className="text-nowrap">Last 7 Days</span>
                    </p>
                  </CardBody>
                </Card>
                </a>
              </Col>
              <Col lg="6" xl="3">
              <a href="https://analytics.google.com/analytics/web/#/report-home/" rel="noreferrer" target="_blank">
                <Card className="card-stats shadow mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Goal Conversion Rate
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">17.98%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow-sm">
                          <i className="ni ni-chart-pie-35" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="ni ni-trophy" /> 100%
                      </span>{" "}
                      <span className="text-nowrap">Goal Completion</span>
                    </p>
                  </CardBody>
                </Card>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingHeader;
