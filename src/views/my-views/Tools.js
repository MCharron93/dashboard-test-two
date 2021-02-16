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
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row mx-3"
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
          </Nav>
        </div>
        <Card className="shadow">
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
            </TabContent>
          </CardBody>
        </Card>
        </React.Fragment>
    )
    }
}

export default Tools;