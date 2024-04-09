import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Login from "./Authentication/Login/Login.jsx";
import Register from "./Authentication/Register/Register.jsx";
import AppBody from "./AppBody.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes/PrivateRoutes.jsx";
import About from "./About/About.jsx";
import PrivateRoutesAuth from "./Routes/PrivateRoutes/PrivateRoutesAuth.jsx";
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
          element: (
            <PrivateRoutesAuth>
              <Login></Login>
            </PrivateRoutesAuth>
          ),
        },
        {
          path: "/register",
          element: (
            <PrivateRoutesAuth>
              <Register></Register>
            </PrivateRoutesAuth>
          ),
        },
        {
          path: "/about",
          element: (
            <PrivateRoutes>
              <About></About>
            </PrivateRoutes>
          ),
        },
      ],
    },
  ]);
  return router;
};

export default PublicRoutes;
