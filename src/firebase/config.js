import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAN9o5iBcvOVKn6J2sDLRcjbWARwSmS1W4",
    authDomain: "photography-site-41d0d.firebaseapp.com",
    projectId: "photography-site-41d0d",
    storageBucket: "photography-site-41d0d.appspot.com",
    messagingSenderId: "780020582866",
    appId: "1:780020582866:web:a83404d1946a45ad74e00b"
  };
   
  //init firebase

  firebase.initializeApp(firebaseConfig)

//   //init services
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
 
  export {projectStorage,projectFirestore,timestamp}