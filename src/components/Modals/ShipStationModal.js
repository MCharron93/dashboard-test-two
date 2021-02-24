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

class ShipStationModal extends React.Component {
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
            <li className="btn shadow-none text-dark" id="custom-btn-2" onClick={() => this.toggleModal("defaultModal")}>Shipstation</li>
            <Modal
              className="modal-dialog-centered"
              size="lg"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                  Shipstation
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
                <h4>Clearing Holds:</h4>
                <p>
                Use the customers email and enter it into WLO - if this is their first order using the payment method you will email the customer about our
                 First eCheck Policy (which is where we hold the package until the payment “settles” in our system) and keep the customer in holds with a note
                  on their order saying they are a First Order Hold and have been emailed. If this is not their first order and they do not have any unsettled 
                  returns you can restore them. 
                </p>
                <h4>How to look up Batches for possible orders that never shipped:</h4>
                <ul>
                    <li>Go to the Shipments tab</li>
                    <li>Enter the order number</li>
                    <li>Click on Batch #</li>
                    <li>Scroll over the status: if all of them say the SAME this along the lines of “waiting for pickup” it was not shipped</li>
                    <li>If they all say different things - it most likely got shipped</li>
                    <li>If you are unsure - try printing the label and it will tell you if it has already been printed.</li>
                </ul>
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
      </>
    );
  }
}

export default ShipStationModal;
