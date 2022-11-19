import { onValue, push, ref, remove, set, update } from "firebase/database";
import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // Form State
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [textArea, setTextArea] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  // BlogData
  const [blogData, setBlogData] = useState([]);

  const handleSubmitForm = (state) => {
    if (state !== undefined) {
      updateBlog(state);
    } else {
      const newPost = {
        user_id: auth.currentUser.uid,
        username: auth.currentUser.displayName,
        title,
        image,
        textArea,
      };
      saveToDatabasePost(newPost);
    }
  };

  const saveToDatabasePost = (newPost) => {
    const postRef = ref(db, "Blog");
    const newPostRef = push(postRef);
    set(newPostRef, {
      ...newPost,
    });
  };

  const updateBlog = (state) => {
    const verifyUser = auth.currentUser.uid === state.user_id;
    if (verifyUser) {
      update(ref(db, "Blog/" + state.id), {
        ...state,
        title,
        image,
        textArea,
      });
      setTextArea("");
      setTitle("");
      setImage("");
    }
  };

  const deleteFromDatabase = (oldPost) => {
    remove(ref(db, "Blog/" + oldPost.id));
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
        deleteFromDatabase,
        setIsUpdate,
        isUpdate,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
