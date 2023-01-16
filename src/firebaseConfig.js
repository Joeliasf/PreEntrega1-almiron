
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC79wHzK1LWik8mVvXDyC35sSYEsUw39Jg",
  authDomain: "proyecto-final-react-almiron.firebaseapp.com",
  projectId: "proyecto-final-react-almiron",
  storageBucket: "proyecto-final-react-almiron.appspot.com",
  messagingSenderId: "1086638883575",
  appId: "1:1086638883575:web:b7ead878eee1c526e749f2"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)