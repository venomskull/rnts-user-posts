import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCfST7ikFCbMfUmF5RwjnS1FIbdkYxhzYU",
    authDomain: "rnts-user-posts.firebaseapp.com",
    projectId: "rnts-user-posts",
    storageBucket: "rnts-user-posts.appspot.com",
    messagingSenderId: "379590348245",
    appId: "1:379590348245:web:53d17414e26814dd99c15c"
  };


  // firebase.initializeApp(firebaseConfig);


  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};


