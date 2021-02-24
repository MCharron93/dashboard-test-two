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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            {/* {new Date().toDateString()}{" "} */}
            <a
              className="font-weight-bold btn border-0 px-3 shadow-none text-secondary"
              href="https://www.happyhippoherbals.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Happy Hippo Herbals
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end px-3">
            <NavItem>
              <NavLink
                className="btn border-0 shadow-none"
                href="https://www.instagram.com/realhappyhippoherbals/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-instagram fa-2x"></i>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className="btn border-0 shadow-none"
                href="https://www.happyhippoherbals.com/blog/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fas fa-edit fa-2x"></i>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                // href=""
                // rel="noopener noreferrer"
                // target="_blank"
                className="btn border-0 shadow-none"
              >
                <i class="fab fa-facebook fa-2x"></i>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className="btn border-0 shadow-none"
                href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-twitter fa-2x"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
