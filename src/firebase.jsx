import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeD-NRH6Yl-S2acso6hXc-Q6PSkQxsiW4",
  authDomain: "justdoit-301802.firebaseapp.com",
  projectId: "justdoit-301802",
  storageBucket: "justdoit-301802.appspot.com",
  messagingSenderId: "13945479573",
  appId: "1:13945479573:web:2d5d918efe993c56e8169c",
  measurementId: "G-Z0HT043PTX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
