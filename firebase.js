import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEJnqS_T3sBORoOBlulZN2MX_etGp0Yk4",
  authDomain: "florabeauty.firebaseapp.com",
  projectId: "florabeauty",
  storageBucket: "florabeauty.firebasestorage.app",
  messagingSenderId: "473871587127",
  appId: "1:473871587127:web:505e6b63e235087e222cb2",
  measurementId: "G-KXVT1HCKD2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);