import React from "react";
import { Navbar } from "./";

const Header = () => {
  return (
    <div className="header min-w-screen min-h-[50.5rem] max-h-[50.5rem] relative">
      <Navbar />
      <div className="text-white flex justify-center lg:justify-start mt-[15rem] lg:mt-[20rem] max-w-screen-xl lg:mx-auto ">
        <p className="w-[19.488rem] md:w-[29.688rem] lg:w-[36.188rem] text-[32px] font-semibold sm:text-6xl mx-10 lg:mx-0 text-center sm:text-start">
          Fullfilling dreams with strings attached
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-white h-[10rem] w-[20.5rem] md:w-[54rem] lg:w-[79rem] bg-[#790427] mt-[15rem] md:mt-[14rem] lg:mt-[13rem]">
          <div className="">ğaopsfkpasofkoapsf</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
