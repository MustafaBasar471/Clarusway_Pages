import React from "react";
import { BlogForm, Layout } from "../Components";

const CreateBlog = () => {
  return (
    <Layout>
      <div className="max-w-lg sm:mx-auto bg-slate-200 mt-10 mx-5">
        <BlogForm />
      </div>
    </Layout>
  );
};

export default CreateBlog;
