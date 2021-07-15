import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import UserDetails from './UserDetails';
import ChatForm from './ChatForm';
import dogHeadset from '../../assets/dogHeadset.jpg';
import { Modal } from 'react-bootstrap';
import styles from './ChatPopup.module.scss';

export default function ChatPopup({ show, handleClose }) {
  let thisUser = useContext(UserContext) ?? {};

  const [userDetails, setUserDetails] = useState({
    name: thisUser.displayName ?? '',
    email: thisUser.email ?? '',
    photoLink: thisUser.photoLink ?? '',
    complete: false,
  });

  const handleUserDetails = (details) => {
    setUserDetails({ ...details });
  };

  const renderHeader = (
    <div className={styles.modalTitle}>
      <img src={dogHeadset} alt="" className={styles.titleIcon} />
      <div className={styles.titleWords}>
        <h6>Chat with us</h6>
        <h5>How can we help?</h5>
      </div>
    </div>
  );
  const renderBody = (
    <>
      <div style={{ display: userDetails.complete ? 'none' : 'initial' }}>
        <UserDetails
          setUserComplete={handleUserDetails}
          userDetails={userDetails}
        />
      </div>
      <div style={{ display: userDetails.complete ? 'block' : 'none' }}>
        <ChatForm userDetails={userDetails} />
      </div>
    </>
  );
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop={false}
        scrollable
        dialogClassName={styles.modal}
        id="chatModal"
      >
        <Modal.Header className={styles.modalHeader}>
          {renderHeader}
          <button className="close">
            <i
              className={[`fas fa-times ${styles.closeButton}`]}
              onClick={() => handleClose()}
            ></i>
          </button>
        </Modal.Header>
        <Modal.Body>
          {renderBody}
          {/* <UserDetails
            setUserComplete={handleUserDetails}
            userDetails={userDetails}
          /> */}
        </Modal.Body>
        {/* <div style={{ display: userDetails.complete ? 'block' : 'none' }}>
          <ChatForm userDetails={userDetails} />
        </div> */}
      </Modal>
    </>
  );
}
