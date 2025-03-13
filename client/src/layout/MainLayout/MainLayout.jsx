import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../component/SharedComponent/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#EEF5FF]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
