import React from 'react';
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBWEc1LWYUCLLGj4wLZi5N0OTnre-agTXg",
  authDomain: "course-upload-30c72.firebaseapp.com",
  databaseURL: "https://course-upload-30c72-default-rtdb.firebaseio.com",
  projectId: "course-upload-30c72",
  storageBucket: "course-upload-30c72.appspot.com",
  messagingSenderId: "394054435611",
  appId: "1:394054435611:web:cd8c63b006cd7015aec9be"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();