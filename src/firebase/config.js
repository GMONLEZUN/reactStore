// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv7vKsVX9zdlhreSXHVsSZwhqGX-J5Iwo",
  authDomain: "reactshop-23a1e.firebaseapp.com",
  projectId: "reactshop-23a1e",
  storageBucket: "reactshop-23a1e.appspot.com",
  messagingSenderId: "137671240684",
  appId: "1:137671240684:web:a417ccab8daecea12daec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);