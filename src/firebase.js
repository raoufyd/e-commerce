import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDnMy6teV4syn5n6bStrQOYdWWAuYqEc2c",
  authDomain: "clone-7786d.firebaseapp.com",
  projectId: "clone-7786d",
  storageBucket: "clone-7786d.appspot.com",
  messagingSenderId: "521603190474",
  appId: "1:521603190474:web:5a7b537fa22f0eb1a5ae33",
  measurementId: "G-1HBJ68MZC5",
});

const auth = firebase.auth();

export { auth };
