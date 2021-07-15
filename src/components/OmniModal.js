import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './OmniModal.module.scss';

export default function OmniModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton className={styles.modalHeader}>
        {props.headerContent}
      </Modal.Header>
      <Modal.Body>{props.bodyContent}</Modal.Body>
    </Modal>
  );
}
