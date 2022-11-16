import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { Layout } from "../Components";
import { BlogContext } from "../context/BlogContext";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { deleteFromDatabase } = useContext(BlogContext);

  const isUser = auth.currentUser.uid === state.user_id;

  // Func
  const handleDelete = () => {
    deleteFromDatabase(state);
    setTimeout(() => {
      navigate("/");
    }, 400);
  };
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto mt-10 rounded overflow-hidden">
        <div className="h-[20rem]">
          <img
            src={state.image}
            alt="details_image"
            className="h-full object-cover w-full"
          />
        </div>
        <div>
          <p className="text-center mt-5 text-3xl font-semibold">
            {state.title}
          </p>
          <p className="my-2 text-lg ">
            Author : <span className="font-semibold">{state.username}</span>
          </p>
          <p className="first-letter:text-4xl italic">{state.textArea}</p>
        </div>
        <div
          className={`mt-10 ${
            isUser ? "flex" : "hidden"
          } justify-center items-center space-x-5`}
        >
          <button className="px-3 py-2 bg-slate-500 hover:bg-slate-300 rounded">
            Update
          </button>
          <button
            className="px-3 py-2 bg-red-600 hover:bg-red-300 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
