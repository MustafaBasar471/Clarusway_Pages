import React, { useContext } from "react";
// Firebase
import { AuthContext } from "../context/AuthContext";
// Other
import { image } from "../asset/index";
import { AiTwotoneStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, setUserName, setEmail, setPassword } =
    useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  };
  return (
    <div>
      <div className="w-full flex">
        <div className="h-screen hidden sm:block lg:w-2/3">
          <img
            src={image}
            alt="pictures"
            className="object-cover h-full w-full md:block hidden"
          />
        </div>
        <div className="h-full mx-auto sm:w-2/3 lg:w-1/3">
          <div className="mt-[4rem] flex flex-col justify-center items-center">
            <div className="flex items-center text-xl">
              <AiTwotoneStar />
              <p className="ml-1">Mustafa Başar</p>
            </div>
            <div className="mt-14 mx-[3.5rem]">
              <h1 className="font-extrabold text-4xl">Sign Up</h1>
              <p className="text-xl mt-3">Welcome, nice to see you</p>
              <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
                <input
                  placeholder="Username"
                  className="outline-none w-full px-3 py-4 border-b-2 focus:border-gray-400 duration-300 placeholder:text-xl placeholder:text-gray-400"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  placeholder="Email"
                  className="outline-none w-full px-3 py-4 border-b-2 focus:border-gray-400 duration-300 placeholder:text-xl placeholder:text-gray-400"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  placeholder="Password"
                  className="outline-none w-full px-3 py-4 border-b-2 focus:border-gray-400 duration-300 placeholder:text-xl placeholder:text-gray-400"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
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
                Sign up with Google
              </div>
              <p className="mt-12 text-center text-gray-600">
                Do you have an account?
                <Link to="/auth/login">
                  <span className="underline ml-1 text-blue-500 cursor-pointer">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
