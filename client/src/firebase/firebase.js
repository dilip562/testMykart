import firebase from 'firebase';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDU0pFO590UTrgdclXV7Q0oGRBDeRr7icU",
    authDomain: "test-4a489.firebaseapp.com",
    databaseURL: "https://test-4a489.firebaseio.com",
    projectId: "test-4a489",
    storageBucket: "test-4a489.appspot.com",
    messagingSenderId: "80475289948",
    appId: "1:80475289948:web:b00058dcdf2f6ba94c2999",
    measurementId: "G-8P02QYD5RM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  firebase.analytics();

  export  {
    storage, firebase as default
  }