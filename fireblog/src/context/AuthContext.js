import React, { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // useState
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UserInfo
  const [userInfo, setUserInfo] = useState(null);
  // Custom Func
  const register = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(() =>
        updateProfile(auth.currentUser, {
          displayName: userName,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const login = () => {
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    try {
      signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        setPassword,
        setEmail,
        setUserName,
        login,
        userInfo,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
