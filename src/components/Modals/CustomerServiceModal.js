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

class Modals extends React.Component {
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
        <Row>
          <Col md="6">
            <li className="btn shadow-none text-white" onClick={() => this.toggleModal("defaultModal")}>&#8226; &nbsp;&nbsp;Payment Methods</li>
            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h4 className="modal-title" id="modal-title-default">
                  Payment Methods
                </h4>
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
          <li className="btn shadow-none text-white" onClick={() => this.toggleModal("payOpt")}>&#8226; &nbsp;&nbsp;Payment Options</li>
            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.payOpt}
              toggle={() => this.toggleModal("payOpt")}
            >
              <div className="modal-header">
                <h4 className="modal-title" id="modal-title-default">
                  Payment Options
                </h4>
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
                  onClick={() => this.toggleModal("payOpt")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>
        </Row>
      </>
    );
  }
}

export default Modals;


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