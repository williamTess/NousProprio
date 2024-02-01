// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nousproprio.firebaseapp.com",
  projectId: "nousproprio",
  storageBucket: "nousproprio.appspot.com",
  messagingSenderId: "143839459722",
  appId: "1:143839459722:web:7b784555d723d5d383b073",
  measurementId: "G-C0RYJXSHWX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
