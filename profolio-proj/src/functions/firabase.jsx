// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsqkOmw1eSSYeE_0eQ18Kt0G2S2dwna98",
  authDomain: "portfolio-db-e22d5.firebaseapp.com",
  projectId: "portfolio-db-e22d5",
  storageBucket: "portfolio-db-e22d5.firebasestorage.app",
  messagingSenderId: "61172952193",
  appId: "1:61172952193:web:3ac221ae44c759a8373180",
  measurementId: "G-ZK12KL1MYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);