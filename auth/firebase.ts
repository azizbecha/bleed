// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByAFn178cv36q8X_RL4pIz05tm0G3e_MU",
  authDomain: "bleed-website.firebaseapp.com",
  projectId: "bleed-website",
  storageBucket: "bleed-website.appspot.com",
  messagingSenderId: "175614370084",
  appId: "1:175614370084:web:7f142d9c460b3e4b5cd3b1",
  measurementId: "G-642LH41EQC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);