import React, { useState, useContext, useEffect } from 'react';
import { helpChatsCollection } from '../../firestore/index';
import { UserContext, ModalContext } from '../../App';
import UserDetails from './UserDetails';
import dogHeadset from '../../assets/dogHeadset.jpg';
import ChatPopup from './ChatPopup';
import ChatForm from './ChatForm';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import $ from 'jquery';
import styles from '../OmniModal.module.scss';

export default function ChatBot() {
  const thisUser = useContext(UserContext) ?? {};
  const setModal = useContext(ModalContext);
  const [showChat, setShowChat] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [helpIsOnline, setHelpIsOnline] = useState(false);

  const handleUserDetails = (details) => {
    console.log(details);
    setUserDetails({
      name: details.name,
      email: details.email,
      photoLink: details.photoLink,
      complete: details.complete,
    });
  };
  const checkDetails = () => {
    console.log(userDetails);
  };
  const renderChatHeader = (
    <div className={styles.modalTitle}>
      <img src={dogHeadset} alt="" className={styles.titleIcon} />
      <div className={styles.titleWords}>
        <h6>Chat with us</h6>
        <h5>How can we help?</h5>
      </div>
    </div>
  );
  const renderUserDetailsBody = (
    <>
      <div style={{ display: userDetails.complete ? 'none' : 'initial' }}>
        <UserDetails
          setUserComplete={handleUserDetails}
          userDetails={userDetails}
        />
        <button onClick={() => checkDetails()}>Check User Details Now</button>
      </div>
      <div style={{ display: userDetails.complete ? 'block' : 'none' }}>
        <ChatForm userDetails={userDetails} />
      </div>
    </>
  );
  const handleOpen = () => {
    if ($.isEmptyObject(thisUser)) {
      setShowLogin(true);
    } else {
      setModal.setContent(renderChatHeader, renderUserDetailsBody);
      setModal.show();
    }
  };

  const handleClose = () => {
    setShowChat(false);
    $('#backdrop').hide();
  };
  useEffect(() => {
    helpChatsCollection.doc('onlineStatus').onSnapshot((doc) => {
      let docData = doc.data();
      setHelpIsOnline(docData.isOnline);
      console.log(docData);
    });
    const unsubscribe = helpChatsCollection.onSnapshot(() => {});
    unsubscribe();
  }, []);

  return (
    <>
      <div id="backdrop" className={styles.backdrop}></div>
      <div
        className={styles.chatButtonRing}
        style={{ display: helpIsOnline ? 'inherit' : 'none' }}
      ></div>
      <div
        id="chatButton"
        className={styles.chatButton}
        style={{ display: helpIsOnline ? 'inherit' : 'none' }}
      >
        <img
          src={dogHeadset}
          alt=""
          className={styles.dogHeadset}
          onClick={() => handleOpen()}
        />
      </div>
      <Nav.Link
        as={Link}
        to="/contact"
        className={styles.emailUs}
        style={{ display: helpIsOnline ? 'none' : 'flex' }}
      >
        <i className="fas fa-envelope"></i>
      </Nav.Link>
      <ChatPopup
        show={showChat}
        handleClose={handleClose}
        thisUser={thisUser}
      />
    </>
  );
}
