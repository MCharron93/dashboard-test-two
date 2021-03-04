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
  // Row,
  Col
} from "reactstrap";

class ErrorModals extends React.Component {
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
          <Col md="12">
            <li className="text-left btn shadow-none text-dark-gray py-3" id="custom-btn-3" onClick={() => this.toggleModal("defaultModal")}>What do we do when someone is really unhappy with their already opened product?</li>
            <Modal
              className="modal-dialog-centered"
              size="lg"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                Go through all the questions protocols first:
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
                  <h4 className="display-4">1oz</h4>
                  <ul>
                      <li>Ask how much their serving size is</li>
                      <li>How often they dose per day</li>
                      <li>If they are taking it on an empty stomach</li>
                      <li>If they drink plenty of water, etc</li>
                  </ul>
                  <p>Ship them a new strain or offer a coupon code.</p>

                  <h4 className="display-4">1/2 Kilo</h4>
                  <ul>
                      <li>Ask them if this is the first time they are trying that strains</li>
                      <li>Point out that they should NEVER order a big amount of something they are not familiar with</li>
                  </ul>
                      <p>Use your discretion on if you to replace or refund the ½ Kilo (are they a good customer, are they being compliant and answering questions, etc).</p>
                      <br/>
                <p className="alert-danger p-1 rounded">
                ON all orders that make people sick, have them send back for batch testing and submit a report or Josh. 
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="warning"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>
          <Col md="12">
          <h5 className="text-left btn shadow-none text-dark-gray py-3" id="custom-btn-3" onClick={() => this.toggleModal("illness")}>When someone gets sick off Kratom?</h5>
            <Modal
              className="modal-dialog-centered"
              size="lg"
              isOpen={this.state.illness}
              toggle={() => this.toggleModal("illness")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                    Do we offer to replace or just have them send it back?
                </h2>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("illness")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <h3>Use your best judgement: </h3>
                <br/>
                <p>See if they are a good customer and will be ordering again in the future, see if they are being kind and helpful with questions or if they are just ignoring them. </p>
                
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="secondary"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("illness")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>
          <Col md="12">
          <h5 className="text-left btn shadow-none text-dark-gray py-3" id="custom-btn-3" onClick={() => this.toggleModal("damagedPack")}>What do we do for damaged packages?</h5>
            <Modal
              className="modal-dialog-centered"
              size="lg"
              isOpen={this.state.damagedPack}
              toggle={() => this.toggleModal("damagedPack")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                    Damaged Product
                </h2>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("damagedPack")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <ul>
                    <li>Always ask for photos of the damaged product if they do not provide one in the first email.</li>
                    <br/>
                    <li>If they are missing a small amount of product, offer to send them the difference for free.</li>
                    <br/>
                    <li>If they are missing an entire package of Kratom, replace it entirely.</li>
                </ul> 
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="secondary"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("damagedPack")}
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

export default ErrorModals;


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