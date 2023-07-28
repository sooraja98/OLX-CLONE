import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz687i-FTAOixVsvpKAlELCqqZehM0Vm4",
  authDomain: "olxe-758d9.firebaseapp.com",
  projectId: "olxe-758d9",
  storageBucket: "olxe-758d9.appspot.com",
  messagingSenderId: "629404794867",
  appId: "1:629404794867:web:0cc759eac5273b400fdc86",
  measurementId: "G-0EHWQGPY1P",
};

export default firebase.initializeApp(firebaseConfig);
const firebaseApp= firebase.initializeApp(firebaseConfig)
export const auth=getAuth(firebaseApp)
export const db=getFirestore(firebaseApp)