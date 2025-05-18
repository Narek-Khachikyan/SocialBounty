import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCmrhOboe6ZHYW5c9R0b8Hd0MhN90Yndfk",
  authDomain: "soical-bounty.firebaseapp.com",
  projectId: "soical-bounty",
  storageBucket: "soical-bounty.firebasestorage.app",
  messagingSenderId: "40419418635",
  appId: "1:40419418635:web:c7a61cf850020de28bdd0e",
  databaseURL:
    "https://soical-bounty-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
