import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../component/SharedComponent/Navbar";
import Footer from "../../component/SharedComponent/Footer";

const MainLayout = () => {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <main className="bg-[#EEF5FF] min-h-[calc(100vh-337px)]">
      <Outlet></Outlet>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
};

export default MainLayout;
