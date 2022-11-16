import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register, CreateBlog } from "../Pages";
import { AuthContext } from "../context/AuthContext";

const AppRouter = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Section */}
        <Route path="/" element={userInfo ? <Dashboard /> : <Login />} />
        <Route
          path="/create/post"
          element={userInfo ? <CreateBlog /> : <Login />}
        />
        {/* Auth Section */}
        <Route
          path="/auth/login"
          element={userInfo ? <Dashboard /> : <Login />}
        />
        <Route
          path="/auth/register"
          element={userInfo ? <Dashboard /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
