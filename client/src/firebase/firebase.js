import firebase from 'firebase/compat/app';  //get the functionality of that firebase library
import 'firebase/compat/firestore';          //get the database
import 'firebase/compat/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyCowTWhC77C4RqYHppfmkqPvuwtI3pyjl4",
    authDomain: "medium-clone-db40e.firebaseapp.com",
    projectId: "medium-clone-db40e",
    storageBucket: "medium-clone-db40e.appspot.com",
    messagingSenderId: "175818012617",
    appId: "1:175818012617:web:c256794a28158099689a18"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const googleAuthProvider  = new firebase.auth.GoogleAuthProvider()
  export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
  