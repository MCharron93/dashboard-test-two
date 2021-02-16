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
          <div className="header bg-gradient-default pb-4 pt-5 pt-md-">
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row mx-4"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
            //   NOTE example of this.state.tabs equalling the new tabs index property
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
                Shipping
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
                Analytics
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        </div>
        <Card className="shadow mx-4 rounded">
          <CardBody>
              {/* NOTE this changes the state of the tabs and sets it to display whatever tab is currently selected */}
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                  This would be desigm tools injected here. Can include logos and other applications used by the team for completing thier jobs. 
                </p>
                <p className="description">
                  Some icons and other clickable links will launch applications and other windows for everyone to use for any design needs
                </p>
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
              <p className="description">
                This would be Development tools injected here. Can include logos and other applications used by the team for completing thier jobs.
                </p>
                <p>
                Some icons and other clickable links will launch applications and other windows for everyone to use for any Development needs
                </p>
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
        </React.Fragment>
    )
    }
}

export default Tools;