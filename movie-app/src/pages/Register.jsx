import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { register } from "../auth/firebase";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // React Router Dom
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    if (user) {
      navigate(`/login`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 h-screen">
      <Toaster />
      <div className="bg-slate-300 rounded-lg h-[22rem] p-10">
        <p className="text-xl">Movie App Register Page</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-5 gap-5">
            <input
              type="text"
              placeholder="Enter your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-5 focus:outline-none rounded focus:bg-slate-50"
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 px-5 focus:outline-none rounded focus:bg-slate-50"
            />
          </div>
          <button
            className="uppercase w-full bg-blue-500 hover:bg-blue-300 duration-300 py-2 rounded-lg hover:shadow-lg cursor-pointer mt-4"
            disabled={!email || !password}
          >
            submit
          </button>
        </form>
        <p className="mt-5">
          If you have already an account{" "}
          <Link to="/login">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
