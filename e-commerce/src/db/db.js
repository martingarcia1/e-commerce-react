// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDxFJLCYzdi0lw9L_NAFPe3KwC7nQUYDE",
  authDomain: "e-commerce-avanzar.firebaseapp.com",
  projectId: "e-commerce-avanzar",
  storageBucket: "e-commerce-avanzar.firebasestorage.app",
  messagingSenderId: "52509461827",
  appId: "1:52509461827:web:b322abae1a833eafedb3f6",
  measurementId: "G-9DPBZVW62B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
export default db;