import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAA17qrWyo0A40YdupKbbbZH_1l-jLvbfM",
    authDomain: "chat-8fdb4.firebaseapp.com",
    projectId: "chat-8fdb4",
    storageBucket: "chat-8fdb4.appspot.com",
    messagingSenderId: "476863387597",
    appId: "1:476863387597:web:1e18bdf596c017ee73d684",
    measurementId: "G-L5JS4PLH81"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()