import React from "react";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";

const BlogCard = () => {
  return (
    <div className="genel div w-[20rem] h-[21rem] bg-gray-300">
      <div className="image-div object-cover">
        <img
          src="https://images.pexels.com/photos/3443493/pexels-photo-3443493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="post_image"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-1 space-y-2">
        <p className="text-xl">Post Title</p>
        <p>Post Desc</p>
        <div className="flex space-x-5">
          <AiOutlineLike className="text-xl cursor-pointer hover:text-gray-600" />
          <AiOutlineComment className="text-xl cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
