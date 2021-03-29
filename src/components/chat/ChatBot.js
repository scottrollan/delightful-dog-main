import React, { useState } from 'react';
import dogHeadset from '../../assets/dogHeadset.jpg';
import ChatPopup from './ChatPopup';
import $ from 'jquery';
import styles from './ChatBot.module.scss';

export default function ChatBot() {
  const [showChat, setShowChat] = useState(false);

  const handleOpen = () => {
    setShowChat(true);
    $('#backdrop').show();
  };
  const handleClose = () => {
    setShowChat(false);
    $('#backdrop').hide();
  };
  return (
    <>
      <div id="backdrop" className={styles.backdrop}></div>
      <div id="chatButton" className={styles.chatButton}>
        <img
          src={dogHeadset}
          alt=""
          className={styles.dogHeadset}
          onClick={() => handleOpen()}
          style={{ display: showChat ? 'none' : 'inherit' }}
        />
        <i
          className={[`fas fa-times-circle ${styles.bigX}`]}
          onClick={() => handleClose()}
          style={{ display: showChat ? 'inherit' : 'none' }}
        ></i>
      </div>

      <ChatPopup show={showChat} handleClose={handleClose} />
    </>
  );
}
