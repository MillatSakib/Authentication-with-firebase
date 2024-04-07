import React from "react";
import Nav from "./Navigation/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const AppBody = () => {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default AppBody;
