import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "../Components";

const Details = () => {
  const { state } = useLocation();
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
      </div>
    </Layout>
  );
};

export default Details;
