import React from 'react';
import { signOut } from '../../firestore/index';
import { Modal, Button } from 'react-bootstrap';

export default function Logout(props) {
  const doSignOut = async () => {
    const signOutInfo = await signOut();
    console.log(signOutInfo);
    alert('Check console');
  };

  return (
    <Modal show={props.logoutShow} onHide={props.handleCloseLogout} centered>
      <Modal.Body>
        <Button onClick={() => doSignOut()}>Sign Out</Button>
      </Modal.Body>
    </Modal>
  );
}
