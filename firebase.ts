import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAV-D-w0QTBetYXu_giYQN4BGc0oX47hMA',
  authDomain: 'stacksagar-storage.firebaseapp.com',
  projectId: 'stacksagar-storage',
  storageBucket: 'stacksagar-storage.appspot.com',
  messagingSenderId: '426935210168',
  appId: process.env.appID,
  measurementId: 'G-9E7000L682',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const database = app.firestore();
const storage = firebase.storage();

export { database, storage };
