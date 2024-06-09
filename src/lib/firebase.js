// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA4aPcV4Sx6_y_cJs3TIeFy1HsvHT-VJM0",
  authDomain: "reactchatapp-acf77.firebaseapp.com",
  projectId: "reactchatapp-acf77",
  storageBucket: "reactchatapp-acf77.appspot.com",
  messagingSenderId: "432127004407",
  appId: "1:432127004407:web:ced4d0c6cc6ec38be24df2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
