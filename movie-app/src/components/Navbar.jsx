import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ userData = false }) => {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/${item}`);
  };
  return (
    <div className="bg-[#272727] py-3">
      <div className="text-white max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-4xl">Movie App</div>
          <div className={`flex gap-4 ${userData && "hidden"}`}>
            {["login", "register"].map((item, idx) => (
              <button
                key={idx}
                className="bg-slate-200 text-black py-1 px-5 rounded hover:bg-slate-400 duration-300 capitalize"
                onClick={() => handleClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={`${userData ? "block" : "hidden"} text-xl`}>
            Hoş geldiniz
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
