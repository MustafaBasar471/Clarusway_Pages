import React, { useContext } from "react";
// Firebase
import { AuthContext } from "../context/AuthContext";
// Other
import { image } from "../asset/index";
import { AiTwotoneStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex">
      <div className="h-screen hidden sm:block lg:w-2/3">
        <img
          src={image}
          alt="pictures"
          className="object-cover h-full w-full md:block hidden"
        />
      </div>
      <div className="h-full mx-auto sm:w-2/3 lg:w-1/3">
        <div className="mt-[8rem] flex flex-col justify-center items-center">
          <div className="flex items-center text-xl">
            <AiTwotoneStar />
            <p className="ml-1">Mustafa Başar</p>
          </div>
          <div className="mt-14 mx-10">
            <h1 className="font-extrabold text-4xl">Login</h1>
            <p className="text-xl mt-3">
              Welcome back! Please enter your details.
            </p>
            <form className="mt-10 space-y-5">
              <input
                placeholder="Email"
                className="outline-none w-full px-3 py-4 border-b-2 focus:border-gray-400 duration-300 placeholder:text-xl placeholder:text-gray-400"
                required
              />
              <input
                placeholder="Password"
                className="outline-none w-full px-3 py-4 border-b-2 focus:border-gray-400 duration-300 placeholder:text-xl placeholder:text-gray-400"
                required
                type="password"
              />
              <button
                type="submit"
                className="bg-black w-full py-4 text-white text-lg rounded-lg"
              >
                Log in
              </button>
            </form>
            <p className="my-5 text-center text-gray-500">or</p>
            <div className="flex items-center justify-center w-full border py-4 rounded-lg cursor-pointer">
              <FcGoogle className="text-xl mr-1" />
              Log in with Google
            </div>
            <p className="mt-16 text-center text-gray-600">
              Don't have an account?
              <Link to="/auth/register">
                <span className="underline ml-1 text-blue-500 cursor-pointer">
                  Sign up for free
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
