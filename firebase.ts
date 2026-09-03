import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5cEF712Rrh-Utlo7aeV1sfbkW0vZFkPE",
  authDomain: "queenbee-app-aebf0.firebaseapp.com",
  projectId: "queenbee-app-aebf0",
  storageBucket: "queenbee-app-aebf0.firebasestorage.app",
  messagingSenderId: "35989643483",
  appId: "1:35989643483:web:f2abb2b91a9e2622926cfe"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// මෙන්න මේ විදිහට db එක අනිවාර්යයෙන්ම Export කරලා තියෙන්න ඕනේ!
export { app, db };