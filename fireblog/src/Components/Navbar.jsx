import React from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="w-full bg-gray-500 sm:h-14">
      <div className="max-w-screen-md mx-auto flex flex-col sm:flex-row py-2 sm:py-0 justify-between items-center h-full">
        <p className="text-xl text-white">Firebase Blog App</p>
        <ul className="flex space-x-4">
          {links.map((item, idx) => (
            <Link key={idx} to={item.link}>
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
