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

import devTools from '/Users/michellecharron/Documents/Work/dashboard-test-two/src/variables/tiledata.js';
import designTools from '/Users/michellecharron/Documents/Work/dashboard-test-two/src/variables/tiledata.js';

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
                {devTools.tiles.map(tile => (
                <Icontiles name={tile.name} imgUrl={tile.img}></Icontiles>
                ))}
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://www.happyhippoherbals.com/admin" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://i0.wp.com/res.cloudinary.com/geoxis/images/f_auto,q_auto/v1609829844/App-logo-opencart-uai-258x258/App-logo-opencart-uai-258x258.png?ssl=1" alt="OpenCart"/> */}
              <div className="pt-2">
                  OpenCart
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://www.semrush.com/dashboard/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-50" src="https://financesonline.com/uploads/2020/12/semrush-logo-1.png" alt="SEMRush"/> */}
              <div className="pt-2">
                  Bitwarden
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://app.slack.com/client/TM2S3EWA1/CLRDZAXSP" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://marketing-assets.pinpointhq.com/wp-content/uploads/2020/04/pinpoint-integration-slack-logo-63a5b836f54577f6ad9f3c8a700a30a9.png" alt="slack"/> */}
              <div className="pt-2">
                 Slack
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://speciosa.org/home/kratom-legality-map/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-50" src="https://speciosa.org/wp-content/uploads/2017/12/Untitled-1-01.png" alt="map"/> */}
              <div className="pt-2">
                  Shopify 
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://www.happyhippoherbals.com/" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src={
                require("../../assets/img/brand/happy-hippo-logo-no-text.png").default
              } alt="happyhippo"/> */}
              <div className="pt-2">
                  Happy Hippo Herbals
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://tsheets.intuit.com/page/login_oii" target="_blank" rel="noopener noreferrer">
                {/* <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="instagram"/> */}
              <div className="pt-2">
                 T-Sheets
              </div>
              </a>
            </div>
              </div>
            {/* {/* <div className="col-3 d-flex align-items-center justify-content-center">
              <a href="https://docs.google.com/spreadsheets/u/0/?tgif=d" target="_blank" rel="noopener noreferrer">
                <img className="w-50" src="https://cdn.buttercms.com/SMsY0FLvTlm0TRINX6WH" alt="gmail"/>
              <div className="pt-2">
                  Sheets
              </div>
              </a>
            </div> */}
            </TabPane>
            <TabPane tabId="tabs2">
            <div className="row text-center px-2">
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" alt="Gmail"/>
              <div className="pt-2">
                  Gmail
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://calendar.google.com/calendar/u/0/r" target="_blank" rel="noopener noreferrer">
                <img className="w-50" src="https://www.clio.com/wp-content/uploads/2018/07/Calendar-400x267.png" alt="Google Calendar"/>
              <div className="pt-2">
                  Calendar
              </div>
              </a>
            </div>
            
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener noreferrer">
                <img className="w-50" src="https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png" alt="Google Drive"/>
              <div className="pt-2">
                  Drive
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://docs.google.com/document/u/0/?tgif=d" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src="https://1000logos.net/wp-content/uploads/2020/05/Google-Docs-logo.png" alt="Documents"/>
              <div className="pt-2">
                  Docs
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://docs.google.com/spreadsheets/u/0/?tgif=d" target="_blank" rel="noopener noreferrer">
                <img className="w-50" src="https://cdn.buttercms.com/SMsY0FLvTlm0TRINX6WH" alt="Sheets"/>
              <div className="pt-2">
                  Sheets
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://docs.google.com/presentation/u/0/?tgif=d" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src="https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png" alt="Slides"/>
              <div className="pt-2">
                 Slides
              </div>
              </a>
            </div>
              </div>
            </TabPane>
            <TabPane tabId="tabs3">
            <div className="row text-center px-2">
            {designTools.tiles.map(tile => (
                <Icontiles name={tile.name} imgUrl={tile.img} link={tile.link}></Icontiles>
                ))}
            </div>
            </TabPane>
            <TabPane tabId="tabs4">
              <div className="row text-center px-2">
              <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://www.zendesk.com/login/#login" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src="https://images.ctfassets.net/b7g9mrbfayuu/1lOzS4dImMk4mCqMy8sKea/69edfc70289b2dad9f0ca4b13dab4bad/logo-zendesk-300x300.png" alt="instagram"/>
              <div className="pt-2">
                 Zendesk
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://login.blockchain.com/#/login" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src="https://walletscrutiny.com/images/wallet_icons/android/piuk.blockchain.android.png" alt="instagram"/>
              <div className="">
                 Blockchain
              </div>
              </a>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center justify-content-center py-4">
              <a href="https://accounts.zoho.com/signin?servicename=ZohoBooks&signupurl=https://www.zoho.com/us/books/signup/" target="_blank" rel="noopener noreferrer">
                <img className="w-25" src="https://www.zoho.com/branding/images/zoho-logo-512px.png" alt="instagram"/>
              <div className="pt-4">
                 Zoho
              </div>
              </a>
            </div>
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