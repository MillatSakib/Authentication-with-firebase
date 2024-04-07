import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Login from "./Authentication/Login/Login.jsx";
import Register from "./Authentication/Register/Register.jsx";
import AppBody from "./AppBody.jsx";
const PublicRoutes = () => {
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
  return router;
};

export default PublicRoutes;
