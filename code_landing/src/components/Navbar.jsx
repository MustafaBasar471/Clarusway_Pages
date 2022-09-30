import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

const Menu = ({ active }) => {
  const classList1 = "flex flex-col justify-center items-end mr-[2rem]";
  const classList2 = "hidden";
  return (
    <>
      <ul className={`flex flex-col justify-center items-end mr-[2rem]`}>
        {["Tutorials", "Case studies", "Resources"].map((item, idx) => (
          <li key={idx} className="text-lg">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="ml-[1.4rem] sm:ml-[4rem] mt-[2rem]">
      <div className="flex w-full justify-between items-center">
        <div className="flex">
          <div className="flex items-center">
            <p className="sm:mr-10 p-2 bg-black text-white rounded-full">
              <FaGreaterThan />
            </p>
            <p className="ml-2 font-semibold sm:hidden">macode.</p>
          </div>
          <ul className={`sm:flex hidden justify-center items-end mr-[2rem]`}>
            {["Tutorials", "Case studies", "Resources"].map((item, idx) => (
              <li key={idx} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mr-10 sm:hidden" onClick={() => setMenu(!menu)}>
          <RiMenu3Fill />
        </div>
      </div>
      {menu && <Menu active={menu} />}
    </div>
  );
};

export default Navbar;
