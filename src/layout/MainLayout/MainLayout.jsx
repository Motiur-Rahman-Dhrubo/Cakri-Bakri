import React from "react";
import { Outlet } from "react-router";
import Footer from "../../component/SharedComponent/Footer";
import Navbar from "../../component/SharedComponent/Navbar";

const MainLayout = () => {
  return (
    <>
      <header className="bg-cb-primary shadow-sm">
        <Navbar />
      </header>
      <main className="bg-[#EEF5FF] min-h-[calc(100vh-337px)]">
        <Outlet></Outlet>
      </main>
      <footer className="bg-cb-secondary ">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
