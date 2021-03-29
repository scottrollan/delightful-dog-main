import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails';
import ChatForm from './ChatForm';
import dogHeadset from '../../assets/dogHeadset.jpg';
import { Modal } from 'react-bootstrap';
import styles from './ChatPopup.module.scss';

export default function ChatPopup({ show, handleClose }) {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    complete: false,
  });

  const handleUserDetails = (details) => {
    setUserDetails({ ...details });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop={false}
        scrollable
        dialogClassName={styles.modal}
      >
        <Modal.Header className={styles.modalHeader}>
          <div className={styles.modalTitle}>
            <img src={dogHeadset} alt="" className={styles.titleIcon} />
            <div className={styles.titleWords}>
              <h6>Chat with us</h6>
              <h5>How can we help?</h5>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body
          style={{ display: userDetails.complete ? 'none' : 'initial' }}
        >
          <UserDetails setUserComplete={handleUserDetails} />
        </Modal.Body>
        <div style={{ display: userDetails.complete ? 'block' : 'none' }}>
          <ChatForm userDetails={userDetails} />
        </div>
      </Modal>
      <i
        className={[`fas fa-times-circle ${styles.bigX}`]}
        onClick={() => handleClose()}
        style={{ display: show ? 'inherit' : 'none' }}
      ></i>
    </>
  );
}
