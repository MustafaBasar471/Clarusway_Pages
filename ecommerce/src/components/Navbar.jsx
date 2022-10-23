import React, { useState, useEffect } from "react";
import { Icon } from "../icons";

const Menu = () => {
  return (
    <div className="absolute right-[2rem] mt-1 bg-[#040E17] p-7  rounded shadow-lg block lg:hidden">
      <ul className="space-y-4">
        {["Guitars", "Accessories", "Storage", "Lessons", "Repairs"].map(
          (item, idx) => (
            <li
              className="cursor-pointer hover:text-gray-400 duration-300 text-white"
              key={idx}
            >
              {item}
            </li>
          )
        )}
      </ul>
      <div className="flex space-x-5 mt-3">
        {["shop", "profile"].map((item, idx) => (
          <div key={idx} className="cursor-pointer">
            <Icon name={item} size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1400) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [screenSize]);

  return (
    <>
      <div className="max-w-screen-xl mx-10 lg:mx-auto pt-10 text-white flex items-center justify-between lg:justify-start">
        <div className="flex items-center mr-[5rem]">
          <span className="mr-2">
            <Icon name="logo" />
          </span>
          <span className="font-semibold text-3xl">Central</span>
          <span className="text-3xl">Music</span>
        </div>
        <div className="hidden lg:flex justify-between items-center w-full">
          <div className="flex items-center">
            <div>
              <ul className="flex space-x-10 text-xl">
                {[
                  "Guitars",
                  "Accessories",
                  "Storage",
                  "Lessons",
                  "Repairs",
                ].map((item, idx) => (
                  <li
                    className="cursor-pointer hover:text-gray-400 duration-300"
                    key={idx}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {["shop", "profile"].map((item, idx) => (
              <div key={idx} className="cursor-pointer">
                <Icon name={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden" onClick={() => setIsActive(!isActive)}>
          <Icon name="menu" />
        </div>
      </div>
      {isActive && <Menu />}
    </>
  );
};

export default Navbar;
