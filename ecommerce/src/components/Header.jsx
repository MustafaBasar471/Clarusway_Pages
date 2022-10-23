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
        <div className="text-white min-h-[8rem] w-[20.5rem] md:w-[54rem] lg:w-[79rem] bg-[#790427] mt-[15.8rem] md:mt-[12rem] lg:mt-[11rem] rounded-xl">
          <div className="flex flex-col justify-center items-center mt-5 md:w-[38.5rem] mx-auto">
            <p className="text-[21px] sm:text-[46px] font-semibold uppercase">
              Free guitar lessons!
            </p>
            <p className="text-[10px] sm:text-[24px] text-center font-semibold">
              Purchase any guitar over $499 and recieve a one-hour guitar
              lessons free
            </p>
            <button className="text-[11px] sm:text-base mt-3 mb-5 bg-[#FF753A] px-5 py-2 rounded-3xl uppercase">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
