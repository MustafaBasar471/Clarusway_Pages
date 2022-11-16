import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Login, Register } from "../Pages";

const AppRouter = () => {
  const userInfo = false;
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Section */}
        <Route path="/auth/login" element={userInfo ? <Main /> : <Login />} />
        <Route
          path="/auth/register"
          element={userInfo ? <Main /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
