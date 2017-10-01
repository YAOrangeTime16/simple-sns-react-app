import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUs7y7tETKYzzio5SG46OvO3443Mc8KZs",
    authDomain: "simple-sns.firebaseapp.com",
    databaseURL: "https://simple-sns.firebaseio.com",
    projectId: "simple-sns",
    storageBucket: "simple-sns.appspot.com",
    messagingSenderId: "808553497351"
  };
  firebase.initializeApp(config);

export default firebase;