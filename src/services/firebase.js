import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBAYPsCnQCcOdQ8WtDrx4BRDVe4nkRoixo",
    authDomain: "chaton-c5a7e.firebaseapp.com",
    projectId: "chaton-c5a7e",
    storageBucket: "chaton-c5a7e.appspot.com",
    messagingSenderId: "799149299407",
    appId: "1:799149299407:web:3899a325c3f39355ae49ba"
 
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };