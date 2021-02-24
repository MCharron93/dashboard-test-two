import React from 'react';
import classnames from "classnames";
// import Tab from 'variables/tabs.js'

import {
    Card, 
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button
  } from "reactstrap";
import Datepicker from 'variables/DatePicker';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';

  


class HumanResources extends React.Component {
    // NOTE the tab state begins at 1 for default setting
    state = {
        tabs: 1
      };
    //   NOTE prevents the page from reloading while toggling through tabs as the state changes
      toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
          [state]: index
        });
      };
render() {
    return (
        <React.Fragment>
      <div className="header container-fluid bg-gradient-secondary pb-8 pt-4 pt-md-8">
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row mx-4"
            id="tabs-icons-text"
            pills
            role="tablist"
            >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("btn mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-book-bookmark mr-2" />
                New Hippo's Guide
              </NavLink>
            </NavItem>
            <NavItem className="shadow-sm">
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("btn b-sm-3 mb-md-0", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-favourite-28 mr-2" />
                Benefits
              </NavLink>
            </NavItem>
            <NavItem className="shadow-sm">
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("btn mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <AddAlarmIcon className="mr-2"></AddAlarmIcon>
                Time-Off Request
              </NavLink>
            </NavItem>
            <NavItem className="shadow-sm">
              <NavLink
                aria-selected={this.state.tabs === 4}
                className={classnames("btn mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 4
                })}
                onClick={e => this.toggleNavs(e, "tabs", 4)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                Observed Holidays
              </NavLink>
            </NavItem>
            <NavItem className="shadow-sm">
              <NavLink
                aria-selected={this.state.tabs === 5}
                className={classnames("btn mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 5
                })}
                onClick={e => this.toggleNavs(e, "tabs", 5)}
                href="#pablo"
                role="tab"
              >
                <LocalAtmIcon className="mr-2"></LocalAtmIcon>
                Reimbursement
              </NavLink>
            </NavItem>
            {/* <NavItem className="shadow-sm">
              <NavLink
                aria-selected={this.state.tabs === 6}
                className={classnames("btn mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 6
                })}
                onClick={e => this.toggleNavs(e, "tabs", 6)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Company Story
              </NavLink>
            </NavItem> */}
          </Nav> 
        </div>
        </div>
        <div className="container-fluid mt--7">

        <Card className="shadow rounded my-4 p-3 tools">
          <CardBody>
              {/* NOTE this changes the state of the tabs and sets it to display whatever tab is currently selected */}
              {/* NOTE consider creating the tab content as a child that passes props up to parent component. This file will get too large soon with all of the data for each department */}
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
              <div className="row px-2">
              <p className="text-underline">This tab would contain a download for new employees. Could also include information regarding hippo basics and company culture.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum, beatae nihil maxime officiis delectus cupiditate, porro eos quas eaque id veniam necessitatibus, libero laudantium! Reiciendis omnis unde earum officiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, cumque magnam, dolore harum consequuntur blanditiis assumenda natus veritatis fugiat quod modi accusantium ullam, perferendis aliquam tempora voluptates error laboriosam non?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit eaque culpa molestias eius amet fuga maiores explicabo perferendis, numquam veritatis iure sapiente hic nesciunt, atque dolores eum est debitis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae illum aliquam deleniti accusantium sint vitae error! Expedita repellendus nesciunt enim excepturi maiores, temporibus, iste nobis numquam sequi quo doloribus.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum consequatur facilis eligendi ratione voluptatum ex obcaecati, quasi officia voluptatem, assumenda quidem recusandae quam quod amet, quia sunt? Porro, deserunt.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae, nesciunt reiciendis alias dolor voluptate incidunt optio hic minima atque deserunt praesentium nihil corporis deleniti beatae maiores sequi ab non.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa perferendis cum? Modi, deserunt doloremque aspernatur molestiae voluptatum tenetur repudiandae aut facere nam labore veniam fuga provident nulla perferendis quos?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, magnam! Consequuntur incidunt dignissimos mollitia provident necessitatibus alias repellendus ipsam consequatur at. Obcaecati ducimus labore enim illum sapiente dolorem excepturi alias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quo! Nesciunt numquam voluptatum incidunt sit molestias, neque, aliquid facere, debitis porro ipsum dignissimos atque libero exercitationem quas autem ea blanditiis!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime perspiciatis velit dolore, enim voluptatem earum odit sit porro ad eaque itaque mollitia repudiandae aspernatur, tempora labore officia necessitatibus laborum! Non?
              </p>
                </div>
              </TabPane>
              <TabPane tabId="tabs2">
              <div className="row px-2">
              <a href="https://www.appletonclinics.com/id-home" target="_blank" rel="noreferrer">
              <p className="display-3">This would lead into Appleton clinics</p></a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum consequatur facilis eligendi ratione voluptatum ex obcaecati, quasi officia voluptatem, assumenda quidem recusandae quam quod amet, quia sunt? Porro, deserunt.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae, nesciunt reiciendis alias dolor voluptate incidunt optio hic minima atque deserunt praesentium nihil corporis deleniti beatae maiores sequi ab non.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa perferendis cum? Modi, deserunt doloremque aspernatur molestiae voluptatum tenetur repudiandae aut facere nam labore veniam fuga provident nulla perferendis quos?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, magnam! Consequuntur incidunt dignissimos mollitia provident necessitatibus alias repellendus ipsam consequatur at. Obcaecati ducimus labore enim illum sapiente dolorem excepturi alias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quo! Nesciunt numquam voluptatum incidunt sit molestias, neque, aliquid facere, debitis porro ipsum dignissimos atque libero exercitationem quas autem ea blanditiis!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime perspiciatis velit dolore, enim voluptatem earum odit sit porro ad eaque itaque mollitia repudiandae aspernatur, tempora labore officia necessitatibus laborum! Non?
              </p>
              <p className="text-underline">This tab would contain a section that outlines the company benefits.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum, beatae nihil maxime officiis delectus cupiditate, porro eos quas eaque id veniam necessitatibus, libero laudantium! Reiciendis omnis unde earum officiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, cumque magnam, dolore harum consequuntur blanditiis assumenda natus veritatis fugiat quod modi accusantium ullam, perferendis aliquam tempora voluptates error laboriosam non?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit eaque culpa molestias eius amet fuga maiores explicabo perferendis, numquam veritatis iure sapiente hic nesciunt, atque dolores eum est debitis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae illum aliquam deleniti accusantium sint vitae error! Expedita repellendus nesciunt enim excepturi maiores, temporibus, iste nobis numquam sequi quo doloribus.
              </p>
                </div>
              </TabPane>
              <TabPane tabId="tabs3">
            <h4>Time off requests must be placed through the sheet below. Please fill out all fields when submitting time-off</h4>
        <Form>
          <Row className="">
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Job Title"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup className="has-info">
                <Input
                  // className="is-valid"
                  placeholder="Enter how many hours of PTO you will be using"
                  type="number"
                  required 
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup className="has-info">
                <Datepicker></Datepicker>
              </FormGroup>
            </Col>
            <Col>
            <Button className="btn btn-primary d-flex align-self-end">Submit Request</Button>
            </Col>
          </Row>
        </Form>
      
              </TabPane>
              <TabPane tabId="tabs4">
                <p className="display-4">Observed Holidays are based on our shipping carriers</p>  
                  <p className="description font-weight-700">
                    Please follow the links below to view the shipping closures for FedEx, UPS, and USPS. If one of our carriers is open that day, we will typically have all employees on-site. 
                  </p>
                  <ul>
                    <a href="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/FedEx-Holiday-Schedule.pdf" target="_blank" rel="noreferrer">
                      <li><p className="text-uppercase">FedEx</p></li>
                    </a>
                    <a href="https://www.ups.com/assets/resources/media/en_US/US_Days_of_Operation_Schedule.pdf" target="_blank" rel="noreferrer">
                      <li><p className="text-uppercase">UPS</p></li>
                    </a>
                    <a href="https://about.usps.com/newsroom/events/" target="_blank" rel="noreferrer">
                      <li><p className="text-uppercase">USPS</p></li>
                    </a>
                  </ul>
              </TabPane>
              <TabPane tabId="tabs5">
              <p className="description">
                This would be Shipping tools injected here. Can include logos and other applications used by the team for completing thier jobs.
                </p>
                <p>
                Some icons and other clickable links will launch applications and other windows for everyone to use for any Shipping needs
                </p>
              </TabPane>
              <TabPane tabId="tabs6">
                  <h4>This section might not be needed in the future due to pulling in Google Analytics onto the Dashboard </h4>
              <p className="description">
                This would be Analytics tools injected here. Can include logos and other applications used by the team for completing thier jobs.
                </p>
                <p>
                Some icons and other clickable links will launch applications and other windows for everyone to use for any Analytics needs
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
        </div>
        </React.Fragment>
    )
    }
}

export default HumanResources;