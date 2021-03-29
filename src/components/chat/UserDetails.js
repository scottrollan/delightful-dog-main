import React, { useReducer } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function UserDetails({ setUserComplete }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'name':
        return { ...state, name: action.payload };
      case 'email':
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    complete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let details = { ...state, complete: true };
    setUserComplete({ ...details });
  };

  const styles = {
    startChatButton: {
      width: '100%',
    },
  };
  return (
    <Form
      onSubmit={(e) => handleSubmit(e)}
      style={{ display: state.complete ? 'none' : 'block' }}
    >
      <Form.Group controlId="nameInput">
        <Form.Label srOnly>Enter Your Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Name"
          value={state.name}
          required
          onChange={(e) => dispatch({ type: 'name', payload: e.target.value })}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="emailInput">
        <Form.Label srOnly>Enter you email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your Email"
          value={state.email}
          required
          onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
        ></Form.Control>
      </Form.Group>
      <Button
        type="submit"
        variant="outline-secondary"
        size="lg"
        className={styles.startChatButton}
      >
        Start Chatting
      </Button>
    </Form>
  );
}
