// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgFasNqSNcqOI9mGWeIWxPx5HOs7D1nH8",
  authDomain: "netflix-clone-e82e6.firebaseapp.com",
  projectId: "netflix-clone-e82e6",
  storageBucket: "netflix-clone-e82e6.firebasestorage.app",
  messagingSenderId: "192266785660",
  appId: "1:192266785660:web:ee9789df8d76086dfc0af9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()