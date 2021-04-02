import React, { useReducer, useEffect } from 'react';
import ConversationPane from './ConversationPane';
import { helpChatsCollection, timeStamp, fsArrayUnion } from '../../firestore';
import { createRandomString } from '../../functions/CreateRandomString';
import { Form, Modal, Button } from 'react-bootstrap';
import $ from 'jquery';

const reducer = (state, action) => {
  switch (action.type) {
    case 'message':
      return { ...state, message: action.payload };
    case 'image':
      return { ...state, attachedFile: action.payload };
    case 'setUser':
      return { ...state, ...action.payload };
    case 'setID':
      return { ...state, id: action.payload };
    case 'firstChatSent':
      //reset messageInput & set initialChat
      return { ...state, message: '', initialChat: false };
    case 'updateConversation':
      return { ...state, conversation: [...action.payload] };
    default:
      return { ...state };
  }
};

export default function ChatForm({ userDetails }) {
  const [state, dispatch] = useReducer(reducer, {
    message: '',
    attachedFile: null,
    id: '',
    userEmail: '',
    userName: '',
    initialChat: true,
    conversation: [],
  });

  //resize textarea as input grows//
  $('#messageInput').keydown(() => {
    const myHeight = $('#messageInput')[0].scrollHeight;
    $('#messageInput').css('height', `${myHeight}px`);
  });

  const submitText = (event) => {
    event.preventDefault();
    const val = event.target.value;
    dispatch({ type: 'message', payload: val });
  };

  const submitMessage = () => {
    const nowDate = new Date();
    const now = timeStamp.fromDate(nowDate);
    const firstChat = state.initialChat;
    if (firstChat) {
      const newID = createRandomString(18); //for new document (once)
      dispatch({ type: 'setID', payload: newID });
      helpChatsCollection
        .doc(newID)
        .set({
          closed: false,
          userEmail: state.userEmail,
          userName: state.userName,
          conversation: [
            {
              fromUser: true,
              quote: state.message,
              timestamp: now,
            },
          ],
        })
        .then(() => dispatch({ type: 'firstChatSent' }));
    } else {
      const id = state.id; //because id was set in above if statement
      helpChatsCollection
        .doc(id)
        .update({
          conversation: fsArrayUnion({
            fromUser: true,
            quote: state.message,
            timestamp: now,
          }),
        })
        .then(() => dispatch({ type: 'firstChatSent' }));
    }
    //after a message is sent, state.initialChat sets to false and state.message reverts to empty string
    dispatch({ type: 'firstChatSent' });
    $('#messageForm')[0].reset();
    //resize textarea back to original//
    $('#messageInput').css('height', `initial`);
  };

  useEffect(() => {
    const email = userDetails.email;
    const name = userDetails.name;
    dispatch({
      type: 'setUser',
      payload: {
        userEmail: email,
        userName: name,
      },
    });
  }, [userDetails]);
  return (
    <>
      <Modal.Body>
        <ConversationPane chatID={state.id} />
      </Modal.Body>
      <Modal.Footer style={styles.dialog}>
        <Form style={{ width: '100%' }} id="messageForm">
          <div style={styles.inputArea}>
            <Form.Group
              controlId="messageInput"
              style={styles.textareaContainer}
            >
              <Form.Label srOnly="Enter your message here"></Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                value={state.message}
                placeholder="Enter your message"
                required
                onChange={(e) => submitText(e)}
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
              onClick={() => submitMessage()}
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
    </>
  );
}

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
    height: '2.5rem',
  },
};
