import { FirebaseApp, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics"

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
const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const fireStore = getFirestore(app);
export const storage = getStorage(app);

export const database = getDatabase(app);
export const analytics = getAnalytics(app);