import React from "react";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[20rem] h-[22rem] bg-gray-300">
      <div
        className="object-cover cursor-pointer"
        onClick={() => navigate(`/post/${data.id}`, { state: data })}
      >
        <img src={data.image} alt="post_image" />
      </div>
      <div className="flex flex-col justify-center items-center mt-1 space-y-2">
        <p className="text-xl text-center">{data.title}</p>
        <p>
          {data.textArea.length > 30
            ? `${data.textArea.slice(0, 30)}...`
            : data.textArea}
        </p>
        <div className="flex space-x-5">
          <AiOutlineLike className="text-xl cursor-pointer hover:text-gray-600" />
          <AiOutlineComment className="text-xl cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
