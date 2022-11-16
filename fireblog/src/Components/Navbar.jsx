import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const links = [
    {
      title: "Dashboard",
      link: "/",
    },
    {
      title: "Create Post",
      link: "/create/post",
    },
    {
      title: "Logout",
    },
  ];

  const { logout } = useContext(AuthContext);

  const handleLogOut = (idx) => {
    if (idx === 2) {
      logout();
      window.location.replace("/auth/login");
    }
  };

  return (
    <div className="w-full bg-gray-500 sm:h-14">
      <div className="max-w-screen-lg mx-10 md:mx-auto flex flex-col sm:flex-row py-2 sm:py-0 justify-between items-center h-full">
        <p className="text-xl text-white">Firebase Blog App</p>
        <ul className="flex space-x-4">
          {links.map((item, idx) => (
            <Link key={idx} to={item.link} onClick={() => handleLogOut(idx)}>
              <li className="hover:underline text-white text-lg">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
