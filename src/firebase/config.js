import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJtHZhCpjw2makXm26PddrSZfie_IVuDk",
  authDomain: "game-recharge-app.firebaseapp.com",
  projectId: "game-recharge-app",
  storageBucket: "game-recharge-app.firebasestorage.app",
  messagingSenderId: "891201362263",
  appId: "1:891201362263:web:8d2c98a35da0bbd96e4612",
  measurementId: "G-DX8ESK6LXY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
