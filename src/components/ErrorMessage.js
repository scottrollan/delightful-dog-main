import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './ErrorMessage.module.scss';

export default function ErrorMessage(props) {
  return (
    <Modal
      id="errorMessage"
      show={props.showErrorMessage}
      onHide={props.handleCloseErrorMessage}
      centered
    >
      <Modal.Header closeButton>
        <h4 className={styles.loginHeader}>{props.header}</h4>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        {props.message}
        <Button onClick={props.clickFunction} className={styles.button}>
          {props.buttonText}
        </Button>
      </Modal.Body>
    </Modal>
  );
}
