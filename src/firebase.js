import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDIorJfwUImb3-bqkL0FDC49uXgsRJmVgc",
    authDomain: "react-exam-43188.firebaseapp.com",
    databaseURL: "https://react-exam-43188.firebaseio.com",
    projectId: "react-exam-43188",
    storageBucket: "gs://react-exam-43188.appspot.com/",
    messagingSenderId: "297943420171"
};

firebase.initializeApp(config);

export default firebase;