import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "movie-app-1759f.firebaseapp.com",
  projectId: "movie-app-1759f",
  storageBucket: "movie-app-1759f.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (err) {
    toast.error(err.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    toast.error(err.message);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (err) {
    toast.error(err.message);
  }
};

export default app;
