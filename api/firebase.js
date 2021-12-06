
import firebase from 'firebase'

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
// import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAq_xhVY8piz8m6CXOQRBHNN5UUTHyDaXE",
    authDomain: "share-2ef37.firebaseapp.com",
    databaseURL: "https://share-2ef37-default-rtdb.firebaseio.com",
    projectId: "share-2ef37",
    storageBucket: "share-2ef37.appspot.com",
    messagingSenderId: "1004394721330",
    appId: "1:1004394721330:web:75c8b0a43fc696a87e0c2b",
    measurementId: "G-9ZMNDHB8WS"
  };


firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();