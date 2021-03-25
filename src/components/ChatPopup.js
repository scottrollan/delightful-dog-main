import React, { useState } from 'react';
import UserDetails from './UserDetails';
import dogHeadset from '../assets/dogHeadset.jpg';
import { Modal } from 'react-bootstrap';
import styles from './ChatPopup.module.css';

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
        <Modal.Body>
          <div style={{ display: userDetails.complete ? 'none' : 'block' }}>
            <UserDetails setUserComplete={handleUserDetails} />
          </div>
          <div style={{ display: userDetails.complete ? 'block' : 'none' }}>
            <p>{userDetails.name}</p>
            <p>{userDetails.email}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
