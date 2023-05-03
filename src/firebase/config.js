import firebase from 'firebase'
import 'firebase/auth' 
import 'firebase/firestore'
import 'firebase/storage' 

const firebaseConfig = {
  apiKey: "AIzaSyCpY6YmpPnpFeOLANCaKewkxCH0Uh56dWc",
  authDomain: "olx-clone-bbb03.firebaseapp.com",
  projectId: "olx-clone-bbb03",
  storageBucket: "olx-clone-bbb03.appspot.com",
  messagingSenderId: "841508462135",
  appId: "1:841508462135:web:ed060c2a2447f7869069b2",
  measurementId: "G-392DXEZ4CJ"
};

export default firebase.initializeApp(firebaseConfig)
