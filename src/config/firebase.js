import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyAv7VtVQa8GjntrI6z3S9Dljx3OMTzG20U",
  authDomain: "tiktok----jornadadev.firebaseapp.com",
  projectId: "tiktok----jornadadev",
  storageBucket: "tiktok----jornadadev.appspot.com",
  messagingSenderId: "608331194249",
  appId: "1:608331194249:web:1aa682520c9e52f20acb58"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;