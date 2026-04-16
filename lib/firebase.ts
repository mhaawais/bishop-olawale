import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIMKw_UZRlJ3drAfZip7eEjzni6wHO2sw",
  authDomain: "beyond-reach-site.firebaseapp.com",
  projectId: "beyond-reach-site",
  storageBucket: "beyond-reach-site.firebasestorage.app",
  messagingSenderId: "869965526891",
  appId: "1:869965526891:web:7c30fde8be9934651ebe2e",
  measurementId: "G-T9L3TRG42J"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
