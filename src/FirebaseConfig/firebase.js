import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBS61E_B54_rsORBJldANCrKN2UA_rks-k",
    authDomain: "clone-1-a6e45.firebaseapp.com",
    databaseURL: "https://clone-1-a6e45.firebaseio.com",
    projectId: "clone-1-a6e45",
    storageBucket: "clone-1-a6e45.appspot.com",
    messagingSenderId: "936200086510",
    appId: "1:936200086510:web:3348050bbd0081c431e4ff",
    measurementId: "G-16WR0MFRR0"
})

const db= firebase.firestore();
const auth = firebase.auth();

export {db,auth}