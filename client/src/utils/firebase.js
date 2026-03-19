
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-cb36e.firebaseapp.com",
  projectId: "authexamnotes-cb36e",
  storageBucket: "authexamnotes-cb36e.firebasestorage.app",
  messagingSenderId: "77538143070",
  appId: "1:77538143070:web:671c27e4abe86fd7503dcf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider}