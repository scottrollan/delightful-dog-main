import React, { useState } from 'react';
import EmailSignupForm from './EmailSignupForm';
import * as fs from '../../firestore/index';
import { sendResetPassword } from '../../firestore/index';
import { Modal, Button } from 'react-bootstrap';
import $ from 'jquery';
import styles from './Login.module.scss';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setNewEmail = (value) => {
    setEmail(value);
  };
  const setNewPassword = (value) => {
    setPassword(value);
  };

  const closeError = () => {
    $('#errorBody').hide();
    $('#loginBody').show();
    $('#loginHeader').text('Login to Delightful Dog');
  };

  return (
    <Modal
      show={props.showLogin}
      onHide={props.handleCloseLogin}
      className={styles.modal}
      centered
    >
      <Modal.Header closeButton>
        <h4 id="loginHeader">Login To Delightful Dog</h4>
      </Modal.Header>
      <Modal.Body className={styles.body} id="loginBody">
        <Button
          className={styles.button}
          style={{ backgroundColor: facebookBlue }}
          onClick={fs.signInWithFacebook}
        >
          <i className="fab fa-facebook"></i>&nbsp;&nbsp;&nbsp;Facebook
        </Button>
        <Button
          className={styles.button}
          style={{ backgroundColor: googleRed }}
          onClick={fs.signInWithGoogle}
        >
          <i className="fab fa-google"></i>
          &nbsp;&nbsp;&nbsp;Google
        </Button>
        <Button
          className={styles.button}
          style={{ backgroundColor: twitterBlue }}
          onClick={fs.signInWithTwitter}
        >
          <i className="fab fa-twitter"></i>&nbsp;&nbsp;&nbsp;Twitter
        </Button>

        <EmailSignupForm
          email={email}
          password={password}
          setNewEmail={setNewEmail}
          setNewPassword={setNewPassword}
        />
      </Modal.Body>
      <Modal.Body id="errorBody" style={{ display: 'none' }}>
        <div
          id="errorMessage"
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            padding: '0.5rem, 2rem',
          }}
        ></div>
        <Button onClick={() => closeError()}>Go Back</Button>
        <Button onClick={() => sendResetPassword(email)}>Reset Password</Button>
      </Modal.Body>
    </Modal>
  );
}
const facebookBlue = '#4267B2';
const googleRed = '#DB4437';
const twitterBlue = '#1DA1F2';
