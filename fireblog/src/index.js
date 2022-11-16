import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BlogProvider>
      <App />
    </BlogProvider>
  </AuthProvider>
);
