// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU5nSf2FuVy1Bf_HvFwukPiP_XkUbqaBQ",
  authDomain: "emailpasswordlogin-87a41.firebaseapp.com",
  projectId: "emailpasswordlogin-87a41",
  storageBucket: "emailpasswordlogin-87a41.appspot.com",
  messagingSenderId: "337638236530",
  appId: "1:337638236530:web:69305f292cc3233237bdeb",
  measurementId: "G-3LFEKV8115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
