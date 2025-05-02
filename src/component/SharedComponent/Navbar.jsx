import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signed out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong!",
        });
      });
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "All Jobs", path: "/all-jobs" },
    { label: "About Us", path: "/about-us" },
  ];

  const navLinks = navItems.map(({ label, path }) => (
    <li key={path}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `relative px-1 py-1 text-base transition-all duration-300
          hover:bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none
          after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#176B87]
          after:transition-all after:duration-300
          ${isActive
            ? "after:w-full"
            : "text-[#176B87] after:w-0 hover:after:w-full"}`
        }
      >
        {label}
      </NavLink>
    </li>
  ));

  return (
    <div className="navbar px-0 w-11/12 mx-auto font-bold text-[#176B87]">
      {/* Logo */}
      <div className="navbar-start">
        <Link to="/" className="text-lg md:text-2xl font-bold">
          Chakri Bakri
        </Link>
      </div>

      {/* Center Navigation - Always visible on desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">{navLinks}</ul>
      </div>

      {/* Mobile Dropdown - Shared for all users */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          {user ? (
            <>
              <img
                src={user.photoURL}
                tabIndex={0}
                className="w-10 h-10 rounded-full border-2 border-[#176B87] cursor-pointer object-cover object-center"
                alt="profile"
              />
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] mt-3 menu p-3 shadow bg-base-100 rounded-box w-60 text-xm font-medium text-[#176B87] border"
              >
                <li className="text-center font-semibold text-[#176B87]">
                  {user.displayName}
                </li>
                <div className="divider my-1"></div>
                <li className="hover:bg-[#176B87] hover:text-white">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:bg-[#176B87] hover:text-white">
                  <Link to="/all-jobs">All Jobs</Link>
                </li>
                <li className="hover:bg-[#176B87] hover:text-white">
                  <Link to="/about-us">About Us</Link>
                </li>
                <div className="divider my-1"></div>
                <li className="hover:bg-[#176B87] hover:text-white">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="hover:bg-[#176B87] hover:text-white">
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <label
                tabIndex={0}
                className="btn text-[#176B87] border-[#176B87] bg-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] mt-3 menu p-3 shadow bg-base-100 rounded-box w-60 text-xm font-medium text-[#176B87] border"
              >
                <li className="hover:bg-[#176B87] hover:text-white">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:bg-[#176B87] hover:text-white">
                  <Link to="/all-jobs">All Jobs</Link>
                </li>
                <li className="hover:bg-[#176B87] hover:text-white">
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="hover:bg-[#176B87] hover:text-white">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>

      {/* Desktop Right - Profile or Login Button */}
      <div className="navbar-end hidden lg:flex gap-x-4">
        {user ? (
          <div className="dropdown dropdown-bottom dropdown-end">
            <img
              src={user.photoURL}
              tabIndex={0}
              className="w-10 h-10 rounded-full border-2 border-[#176B87] cursor-pointer object-cover object-center"
              alt="profile"
            />
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] mt-3 menu p-3 shadow bg-base-100 rounded-box w-60 text-base border"
            >
              <li className="px-3 font-semibold text-[#176B87]">
                Name: {user.displayName}
              </li>
              <div className="divider my-1"></div>
              <li className="hover:bg-[#176B87] hover:text-white">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="hover:bg-[#176B87] hover:text-white">
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline border-2 border-[#176B87] hover:bg-[#176B87] hover:text-white text-base">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
