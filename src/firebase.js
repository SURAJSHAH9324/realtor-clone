import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7qJPkm01XWqaa5B7ooIwZCAW3MFJ6MDs",
  authDomain: "react-realtor-clone-7a6f1.firebaseapp.com",
  projectId: "react-realtor-clone-7a6f1",
  storageBucket: "react-realtor-clone-7a6f1.appspot.com",
  messagingSenderId: "190686202584",
  appId: "1:190686202584:web:c847c37fa8e262957ce5ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
