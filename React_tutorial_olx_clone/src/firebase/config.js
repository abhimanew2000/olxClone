import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJKB__G0jsDD6-ayDC9VM5icUCd1bC07U",
    authDomain: "olx-clone-8da10.firebaseapp.com",
    projectId: "olx-clone-8da10",
    storageBucket: "olx-clone-8da10.appspot.com",
    messagingSenderId: "282666803078",
    appId: "1:282666803078:web:c3a6a2b481fd35c43a1607",
    measurementId: "G-621RXL1K6N"
  };
  export default  firebase.initializeApp(firebaseConfig)