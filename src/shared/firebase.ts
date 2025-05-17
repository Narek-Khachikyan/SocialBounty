import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmrhOboe6ZHYW5c9R0b8Hd0MhN90Yndfk",
  authDomain: "soical-bounty.firebaseapp.com",
  projectId: "soical-bounty",
  storageBucket: "soical-bounty.firebasestorage.app",
  messagingSenderId: "40419418635",
  appId: "1:40419418635:web:c7a61cf850020de28bdd0e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
