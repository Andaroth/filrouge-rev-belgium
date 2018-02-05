import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyD6XMsLSKhZ3Jbf0EtvTbGbPlQJ9doBU6o",
    authDomain: "test-ffc15.firebaseapp.com",
    databaseURL: "https://test-ffc15.firebaseio.com",
    storageBucket: "test-ffc15.appspot.com",
    messagingSenderId: "400068196220"
});

export default app;