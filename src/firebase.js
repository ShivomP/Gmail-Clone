import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCShWCcN0cjLUg4XE1gBcV4oEimAu3AhwA",
    authDomain: "clone-56ea2.firebaseapp.com",
    projectId: "clone-56ea2",
    storageBucket: "clone-56ea2.appspot.com",
    messagingSenderId: "627031250327",
    appId: "1:627031250327:web:59db2d00e35899ff4fa0d2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}
