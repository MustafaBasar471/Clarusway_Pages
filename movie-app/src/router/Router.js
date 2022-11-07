import React, { useContext } from "react";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Layout from "../pages/Layout";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Context } from "../context/AuthProvider";

const Router = () => {
  const { userData } = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={userData ? <Layout children={<Main />} /> : <Login />}
        />
        <Route
          path="/login"
          element={userData ? <Layout children={<Main />} /> : <Login />}
        />
        <Route
          path="/register"
          element={userData ? <Layout children={<Main />} /> : <Register />}
        />
        <Route
          path="/details"
          element={userData ? <Layout children={<MovieDetail />} /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
