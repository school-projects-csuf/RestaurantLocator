import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDY9NjlTTVK_Qq15anafyurTLvtfUOW-B8",
    authDomain: "anti-edge.firebaseapp.com",
    databaseURL: "https://anti-edge.firebaseio.com",
    projectId: "anti-edge",
    storageBucket: "anti-edge.appspot.com",
    messagingSenderId: "1068698934937",
    appId: "1:1068698934937:web:85b7124cd8f64d656ee208",
    measurementId: "G-G3EV4M5CMX"
  };

  const fire = firebase.initializeApp(config);
  export default fire;