import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const BlogForm = () => {
  const { setTitle, setImage, setTextArea, handleSubmitForm } =
    useContext(BlogContext);
  const navigate = useNavigate();

  // Custom Func
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitForm();
    setTimeout(() => {
      navigate("/");
    }, 700);
  };
  return (
    <form
      className="flex flex-col justify-center items-center space-y-4 p-5"
      onSubmit={handleSubmit}
    >
      <p className="text-xl italic underline text-gray-600">Create New Post</p>
      <input
        placeholder="Enter Title"
        className="w-full outline-none px-3 py-4 bg-slate-200 border-b-2 border-gray-300 focus:border-gray-500 duration-300"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Enter IMG URL"
        className="w-full outline-none px-3 py-4 bg-slate-200 border-b-2 border-gray-300 focus:border-gray-500 duration-300"
        required
        onChange={(e) => setImage(e.target.value)}
      />
      <textarea
        placeholder="This are all yours"
        className="w-full outline-none px-3 py-4 h-[20rem] resize-none bg-slate-200 border-b-2 border-gray-300 focus:border-gray-500 duration-300"
        required
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="w-full bg-black text-white rounded py-4">
        Publish Post
      </button>
    </form>
  );
};

export default BlogForm;
