import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDD8Nr4QDAkcwI5pJs6W6Mw8h4BBZRJK44",
  authDomain: "clone-65f16.firebaseapp.com",
  projectId: "clone-65f16",
  storageBucket: "clone-65f16.appspot.com",
  messagingSenderId: "302740641748",
  appId: "1:302740641748:web:228929fd43ce13e193a841",
  measurementId: "G-494TT02RYD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
