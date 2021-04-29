import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';
import $ from 'jquery';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'delightful-dog-cloud-functions.firebaseapp.com',
  projectId: 'delightful-dog-cloud-functions',
  storageBucket: 'delightful-dog-cloud-functions.appspot.com',
  messagingSenderId: '759890875483',
  appId: '1:759890875483:web:16decac4d631e61ad05b7e',
  measurementId: 'G-93WLC93X23',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export default firebase;

////////// Storage //////////
const storage = firebase.storage();
export const storageRef = storage.ref();
//to store images/files ex: export const usersRef = storageRef.child('images/users');

////////// Utilities //////////
export const timeStamp = firebase.firestore.Timestamp;
export const fsArrayUnion = firebase.firestore.FieldValue.arrayUnion;

////////// Firestore auth //////////
export const auth = firebaseApp.auth();

////////// login third party //////////
export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider);
  window.location.reload();
};
export const signInWithFacebook = async () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  await auth.signInWithPopup(provider);
  window.location.reload();
};
export const signInWithTwitter = async () => {
  const provider = new firebase.auth.TwitterAuthProvider();
  await auth.signInWithPopup(provider);
  window.location.reload();
};
export const signInWithEmail = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    //Does the below need to occur?????////////
    // window.location.reload();
  } catch (e) {
    const errorCode = e.code;
    return errorCode;
  }
};

export const createUserWithEmail = async (email, password) => {
  try {
    const data = await auth.createUserWithEmailAndPassword(email, password);
    return data;
    //data contains data.user
  } catch (error) {
    const errorCode = error.code;
    return errorCode;
  }
};

export const sendResetPassword = async (emailAddress) => {
  try {
    auth.sendPasswordResetEmail(emailAddress).then(() => {
      // Email sent.
      $('#resetPassword').css('display', 'flex');
    });
  } catch (error) {
    alert(error.message);
  }
};

export const signOut = async () => {
  await auth.signOut();
  window.location.reload();
};

export const checkAuth = (cb) => {
  return auth.onAuthStateChanged(cb);
};

export const user = () => {
  return auth.currentUser;
};

////////// Firestore access //////////
const db = firebaseApp.firestore();
export const helpChatsCollection = db.collection('helpChats');

// ////////// Firebase messaging //////////
// let messagingToken;
// let messagePayload = {};
// const messaging = firebase.messaging();
// messaging
//   .requestPermission()
//   .then(() => {
//     console.log('Have Permission');
//     return messaging.getToken();
//   })
//   .then((token) => {
//     messagingToken = token;
//     console.log(token)
//   })
//   .catch((error) => {
//     console.log(`Error Occurred: ${error}`);
//   });

// messaging.onMessage((payload) => {
//   //payload = {from, priority, notification, collapse_key}
//   //payload.notification = {title, body, icon}
//   messagePayload = { ...payload.notification };
// });

// export { messagingToken, messagePayload };
