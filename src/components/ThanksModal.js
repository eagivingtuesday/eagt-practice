import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChevronRight,
  faNewspaper,
  faReceipt,
  faShieldAlt,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';

class ThanksModal extends React.Component {

  renderActionRow(faIcon, header, caption, includeArrow) {
    var arrow = includeArrow ? (<FontAwesomeIcon icon={faChevronRight} />) : (<div></div>);
    return (
      <div className="row">
        <div className="col-1 text-lightgrey">
          <FontAwesomeIcon icon={faIcon} size="lg" />
        </div>
        <div className="col-10">
          <b>{header}</b>
          <p className="text-thanks-action text-muted">{caption}</p>
        </div>
        <div className="col-1 text-muted">
          {arrow}
        </div>
      </div>
    );
  }

  render() {
    var header = (
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10"><h5>Facebook Pay</h5></div>
        <div className="col-1">
          <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
      </div>
    );
    return (
      <Modal
       className="shadow-lg"
       show={this.props.show}
       onHide={() => {}}
      >
        <Modal.Body>
          <div className="text-center">
            {header}
            <hr></hr>
            <span className="text-success">
              <FontAwesomeIcon id="thanks-check" icon={faCheckCircle} size="4x" />
            </span>
            <h5>Thank you for your donation</h5>
            <p className="text-muted">
              Thank you for your donation! A receipt was sent to yourEmail@gmail.com.
            </p>
          </div>
          {this.renderActionRow(
            faUserFriends,
            "Invite Your Friends",
            "Share this fundraiser with friends who you think would like to support this cause.",
            true
          )}
          {this.renderActionRow(
            faNewspaper,
            "Share in News Feed",
            "Support this fundraiser by sharing in your News Feed to let friends know this cause is important to you.",
            true
          )}
          {this.renderActionRow(
            faReceipt,
            "See Receipt",
            "View your receipt for this donation.",
            false
          )}
          {this.renderActionRow(
            faShieldAlt,
            "Add a PIN to protect your payments.",
            "Once created, you'll enter your PIN as a security check on some payments.",
            false
          )}
          <div className="text-right row">
          <div className="col-8"></div>
          <div className="col-4"><Button variant="primary" block disabled>Done</Button></div>
          </div>
        </Modal.Body>

      </Modal>
    );
  }
}

export default ThanksModal;
