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
                This is the legality map showing where kratom is legal. If it’s legal in the US we can ship there - http://speciosa.org/home/kratom-legality-map/. Puerto Rico, APO
                 and FPO International Military Bases - refer to UPS guide.
                </p>
                <h4>
                    Current shipping options    
                </h4>
                <p>
                &#8226; &nbsp;&nbsp;UPS Next Day Air 
                &#8226; &nbsp;&nbsp;FedEx 2 Day 
                &#8226; &nbsp;&nbsp;USPS  
                </p>
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
          <h5 className="btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("FedEx")}>&#8226; &nbsp;&nbsp;FedEx</h5>
            <Modal
              className="modal-dialog-centered"
              size="lg"
              isOpen={this.state.FedEx}
              toggle={() => this.toggleModal("FedEx")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                  Payment Options
                </h2>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("FedEx")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* <h4>We offer 6 payment options to our Hippo Family. Each option has its own unique benefits.</h4>
                <br/>
                <h3>PMC</h3>
                <p>
                PMC is a third-party Credit Card processor that accepts Visa/MC/Discover/AMEX. This payment method does NOT require a minimum purchase amount. Don’t be fooled by the 
                “Coin” in the title or the request to purchase “gold”...this is just a third party Credit Card processor that we use. 
                </p>
                <h5>PMC steps:</h5>
                <p>
                &#8226; &nbsp;&nbsp;With PMC you will be redirected to the PMC website, where you will enter in your Credit Card information (it’s just easier if you ignore the fact that you are purchasing “gold”). 
                Once you Agree to the Terms and Conditions and select “Next” you will be directed to Step 2
                <br/>
                &#8226; &nbsp;&nbsp;Step 2 will notify you that you have purchased PMC Gold and it is now in your eWallet. While you can hold this money in your eWallet, you will want to Transfer 
                this to a Vendor… select “Spend PMC Gold with Happy Hippo”.
                </p>
                <h5>
                YOU ARE NOT DONE JUST YET! 
                </h5>
                <p>
                &#8226; &nbsp;&nbsp;You will need to continue to Step 3 to “Complete Transfer to Happy Hippo”. Once you have done this you will wait to be Redirected to the Happy Hippo 
                  webpage(this is how it confirms your order).
                </p>
                <br/>
                <h5>Why does PMC block customers and what do we do?</h5>
                <p>Usually insufficient funds or a bounced payment. Email Jennifer/Chandler and ask for details on the customer via support@pmccoins.com</p>
                
                <h5>How do you issue a refund through PMC?</h5>
                <p>Email Jennifer/Chandler with Customer name, order number, amount, etc. </p>
                
                <h5>How do you check PMC missing orders?</h5>
                <p>If customers do not complete Step 3 - the transfer to Happy Hippo their order will go into missing order. We must manually check PMC orders through OpenCart. Copy Order 
                  ID from PMC Dashboard and paste it into Order ID in OpenCart. If an order appears, modify the order status to “Processed” and click “Notify Customer”. If no order appears
                  go to the next order until you have checked them all.</p>
                
                <h5>Order Max?</h5>
                <p>PMC has an order maximum of $500.</p>
                
                <h5>What does “Pending Settlement” mean?</h5>
                <p>If an order states “Pending Settlement” the client has transferred the funds and we are good to process the order if necessary - this just means they have not confirmed the transaction. </p> */}
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="default"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("FedEx")}
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
