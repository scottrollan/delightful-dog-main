import React from 'react';
import { Form, Button } from 'react-bootstrap';
import * as fs from '../../firestore';
import $ from 'jquery';

export default function EmailSignupForm(props) {
  const signUp = async () => {
    const signUpInfo = await fs.createUserWithEmail(
      props.email,
      props.password
    );
    console.log(signUpInfo);
    switch (signUpInfo) {
      case 'auth/email-already-in-use':
        $('#loginBody').hide();
        $(`#errorBody`).show();
        $(`#loginHeader`).text('That user already exists');
        break;
      case 'auth/weak-password':
        $('#loginBody').hide();
        $(`#errorBody`).show();
        $(`#loginHeader`).text(
          'Passwords must be be at least 6 characters long.'
        );
        break;
      default:
        console.log(signUpInfo);
        break;
    }
  };
  const emailLogin = async (event) => {
    event.preventDefault();
    const loginInfo = await fs.signInWithEmail(props.email, props.password);
    switch (loginInfo) {
      case 'auth/invalid-email':
        $('#loginBody').hide();
        $(`#errorBody`).show();
        $(`#loginHeader`).text('Invalid Email Address');
        $('#errorMessage').html(
          'Email addresses should be in this format: <i>name@email.com</i>'
        );
        break;
      case 'auth/user-not-found':
        $('#loginBody').hide();
        $(`#errorBody`).show();
        $(`#loginHeader`).text(
          'No user with that email exists in our records.'
        );
        break;
      case 'auth/too-many-requests':
        $('#loginBody').hide();
        $(`#errorBody`).show();
        $(`#loginHeader`).text('Too many login attempts.');
        $('#errorMessage').text(
          'Please allow several minutes before attempting another login'
        );
        break;
      default:
        return loginInfo;
    }
  };

  const handleKeyPress = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      emailLogin(e);
    }
  };

  return (
    <Form style={styles.form}>
      <div style={styles.line}>
        <Form.Group
          controlId="email"
          style={styles.input}
          // onSubmit={(e) => emailLogin(e)}
        >
          <Form.Label srOnly="enter your email address"></Form.Label>
          <Form.Control
            type="email"
            value={props.email}
            placeholder="Enter Email"
            onChange={(e) => props.setNewEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password" style={styles.input}>
          <Form.Label srOnly="enter your password"></Form.Label>
          <Form.Control
            type="password"
            value={props.password}
            placeholder="Enter Password"
            onChange={(e) => props.setNewPassword(e.target.value)}
            onKeyDown={handleKeyPress}
            required
          />
        </Form.Group>
      </div>
      <div style={styles.line}>
        <Button
          style={{
            ...styles.input,
            backgroundColor: 'var(--delightful-bright)',
          }}
          onClick={(e) => emailLogin(e)}
          // type="submit"
        >
          Login
        </Button>
        <Button
          style={{
            ...styles.input,
            backgroundColor: 'var(--delightful-bright)',
          }}
          onClick={() => signUp()}
        >
          Sign Up
        </Button>
      </div>
    </Form>
  );
}

const styles = {
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem 10% 1rem',
  },
  line: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    width: '48%',
  },
};
