import React from "react";
// reactstrap components
import {
  Button,
//   Card,
//   CardHeader,
//   CardBody,
//   FormGroup,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
  Modal,
//   Row,
  Col
} from "reactstrap";

class ShippingModals extends React.Component {
  state = {
    defaultModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
          <Col md="6">
            <li className="btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("defaultModal")}>&#8226; &nbsp;&nbsp;Shipping</li>
            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                  Shipping
                </h2>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                  <h4>
                      Where do we ship?
                  </h4>
                <p>
                This is the legality map showing where kratom is legal. If it’s legal in the US we can ship <a href="http://speciosa.org/home/kratom-legality-map/" target="_blank" rel="noreferrer">there</a>. Puerto Rico, APO
                 and FPO International Military Bases - refer to UPS guide.
                </p>
                <h4>
                    Current shipping options:    
                </h4>
                <ul>
                  <li>
                  UPS Next Day Air
                  </li>
                  <li>
                  FedEx 2 Day
                  </li>
                  <li>
                  USPS
                  </li>
                </ul>
                <h4>
                Why can’t I find my State/Country in the Checkout section?  
                  </h4>
                <p>
                If you are unable to see your State - there is a chance that Kratom is not legal in your area yet. Here is a handy dandy&nbsp; 
                <a href="https://speciosa.org/home/kratom-legality-map/" target="_blank" rel="noreferrer">Kratom legality map</a> to help you out. 
                We do not ship internationally at this time.
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="default"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>
          <Col md="6">
          <h5 className="btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("ups")}>&#8226; &nbsp;&nbsp;UPS</h5>
            <Modal
              className="modal-dialog-centered"
              size="lg"
              isOpen={this.state.ups}
              toggle={() => this.toggleModal("ups")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                 UPS
                </h2>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("ups")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <h5>How do you submit a claim through UPS?</h5>
                <p>
                &#8226; &nbsp;&nbsp;We have to do it, not the customer
                <br/>
                &#8226; &nbsp;&nbsp;UPS will ask for prices of each item in the package; if all the prices are different calculate an average 
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;price
                <br/>
                &#8226; &nbsp;&nbsp;They will want screenshots of the order as proof
                <br/>
                &#8226; &nbsp;&nbsp;Give them personal phone number for contact. Contact Darcie if needed.
                </p>

                <h5>
                Why is UPS not available as a shipping option? 
                </h5>
                <p>
                Check if there are any Vape Pens in their order - UPS will not ship Vape Pens. 
                <br/>Place a mock order on the Happy Hippo Website - If UPS is not an option their address is undeliverable generally due to the address being too rural.
                </p>

                <h5>Checking Exceptions:</h5>
                <p>&#8226; &nbsp;&nbsp;Log into Quantum View. 
                  <br/>&#8226; &nbsp;&nbsp;Go to Quantum view manage: From here to can view exceptions, change address and return to 
                  &nbsp;&nbsp;&nbsp;&nbsp;sender. 
                  <br/>&#8226; &nbsp;&nbsp;UPS exceptions only need to 
                  be addressed if there is an address issue.
                  </p>
                
                <h5>Missing Packages</h5>
                <p>&#8226; &nbsp;&nbsp;Lookup package details using Quantum View. 
                <br/>
                &#8226; &nbsp;&nbsp;If a UPS package is lost, you will file a claim and ship a replacement package.
                <br/>
                &#8226; &nbsp;&nbsp;If a package has been marked as “Delivered” - ask the customer if they have checked around the front 
                &nbsp;&nbsp;&nbsp;&nbsp;door and lawn.
                <br/>
                &#8226; &nbsp;&nbsp;Ask them if they have checked with other residents and neighbors who may have received the 
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;package on their behalf.
                <br/>
                &#8226; &nbsp;&nbsp;If they have done these things we can File a Claim and ship them a replacement package, have them 
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;verify their shipping address to ensure it is going to the correct address.
                <br/>
                &#8226; &nbsp;&nbsp;In certain cases we can reach out to Caroline, our FedEx Rep, and have her help locate packages or 
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;give us more information.</p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="default"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("ups")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>
          <Col md="6">
          <h5 className="btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("fedex")}>&#8226; &nbsp;&nbsp;FedEx</h5>
            <Modal
              className="modal-dialog-centered"
              size="lg"
              isOpen={this.state.fedex}
              toggle={() => this.toggleModal("fedex")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                 FedEx
                </h2>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("fedex")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <h5>How do you submit a claim through Fedex?</h5>
                <p>
                &#8226; &nbsp;&nbsp;Log into Happy Hippo FedEx account
                <br/>
                &#8226; &nbsp;&nbsp;Go to support - File a Claim
                <br/>
                &#8226; &nbsp;&nbsp;Fill in all field with correct informations
                <br/>
                &#8226; &nbsp;&nbsp;Print claim, Print emailed copy, write customer’s name and File them
                </p>

                <h5>Checking Exceptions:</h5>
                <p>
                &#8226; &nbsp;&nbsp;Log into Happy Hippo FedEx account
                <br/>
                &#8226; &nbsp;&nbsp;Go Tracking and select Advanced Shipment Tracking 
                <br/>
                &#8226; &nbsp;&nbsp;Go through each exception - email the customer to inform them of the issue and suggest they sign 
                &nbsp;&nbsp;&nbsp;&nbsp;up for FedEx Delivery Manager. 
                </p>
                
                <h5>Missing Packages</h5>
                <p>&#8226; &nbsp;&nbsp;If a FedEx package is lost, you will file a claim. 
                <br/>
                &#8226; &nbsp;&nbsp;If a package has been marked as “Delivered” - ask the customer if they have checked around the Front Door and lawn.
                <br/>
                &#8226; &nbsp;&nbsp;Ask them if they have checked with other residents and neighbors who may have received the package on their behalf.
                <br/>
                &#8226; &nbsp;&nbsp;If they have done these things we can File a Claim and ship them a replacement package, have them verify their shipping address to ensure it is going to the correct address.
                <br/>
                &#8226; &nbsp;&nbsp;In certain cases we can reach out to Caroline, our FedEx Rep, and have her help locate packages or give us more information.</p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="default"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("fedex")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>
          <Col md="6">
          <h5 className="btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("usps")}>&#8226; &nbsp;&nbsp;USPS</h5>
            <Modal
              className="modal-dialog-centered"
              size="lg"
              isOpen={this.state.usps}
              toggle={() => this.toggleModal("usps")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                 USPS
                </h2>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("usps")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>We are currently only using USPS for PO Box Deliveries.</p>

                <h5>
                How do you submit a claim through USPS? 
                </h5>
                <p>
                The customer is responsible for Filing a Claim with USPS. They must wait 7 days after shipping for Express and 15 days for Priority. 
                </p>

                </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="default"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("usps")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>
      </>
    );
  }
}

export default ShippingModals;
