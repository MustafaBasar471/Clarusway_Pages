import { push, ref, set } from "firebase/database";
import React, { createContext, useState } from "react";
import { auth, db } from "../config/firebase";
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleSubmitForm = () => {
    const newPost = {
      user_id: auth.currentUser.uid,
      title,
      desc,
      textArea,
      like: [],
      comment: [],
    };
    saveToDatabasePost(newPost);
  };

  const saveToDatabasePost = (newPost) => {
    const postRef = ref(db, "Blog");
    const newPostRef = push(postRef);
    set(newPostRef, {
      ...newPost,
    });
  };

  return (
    <BlogContext.Provider
      value={{
        setTitle,
        title,
        setDesc,
        desc,
        setTextArea,
        textArea,
        handleSubmitForm,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
