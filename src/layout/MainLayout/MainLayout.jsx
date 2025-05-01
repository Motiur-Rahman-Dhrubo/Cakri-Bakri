import React from "react";
import { Outlet } from "react-router";
import Footer from "../../component/SharedComponent/Footer";
import Navbar from "../../component/SharedComponent/Navbar";

const MainLayout = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-[#175A87] via-[#177C87] to-[#64CCC5] shadow-2xl">
        <Navbar />
      </header>
      <main className="bg-[#EEF5FF] min-h-[calc(100vh-337px)]">
        <Outlet></Outlet>
      </main>
      <footer className="bg-cb-btn ">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
