import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your Firebase configuration
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

const useTrackVisitors = () => {
  useEffect(() => {
    // Log an event for every visitor
    logEvent(analytics, "page_view", { page_path: window.location.pathname });

    // (Optional) Log unique users if they visit different pages
    logEvent(analytics, "user_engagement");

    console.log("Visitor tracked with Firebase Analytics.");
  }, []);

  return null;
};

export default useTrackVisitors;
