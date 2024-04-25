// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOGTPhBrDkKizpEifa2vaQ_dQ9g-EhN5E",
  authDomain: "netflixgpt-e60bc.firebaseapp.com",
  projectId: "netflixgpt-e60bc",
  storageBucket: "netflixgpt-e60bc.appspot.com",
  messagingSenderId: "904137981331",
  appId: "1:904137981331:web:e4b47acd4c95c8a6dc3c66",
  measurementId: "G-PDDVXR680W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
