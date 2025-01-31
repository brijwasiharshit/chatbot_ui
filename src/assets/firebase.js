// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8D22cVjowdXBIpSrquji4Zz4xoe_J0Wg",
  authDomain: "beyond-chats.firebaseapp.com",
  projectId: "beyond-chats",
  storageBucket: "beyond-chats.firebasestorage.app",
  messagingSenderId: "1074031385582",
  appId: "1:1074031385582:web:b292f6e93abf32c0234cff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore(app);
export default app;