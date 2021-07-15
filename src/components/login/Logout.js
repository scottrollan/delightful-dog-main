import React from 'react';
import { signOut } from '../../firestore/index';
import { Modal, Button } from 'react-bootstrap';
import styles from './Login.module.scss';

export default function Logout(props) {
  const doSignOut = () => {
    signOut();
  };

  return (
    <Modal show={props.logoutShow} onHide={props.handleCloseLogout} centered>
      <Modal.Body className={styles.body}>
        <Button
          onClick={() => doSignOut()}
          className={styles.button}
          style={{ backgroundColor: 'var(--delightful-bright)' }}
        >
          Sign Out
        </Button>
      </Modal.Body>
    </Modal>
  );
}
