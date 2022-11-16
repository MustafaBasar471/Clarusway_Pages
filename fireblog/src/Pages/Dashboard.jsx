import React, { useContext } from "react";
import { Layout, BlogCard } from "../Components";
import { BlogContext } from "../context/BlogContext";
const Dashboard = () => {
  const { blogData } = useContext(BlogContext);
  return (
    <Layout>
      <p className="text-center text-3xl font-extrabold mt-10">Dashboard</p>
      <div className="bg-gray-100 rounded mt-10 max-w-screen-xl mx-auto">
        <div className="p-5 flex flex-wrap gap-10 justify-center items-center">
          {blogData.map((items, idx) => (
            <BlogCard key={idx} data={items} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
