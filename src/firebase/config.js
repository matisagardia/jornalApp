// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8g-yqphAbFipWWXgmZCIQdBc5zJtghA0",
  authDomain: "journalapp-e125c.firebaseapp.com",
  projectId: "journalapp-e125c",
  storageBucket: "journalapp-e125c.appspot.com",
  messagingSenderId: "1009144184645",
  appId: "1:1009144184645:web:887fadb34b249f6196082c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);