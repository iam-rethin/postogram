// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//connecting form to firestore
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGF57UNPesIYewpL-NGnz0ua5hwK5xq6U",
  authDomain: "socialmedia-92bd8.firebaseapp.com",
  projectId: "socialmedia-92bd8",
  storageBucket: "socialmedia-92bd8.appspot.com",
  messagingSenderId: "54521774673",
  appId: "1:54521774673:web:5b12c8b32fa2321ac92e70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)