import React from "react";
import { useLocation } from "react-router-dom";
import { BlogForm, Layout } from "../Components";

const UpdatePost = () => {
  const { state } = useLocation();
  return (
    <Layout>
      <div className="max-w-lg sm:mx-auto bg-slate-200 mt-10 mx-5">
        <BlogForm title_="Update Post" state={state} />
      </div>
    </Layout>
  );
};

export default UpdatePost;
