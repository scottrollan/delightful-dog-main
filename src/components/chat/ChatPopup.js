import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails';
import ChatForm from './ChatForm';
import dogHeadset from '../../assets/dogHeadset.jpg';
import {
  helpChatsCollection,
  timeStamp,
  fsArrayUnion,
} from '../../firestore/index';
import { createRandomString } from '../../functions/CreateRandomString';
import { Modal } from 'react-bootstrap';
import styles from './ChatPopup.module.scss';

export default function ChatPopup({ show, handleClose }) {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    complete: false,
  });
  const [thisConversation, setThisConversation] = useState([]);

  const handleUserDetails = (details) => {
    setUserDetails({ ...details });
  };

  const nowDate = new Date();
  const now = timeStamp.fromDate(nowDate);

  useEffect(() => {
    let updatedConv;
    helpChatsCollection.doc('Vd5H1tpioB4AJvrcHTST').onSnapshot((doc) => {
      let changeID = doc.id;
      let data = doc.data();
      let changeData = { ...data, id: changeID };
      updatedConv = changeData.conversation;
      setThisConversation([...updatedConv]);
    });
    const unsubscribe = helpChatsCollection.onSnapshot(() => {});

    return unsubscribe();
  }, []);

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
        <Modal.Body>
          <div style={{ display: userDetails.complete ? 'none' : 'block' }}>
            <UserDetails setUserComplete={handleUserDetails} />
          </div>
          <div
            className={styles.conversation}
            style={{ display: userDetails.complete ? 'block' : 'none' }}
          >
            {thisConversation.map((c) => {
              return (
                <div
                  key={createRandomString(9)}
                  className={c.fromUser ? styles.fromUser : styles.fromAdmin}
                >
                  <div
                    className={
                      c.fromUser ? styles.userBadge : styles.adminBadge
                    }
                  >
                    <span>{c.fromUser ? 'me' : 'DD'}</span>
                  </div>
                  <p
                    className={
                      c.fromUser ? styles.userQuote : styles.adminQuote
                    }
                  >
                    {c.quote}
                  </p>
                  <span className={styles.buffer}></span>
                </div>
              );
            })}
          </div>
        </Modal.Body>
        <div style={{ display: userDetails.complete ? 'block' : 'none' }}>
          <ChatForm userDetails={userDetails} />
        </div>
      </Modal>
    </>
  );
}
