import React from 'react';
// import ToolsHeader from 'components/Headers/ToolsHeader';
import classnames from "classnames";
// import Tab from 'variables/tabs.js'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CompareIcon from '@material-ui/icons/Compare';
import EmailIcon from '@material-ui/icons/Email';
import FaceIcon from '@material-ui/icons/Face';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SearchIcon from '@material-ui/icons/Search';

import {
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane
  } from "reactstrap";
import Icontiles from 'variables/Tile';

import custServTools from '../../variables/custservtooldata.js';
import designTools from '../../variables/designtooldata.js';
import generalTools from 'variables/generaltooldata.js';
import gSuiteTools from 'variables/gsuitetooldata.js';

class Tools extends React.Component {
    // NOTE the tab state begins at 1 for default setting
    state = {
      tabs: 1,
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
              className={classnames("btn mb-sm-3 mb-md-3", {
                active: this.state.tabs === 1
              })}
              onClick={e => this.toggleNavs(e, "tabs", 1)}
              href="#pablo"
              role="tab"
            >
              <BusinessCenterIcon className="mr-2"></BusinessCenterIcon>
              General Business
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 2}
              className={classnames("btn mb-sm-3 mb-md-3", {
                active: this.state.tabs === 2
              })}
              onClick={e => this.toggleNavs(e, "tabs", 2)}
              href="#pablo"
              role="tab"
            >
              <EmailIcon className="mr-2"></EmailIcon>
              Google Suite
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 3}
              className={classnames("btn mb-sm-3 mb-md-3", {
                active: this.state.tabs === 3
              })}
              onClick={e => this.toggleNavs(e, "tabs", 3)}
              href="#pablo"
              role="tab"
            >
              <CompareIcon className="mr-2"></CompareIcon>
              Design
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 4}
              className={classnames("btn mb-sm-3 mb-md-3", {
                active: this.state.tabs === 4
              })}
              onClick={e => this.toggleNavs(e, "tabs", 4)}
              href="#pablo"
              role="tab"
            >
              <FaceIcon className="mr-2"></FaceIcon>
              Customer Service
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 5}
              className={classnames("btn mb-sm-3 mb-md-3", {
                active: this.state.tabs === 5
              })}
              onClick={e => this.toggleNavs(e, "tabs", 5)}
              href="#pablo"
              role="tab"
            >
              <LocalShippingIcon className="mr-2"></LocalShippingIcon>
              Fulfillment
            </NavLink>
          </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={this.state.tabs === 6}
                  className={classnames("btn mb-sm-3 mb-md-3", {
                    active: this.state.tabs === 6
                  })}
                  onClick={e => this.toggleNavs(e, "tabs", 6)}
                  href="#pablo"
                  role="tab"
                >
                  <SearchIcon className="mr-2"></SearchIcon>
                    Production 
                </NavLink>
              </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 7}
              className={classnames("btn mb-sm-3 mb-md-3", {
                active: this.state.tabs === 7
              })}
              onClick={e => this.toggleNavs(e, "tabs", 7)}
              href="#pablo"
              role="tab"
            >
              <TrendingUpIcon className="mr-2"></TrendingUpIcon>
              Human Resources
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.tabs === 8}
              className={classnames("btn mb-sm-3 mb-md-3", {
                active: this.state.tabs === 8
              })}
              onClick={e => this.toggleNavs(e, "tabs", 8)}
              href="#pablo"
              role="tab"
            >
              <SearchIcon className="mr-2"></SearchIcon>
                Marketing 
            </NavLink>
          </NavItem>
        </Nav> 
      </div>
      </div>
      <div className="container-fluid mt--7">

      <Card className="shadow my-4 rounded tools">
        <CardBody>
            {/* NOTE this changes the state of the tabs and sets it to display whatever tab is currently selected */}
            {/* NOTE consider creating the tab content as a child that passes props up to parent component. This file will get too large soon with all of the data for each department */}
          <TabContent activeTab={"tabs" + this.state.tabs}>
          <TabPane tabId="tabs1">
            <div className="row text-center">
                {generalTools.tiles.map((tile, index) => (
                <Icontiles key={index} name={tile.name} imgUrl={tile.img}></Icontiles>
                ))}
            </div>
            </TabPane>
            <TabPane tabId="tabs2">
            <div className="row text-center px-2">
            {gSuiteTools.tiles.map((tile, index) => (
                <Icontiles key={index} name={tile.name} imgUrl={tile.img}></Icontiles>
                ))}
            </div>
            </TabPane>
            <TabPane tabId="tabs3">
            <div className="row text-center px-2">
            {designTools.tiles.map((tile, index) => (
                <Icontiles key={index} name={tile.name} imgUrl={tile.img} link={tile.link}></Icontiles>
                ))}
            </div>
            </TabPane>
            <TabPane tabId="tabs4">
              <div className="row text-center px-2">
              {custServTools.tiles.map((tile, index) => (
                <Icontiles key={index} name={tile.name} imgUrl={tile.img}></Icontiles>
                ))}
              </div>
            </TabPane>
            <TabPane tabId="tabs5">
            <div className="row text-center px-2">
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://ship5.shipstation.com/orders/awaiting-shipment" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://res.cloudinary.com/hdxhd6yxt/image/upload/f_auto,h_200/f_auto/v1526373233/integrations/ShipStation-logo.png" alt="ShipStation"/> */}
              <div className="pt-2">
                 ShipStation
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://www.stamps.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-50" src="https://www.pngkey.com/png/detail/442-4428075_xd-logo-adobe-experience-design-logo.png" alt="instagram"/> */}
              <div className="pt-2">
                  Stamps
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://www.usps.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-50" src="https://www.pngkey.com/png/detail/442-4428075_xd-logo-adobe-experience-design-logo.png" alt="instagram"/> */}
              <div className="pt-2">
                  USPS
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://www.ups.com/us/en/Home.page" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-50" src="https://www.pngkey.com/png/detail/442-4428075_xd-logo-adobe-experience-design-logo.png" alt="instagram"/> */}
              <div className="pt-2">
                  UPS
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://www.fedex.com/en-us/home.html" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-50" src="https://www.pngkey.com/png/detail/442-4428075_xd-logo-adobe-experience-design-logo.png" alt="instagram"/> */}
              <div className="pt-2">
                  FedEx
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://www.uline.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-50" src="https://www.pngkey.com/png/detail/442-4428075_xd-logo-adobe-experience-design-logo.png" alt="instagram"/> */}
              <div className="pt-2">
                  ULine
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://www.gs1.org/standards/barcodes" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-50" src="https://www.pngkey.com/png/detail/442-4428075_xd-logo-adobe-experience-design-logo.png" alt="instagram"/> */}
              <div className="pt-2">
                  GS1 Barcodes
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://wcponline.wcpsolutions.com/login" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-50" src="https://www.pngkey.com/png/detail/442-4428075_xd-logo-adobe-experience-design-logo.png" alt="instagram"/> */}
              <div className="pt-2">
                  WCP Solutions
              </div>
              </a>
            </div>
            </div>
            </TabPane>
            <TabPane tabId="tabs6">
            <div className="row text-center px-2">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://tsheets.intuit.com/page/login_oii" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://www.indeed.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://www.ziprecruiter.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://docs.google.com/presentation/u/0/?tgif=d" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 
              </div>
              </a>
            </div>
            </div>
            </TabPane>
            <TabPane tabId="tabs7">
            <div className="row text-center px-2">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://tsheets.intuit.com/page/login_oii" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 T-Sheets
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://www.indeed.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 Indeed
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://www.ziprecruiter.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 ZipRecruiter
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://docs.google.com/presentation/u/0/?tgif=d" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 G-Suite Jobs
              </div>
              </a>
            </div>
            </div>
            </TabPane>
            <TabPane tabId="tabs8">
            <div className="row text-center px-2">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://login.mailchimp.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 Mailchimp
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 Facebook
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 Twitter
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://www.instagram.com/realhappyhippoherbals/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 Instagram
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              {/* <a href="https://docs.google.com/presentation/u/0/?tgif=d" target="_blank" rel="noopener noreferrer"> */}
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 SnapChat
              </div>
              {/* </a> */}
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 YouTube
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 Reddit
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://hootsuite.com/login?redirect=%2Fauth%2Fauthorize%3Fstate%3Db57c8d1cb0baf0a257f9e2ff1ab60ea0%26response_type%3Dcode%26approval_prompt%3Dauto%26redirect_uri%3Dhttps%253A%252F%252Fhootsuite.com%252Flogin%252Foauth2complete%26client_id%3DNJ583PzkwibvhraAZGyz%26startExternalMethod%3D&oauth2Authorize=1&method=" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 HootSuite
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://www.semrush.com/dashboard/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 SEMRush
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://www.ilk.co" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 ILK Kratom Forum
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://kratomgeek.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 KratomGeek
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              {/* <a> */}
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 KratomNerd
              </div>
              {/* </a> */}
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
            <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 Fiverr
              </div>
              </a>
            </div>
            </div>            
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