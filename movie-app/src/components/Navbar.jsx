import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { Context } from "../context/AuthProvider";
const Navbar = () => {
  const { userData, setUserData } = useContext(Context);
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/${item}`);
  };

  const handleLogOut = () => {
    logOut();
    setUserData(null);
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
          <div className={`${userData ? "block" : "hidden"}  text-xl`}>
            <span>Welcome, {userData.email.split("@")[0]}</span>
            <button
              className="ml-3 text-lg hover:underline"
              onClick={() => handleLogOut()}
            >
              SignOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
