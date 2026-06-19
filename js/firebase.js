// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACUAYAfglk9tMu3RpbBbEgQSjTC8eLXYU",
  authDomain: "flora-5754a.firebaseapp.com",
  projectId: "flora-5754a",
  storageBucket: "flora-5754a.firebasestorage.app",
  messagingSenderId: "819737384786",
  appId: "1:819737384786:web:0e7152e6065e13c9c58c8b",
  measurementId: "G-CYJD1Y9V2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);