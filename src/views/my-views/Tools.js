import React from 'react';
// import ToolsHeader from 'components/Headers/ToolsHeader';
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


class Tools extends React.Component {
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
    <div className="header container-fluid bg-gradient-default pb-8 pt-4 pt-md-8">
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
              className={classnames("mb-sm-3 mb-md-0", {
                active: this.state.tabs === 1
              })}
              onClick={e => this.toggleNavs(e, "tabs", 1)}
              href="#pablo"
              role="tab"
            >
              <i className="ni ni-cloud-upload-96 mr-2" />
              Design
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
              Sales
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
              Development
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
              Fulfillment
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
              Analytics
            </NavLink>
          </NavItem>
        </Nav> 
      </div>
      </div>
      <div className="container-fluid mt--7">

      <Card className="shadow my-4 rounded">
        <CardBody>
            {/* NOTE this changes the state of the tabs and sets it to display whatever tab is currently selected */}
            {/* NOTE consider creating the tab content as a child that passes props up to parent component. This file will get too large soon with all of the data for each department */}
          <TabContent activeTab={"tabs" + this.state.tabs}>
            <TabPane tabId="tabs1">
            <div className="row justify-content-around text-center px-2">
            <div className="col-3 d-flex align-items-center">
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" alt="gmail"/>
              <div className="pt-2">
                  Gmail
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center">
              <a href="https://www.instagram.com/realhappyhippoherbals/" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=00" alt="instagram"/>
              <div className="pt-2">
                  Instagram
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center">
              <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src="https://i.pinimg.com/originals/3a/95/ed/3a95ed4894f7e20a138d812e940adbbc.png" alt="gmail"/>
              <div className="pt-2">
                  Photoshop
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center">
              <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src="https://1000logos.net/wp-content/uploads/2020/06/Illustrator-Logo.png" alt="gmail"/>
              <div className="pt-2">
                  Illustrator
              </div>
              </a>
            </div>
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

export default Tools;