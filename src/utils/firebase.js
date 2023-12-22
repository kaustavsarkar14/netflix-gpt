// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC19uDOXFFmgg9WMMd3qMMgDdeG66nOBwM",
  authDomain: "netflix-gpt-a7c78.firebaseapp.com",
  projectId: "netflix-gpt-a7c78",
  storageBucket: "netflix-gpt-a7c78.appspot.com",
  messagingSenderId: "362549280890",
  appId: "1:362549280890:web:175c32cea5eb53590ffbc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()