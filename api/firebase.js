
import firebase from 'firebase'

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
// import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBeXy9p6CMhFozS8yAJ3GCfy5PBqqScbR4",
  authDomain: "movie24.firebaseapp.com",
  projectId: "movie24",
  storageBucket: "movie24.appspot.com",
  messagingSenderId: "369875114172",
  appId: "1:369875114172:web:67ea8f86d777b2838158b9"
};


firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();