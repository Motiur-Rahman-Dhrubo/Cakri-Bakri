import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../component/SharedComponent/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h1>abcd</h1>
    </div>
  );
};

export default MainLayout;
