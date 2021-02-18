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
  Row,
  Col
} from "reactstrap";

class PaymentModals extends React.Component {
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
            <li className="btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("defaultModal")}>&#8226; &nbsp;&nbsp;Payment Methods</li>
            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                  Payment Methods
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
                <p>
                Just like Happy Hippo, Kratom is not just a “normal” leaf. Kratom is still considered as a “grey area” by  most banks, it can be difficult and expensive to find 
                payment processors that will work with us. While our payment methods may seem “unconventional” at first, rest assured that they are actually very easy to navigate
                - and if you ever have any questions….your Happy Hippo Helpers are always Happy to help you. 
                </p>
                <p>
                  
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
          <h5 className="btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("payOpt")}>&#8226; &nbsp;&nbsp;Payment Options</h5>
            <Modal
              className="modal-dialog-centered"
              size="lg"
              isOpen={this.state.payOpt}
              toggle={() => this.toggleModal("payOpt")}
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
                  onClick={() => this.toggleModal("payOpt")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <h5>We offer 6 payment options to our Hippo Family. Each option has its own unique benefits.</h5>
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
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="default"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("payOpt")}
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

export default PaymentModals;


// NOTE notification modal that looks really pretty, but not sure if needed at this time in this page. Set off to side for future use
// <Col md="4">
//             <Button
//               block
//               className="mb-3"
//               color="warning"
//               type="button"
//               onClick={() => this.toggleModal("notificationModal")}
//             >
//               Notification
//             </Button>
//             <Modal
//               className="modal-dialog-centered modal-danger"
//               contentClassName="bg-gradient-danger"
//               isOpen={this.state.notificationModal}
//               toggle={() => this.toggleModal("notificationModal")}
//             >
//               <div className="modal-header">
//                 <h6 className="modal-title" id="modal-title-notification">
//                   Your attention is required
//                 </h6>
//                 <button
//                   aria-label="Close"
//                   className="close"
//                   data-dismiss="modal"
//                   type="button"
//                   onClick={() => this.toggleModal("notificationModal")}
//                 >
//                   <span aria-hidden={true}>×</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <div className="py-3 text-center">
//                   <i className="ni ni-bell-55 ni-3x" />
//                   <h4 className="heading mt-4">You should read this!</h4>
//                   <p>
//                     A small river named Duden flows by their place and
//                     supplies it with the necessary regelialia.
//                   </p>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <Button className="btn-white" color="default" type="button">
//                   Ok, Got it
//                 </Button>
//                 <Button
//                   className="text-white ml-auto"
//                   color="link"
//                   data-dismiss="modal"
//                   type="button"
//                   onClick={() => this.toggleModal("notificationModal")}
//                 >
//                   Close
//                 </Button>
//               </div>
//             </Modal>
//           </Col>