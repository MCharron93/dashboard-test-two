import React from "react";
// reactstrap components
import {
  Button,
  Modal,
  Col
} from "reactstrap";

class DiscountsModal extends React.Component {
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
                <li className="text-left btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("defaultModal")}>Discounts</li>
                <Modal
                  className="modal-dialog-centered"
                  size="lg"
                  isOpen={this.state.defaultModal}
                  toggle={() => this.toggleModal("defaultModal")}
                >
                  <div className="modal-header">
                    <h2 className="modal-title" id="modal-title-default">
                      Discounts
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
                      <h3>Split Kilos</h3>
                    <p>
                    Split Kilo Discounts - Makes it the same price as buying a Kilo, about 20% off, will automatically apply to the customer’s shopping cart.
                    </p>

                    <h3>Coupons/Codes</h3>
                    <p>
                    If they are a first time customer, tell them about the NewsLetter. Let them know we provide Discount Codes in our Newbie Packs. Tell them 
                    about the discounts we give for our different payment methods. If they are a frequent customer with a good order history give them a discount 
                    code. If they do not have large frequent orders and consistently ask for discount codes try not give them one.
                    </p>

                    <h3>Sale Prices</h3>
                    <p>
                    We offer 2 sales every week usually on Monday and Wednesday, we can honor the sale price within a 24 hour period. If they have large frequent 
                    orders we can give them a coupon code for the difference of the Sale price. Never give sale dates or strains away. Just hint towards it, ie. 
                    “Keep an eye out next week for your favorite strain…”
                    </p>

                    <h3>Bulk Pricing</h3>
                    <p>Any bulk pricing questions can be directed to Kiley or Veronica sales@happyhippoherbals.com. Bulk Pricing requires a minimum of 5 Kilos.</p>
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
              <h5 className="text-left btn shadow-none text-white" id="custom-btn" onClick={() => this.toggleModal("rewards")}>Rewards Points</h5>
                <Modal
                  className="modal-dialog-centered"
                  size="sm"
                  isOpen={this.state.rewards}
                  toggle={() => this.toggleModal("rewards")}
                >
                  <div className="modal-header">
                    <h2 className="modal-title" id="modal-title-default">
                      Rewards Points
                    </h2>
                    <button
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("rewards")}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                    Unfortunately we do not currently offer a rewards program, however we do offer several discounts based on certain payment methods. 
                    </p>

                  </div>
                  <div className="modal-footer">
                    <Button
                      className="ml-auto"
                      color="default"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("rewards")}
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

export default DiscountsModal;