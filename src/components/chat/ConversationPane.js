import React, { useState, useEffect } from 'react';
import { helpChatsCollection } from '../../firestore';
import { createRandomString } from '../../functions/CreateRandomString';

export default function ConversationPane({ chatID }) {
  const [thisConversation, setThisConversation] = useState([]);

  useEffect(() => {
    let mounted = true;
    let data;
    let conversation;
    if (chatID) {
      console.log(chatID);

      helpChatsCollection.doc(chatID).onSnapshot(
        (doc) => {
          if (doc.data() && mounted) {
            data = doc.data();
            conversation = data.conversation;
            setThisConversation(conversation);
          }
        },
        (error) => {
          console.log(error);
        }
      );

      const unsubscribe = helpChatsCollection.onSnapshot(() => {});

      return () => {
        mounted = false;
        unsubscribe();
      };
    }
  }, [chatID]);
  return (
    <div style={styles.conversation}>
      {thisConversation.map((c) => {
        return (
          <div
            key={createRandomString(9)}
            style={c.fromUser ? styles.fromUser : styles.fromAdmin}
          >
            <div style={c.fromUser ? styles.userBadge : styles.adminBadge}>
              <span>{c.fromUser ? 'me' : 'DD'}</span>
            </div>
            <p style={c.fromUser ? styles.userQuote : styles.adminQuote}>
              {c.quote}
            </p>
            <span className={styles.buffer}></span>
          </div>
        );
      })}
    </div>
  );
}
const badgeDefault = {
  borderRadius: '50%',
  color: 'var(--color-white)',
  minHeight: '2.2rem',
  minWidth: '2.2rem',
  maxHeight: '2.2rem',
  maxWidth: '2.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const styles = {
  conversation: {
    minHeight: '45vh',
    maxHeight: '45vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  fromUser: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  fromAdmin: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    display: 'flex',
  },
  userBadge: {
    ...badgeDefault,
    backgroundColor: 'var(--delightful-bright)',
  },
  buffer: {
    ...badgeDefault,
    backgroundolor: 'transparent',
  },
  adminBadge: {
    ...badgeDefault,
    backgroundColor: 'var(--delightful-neutral)',
  },
  userQuote: {
    margin: '1.5vh 0.6vw',
    padding: '0.5rem',
    borderRadius: '0.5rem 0 0.5rem 0.5rem',
    backgroundColor: 'var(--color-light-gray)',
  },
  adminQuote: {
    margin: '1.5vh 0.6vw',
    padding: '0.5rem',
    borderRadius: '0 0.5rem 0.5rem 0.5rem',
    backgroundColor: 'var(--color-very-light-gray)',
  },
};
