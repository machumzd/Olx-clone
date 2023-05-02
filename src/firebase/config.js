import firebase from 'firebase'
import 'firebase/auth' 
import 'firebase/firestore'
import 'firebase/storage' 

const firebaseConfig = {
    apiKey: "AIzaSyBNxZfUB628u7VUnAhIcPwBJdiTX4ePPhE",
    authDomain: "first-85b4f.firebaseapp.com",
    projectId: "first-85b4f",
    storageBucket: "first-85b4f.appspot.com",
    messagingSenderId: "369655836034",
    appId: "1:369655836034:web:a5e38431a7a4474852b39b",
    measurementId: "G-T108NY4TX8"
  };

export default firebase.initializeApp(firebaseConfig)
