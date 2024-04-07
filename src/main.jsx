import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider.jsx";
import Home from "./Home/Home.jsx";
import Nav from "./Navigation/Nav.jsx";
import Login from "./Authentication/Login/Login.jsx";
import Register from "./Authentication/Register/Register.jsx";
import AppBody from "./AppBody.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppBody></AppBody>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
