import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCftakovh-H13lxYVJ9yxmXx-db8G1Jt70",
  authDomain: "dr2023-mpg.firebaseapp.com",
  projectId: "dr2023-mpg",
  storageBucket: "dr2023-mpg.appspot.com",
  messagingSenderId: "352795814620",
  appId: "1:352795814620:web:f4922f8b5d17c8472da219"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase;