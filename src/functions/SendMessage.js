import axios from 'axios';
import { messagingToken, messagePayload } from '../firestore/index';
import $ from 'jquery';

const url = 'https://fcm.googleapis.com/fcm/send';
const iconURL =
  'https://firebasestorage.googleapis.com/v0/b/delightful-dog-cloud-functions.appspot.com/o/assets%2FdogHeadset.jpg?alt=media&token=b3020357-c63e-4257-80ee-2a30502189b6';
const authToken = process.env.REACT_APP_MESSAGEING_SERVER_KEY;

export const sendMessage = async () => {
  let deviceToken = messagingToken;
  console.log(deviceToken);
  const data = {
    to: deviceToken,
    notification: {
      title: 'INCOMING CHAT',
      body: 'Chat Now',
      icon: iconURL,
    },
  };
  const headers = {
    Authorization: `key=${authToken}`,
    'Content-Type': 'application/json',
  };

  axios
    .post(url, { ...data }, { headers: { ...headers } })
    .then((response) => {
      console.log(`Message sent succesfully: ${response}`);
      $('#chatButton').show();
      $('#chatAnchor').attr('href', iconURL);
    })
    .catch((error) => {
      console.log(`Send Error: ${error}`);
    });
};
