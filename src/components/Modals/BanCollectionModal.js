import React from "react";
// reactstrap components
import {
  Button,
  Modal,
  Col
} from "reactstrap";

class BanCollectionModal extends React.Component {
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
            <li className="btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("defaultModal")}>Ban System and Collections</li>
            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="modal-title-default">
                  Ban System and Collections
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
                  <h3>When do we put someone in the ban system and for how long?</h3>
                <p>Enter someone into the Ban System for any Return. Always place a Ban on any return until the debt is settled, the only exception is the package was never shipped.</p>

                <h3>Debt Collection Excel Spreadsheet</h3>
                {/* NOTE will want like to lead to spreadsheet mentioned by Cust. Serv. */}
                <p>Enter customers into the debt collection spreadsheet when we send them an invoice for a returned payment.</p>
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

export default BanCollectionModal;