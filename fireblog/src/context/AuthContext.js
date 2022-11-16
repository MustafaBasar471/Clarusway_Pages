import React, { createContext, useState } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
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
        }).then(() => window.location.replace("/auth/login"))
      );
    } catch (err) {
      console.log(err);
    }
  };

  const login = () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then((res) =>
        setUserInfo(res.user)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    try {
      signOut(auth);
      setUserInfo(null);
    } catch (err) {
      console.log(err);
    }
  };
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
