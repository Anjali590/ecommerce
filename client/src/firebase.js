import firebase from "firebase/app";
import "firebase/auth";




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBlS_Sl1e6MfH3GNTYzQBokI5WWXVpGyjU",
    authDomain: "ecommerce-ad307.firebaseapp.com",
    databaseURL: "https://ecommerce-ad307-default-rtdb.firebaseio.com/",
    projectId: "ecommerce-ad307",
    storageBucket: "ecommerce-ad307.appspot.com",
    messagingSenderId: "57056194843",
    appId: "1:57056194843:web:048e8d491ec737489be3be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // export
  // export default firebase;
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


