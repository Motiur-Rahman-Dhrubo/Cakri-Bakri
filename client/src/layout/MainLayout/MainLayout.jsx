import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../component/SharedComponent/Navbar";
import Footer from "../../component/SharedComponent/Footer";

const MainLayout = () => {
  return (
    <>
    <header>

    </header>
    <div className="bg-[#EEF5FF]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>

    <footer>
      <Footer />
    </footer>
    </>
  );
};

export default MainLayout;
