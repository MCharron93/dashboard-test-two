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

class MissingPackageModal extends React.Component {
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
            <li className="btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("defaultModal")}>&#8226; &nbsp;&nbsp;Missing Packages</li>
            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                  Missing Packages Excel Spreadsheet
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
                {/* NOTE will want like to lead to spreadsheet mentioned by Cust. Serv. */}
                <p>
                When a package is lost we File a Claim with the appropriate carrier and then log it on the missing packages excel spreadsheet
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
      </>
    );
  }
}

export default MissingPackageModal;
