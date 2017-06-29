import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyA_kwcyMovaxk37hVLEMXupidbFvfPqTPk",
    authDomain: "task-cards.firebaseapp.com",
    databaseURL: "https://task-cards.firebaseio.com",
    projectId: "task-cards",
    storageBucket: "",
    messagingSenderId: "178185382632"
  };
  firebase.initializeApp(config);

  export default firebase;
