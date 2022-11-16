import { onValue, push, ref, set } from "firebase/database";
import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // Form State
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [textArea, setTextArea] = useState("");
  // BlogData
  const [blogData, setBlogData] = useState([]);

  const handleSubmitForm = () => {
    const newPost = {
      user_id: auth.currentUser.uid,
      username: auth.currentUser.displayName,
      title,
      image,
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

  useEffect(() => {
    const postRef = ref(db, "Blog");
    onValue(postRef, (items) => {
      const data = items.val();
      const DataArr = [];
      for (let id in data) {
        DataArr.push({ id, ...data[id] });
      }
      setBlogData(DataArr);
    });
  }, []);

  return (
    <BlogContext.Provider
      value={{
        setTitle,
        title,
        setImage,
        image,
        setTextArea,
        textArea,
        handleSubmitForm,
        blogData,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
