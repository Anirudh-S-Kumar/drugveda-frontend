// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWnzUlv7mHT5rMomxK4r6TrADqxwshy98",
  authDomain: "drugveda-7a7c1.firebaseapp.com",
  projectId: "drugveda-7a7c1",
  storageBucket: "drugveda-7a7c1.appspot.com",
  messagingSenderId: "428133486444",
  appId: "1:428133486444:web:c0deafbb084522449bed49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "CLIENT");
export const auth = getAuth(app);

setPersistence(auth, inMemoryPersistence)
