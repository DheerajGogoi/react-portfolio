import React from 'react';
import firebase from "firebase";

var firebaseConfig = {
  apiKey: YOUR API KEY,
  authDomain: YOUR AUTH DOMAIN,
  databaseURL: DATABASE URL,
  projectId: YOUR PROJECT ID,
  storageBucket: YOUR STORAGE BUCKET,
  messagingSenderId: SENDER ID,
  appId: YOUR APP ID
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
