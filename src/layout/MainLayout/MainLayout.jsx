import React from "react";
import { Outlet } from "react-router";
import Footer from "../../component/SharedComponent/Footer";
import Navbar from "../../component/SharedComponent/Navbar";

const MainLayout = () => {
  return (
    <>
      <header className="sticky top-0 bg-white z-50">
        <Navbar />
      </header>
      <main className="bg-white min-h-[calc(100vh-337px)]">
        <Outlet></Outlet>
      </main>
      <footer className="bg-cb-secondary ">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
