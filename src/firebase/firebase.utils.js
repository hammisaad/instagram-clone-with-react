import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAeULT7DWFmXDe1muF9JH0V5RQBmFPhPGQ",
  authDomain: "instagram-clone-a6a01.firebaseapp.com",
  databaseURL: "https://instagram-clone-a6a01.firebaseio.com",
  projectId: "instagram-clone-a6a01",
  storageBucket: "instagram-clone-a6a01.appspot.com",
  messagingSenderId: "640773470034",
  appId: "1:640773470034:web:7e8abbb95da15dc538ac8b",
  measurementId: "G-2Z2ZLFVBSM",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
