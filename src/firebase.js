// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 📝 your Firebase config (copy from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBV4JTbrCuJKJEOwX5qzg4sfK8jefl7PeU",
  authDomain: "tianna--rosita.firebaseapp.com",
  projectId: "tianna--rosita",
  storageBucket: "tianna--rosita.firebasestorage.app",
  messagingSenderId: "200362079339",
  appId: "1:200362079339:web:a2fc86fe31b7fd7a122d2e",
  measurementId: "G-J16K36N17R"
};

// ✅ Only start Firebase ONCE
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
