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
    TabPane
  } from "reactstrap";

  


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
            <NavItem className="shadow">
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                New Hippo's Guide
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-bell-55 mr-2" />
                Benefits
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                Time-Off Request
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 4}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 4
                })}
                onClick={e => this.toggleNavs(e, "tabs", 4)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Observed Holidays
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 5}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 5
                })}
                onClick={e => this.toggleNavs(e, "tabs", 5)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Reimbursement
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 6}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 6
                })}
                onClick={e => this.toggleNavs(e, "tabs", 6)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Company Story
              </NavLink>
            </NavItem>
          </Nav> 
        </div>
        </div>
        <div className="container-fluid mt--7">

        <Card className="shadow rounded my-4">
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
                <p className="description">
                This would be sales tools injected here. Can include logos and other applications used by the team for completing thier jobs.
                </p>
                <p>
                Some icons and other clickable links will launch applications and other windows for everyone to use for any sales needs
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <div className="row justify-content-between">
              <div className="col-4"><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">Link goes here</a></div>
              {/* <div className="col-4"><a>Link goes here</a></div>
              <div className="col-4"><a>Link goes here</a></div> */}
                </div>
              </TabPane>
              <TabPane tabId="tabs4">
              <p className="description">
                This would be fulfillment tools injected here. Can include logos and other applications used by the team for completing thier jobs.
                </p>
                <p>
                Some icons and other clickable links will launch applications and other windows for everyone to use for any fulfillment needs
                </p>
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