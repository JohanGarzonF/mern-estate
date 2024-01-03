// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4ce47.firebaseapp.com",
  projectId: "mern-estate-4ce47",
  storageBucket: "mern-estate-4ce47.appspot.com",
  messagingSenderId: "531614479500",
  appId: "1:531614479500:web:b210c3f5aeacff736b37a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);