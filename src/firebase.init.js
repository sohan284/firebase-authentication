// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs_3_L6hcDptceRsP_BxxOHXnbFiQFI9o",
  authDomain: "simple-firebase-authenti-16d25.firebaseapp.com",
  projectId: "simple-firebase-authenti-16d25",
  storageBucket: "simple-firebase-authenti-16d25.appspot.com",
  messagingSenderId: "96748839506",
  appId: "1:96748839506:web:3ed5b184e2cb25795c758b",
  measurementId: "G-MQ9LV35FFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;