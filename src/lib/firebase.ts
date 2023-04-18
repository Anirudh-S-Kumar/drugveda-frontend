// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth";
import { PUBLIC_API_URL } from '$env/static/public';
import { SECRET_API_KEY } from '$env/static/private';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APP_ID,
  authDomain: AUTH_DOMAIN,
  projectId: "drugveda-7a7c1",
  storageBucket: "drugveda-7a7c1.appspot.com",
  messagingSenderId: "428133486444",
  appId: "1:428133486444:web:c0deafbb084522449bed49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "CLIENT");
export const auth = getAuth(app);

setPersistence(auth, inMemoryPersistence)
