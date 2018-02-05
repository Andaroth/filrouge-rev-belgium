import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDKLw4yMYRpLOsaSrCtXftgodtQJsgvvrk",
    authDomain: "entendeurs-de-voix.firebaseapp.com",
    databaseURL: "https://entendeurs-de-voix.firebaseio.com",
    projectId: "entendeurs-de-voix",
    storageBucket: "entendeurs-de-voix.appspot.com",
    messagingSenderId: "850697154421"
});

export default app;
