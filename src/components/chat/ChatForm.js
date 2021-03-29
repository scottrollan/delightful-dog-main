import React, { useReducer } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import $ from 'jquery';

const reducer = (state, action) => {
  switch (action.type) {
    case 'message':
      return { ...state, message: action.payload };
    case 'image':
      return { ...state, attachedFile: action.payload };
    default:
      return { ...state };
  }
};

export default function ChatForm({ userDetails }) {
  const [state, dispatch] = useReducer(reducer, {
    message: '',
    attachedFile: null,
  });

  const styles = {
    dialog: {
      width: '100%',
      padding: '0',
    },
    inputArea: {
      width: '100%',
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
    },
    textareaContainer: {
      flexGrow: 1,
      margin: '0 1rem 0 0',
      display: 'flex',
      alignItems: 'center',
    },
    messageInput: {
      flex: 1,
      border: 'none',
      padding: '0',
      minWidth: '0',
      boxShadow: 'none',
      maxHeight: '20vh',
      resize: 'none',
    },
    flexEndButton: {
      border: 'none',
      background: 'transparent',
      color: 'var(--color-gray)',
      // padding: '0',
      height: '2.5rem',
    },
  };

  //resize textarea as input grows//
  $('#messageInput').keydown(() => {
    const myHeight = $('#messageInput')[0].scrollHeight;
    $('#messageInput').css('height', `${myHeight}px`);
  });

  const submitMessage = (event) => {
    event.preventDefault();
    const val = event.target.value;
    dispatch({ type: 'message', payload: val });
  };

  return (
    <Modal.Footer style={styles.dialog}>
      <Form style={{ width: '100%' }}>
        <div style={styles.inputArea}>
          <Form.Group controlId="messageInput" style={styles.textareaContainer}>
            <Form.Label srOnly="Enter your message here"></Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              value={state.message}
              placeholder="Enter your message"
              required
              onChange={(e) => submitMessage(e)}
              style={styles.messageInput}
            ></Form.Control>
          </Form.Group>
          <Button
            style={{
              ...styles.flexEndButton,
              display: state.message === '' ? 'inline-block' : 'none',
            }}
          >
            <i className="fas fa-camera-alt"></i>
          </Button>
          <Button
            style={{
              ...styles.flexEndButton,
              display: state.message === '' ? 'none' : 'inline-block',
            }}
          >
            <i className="fas fa-paper-plane"></i>
          </Button>
        </div>
      </Form>
    </Modal.Footer>
  );
}
