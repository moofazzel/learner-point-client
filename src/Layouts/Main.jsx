import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { Nav } from "../Components/Nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default Main;
