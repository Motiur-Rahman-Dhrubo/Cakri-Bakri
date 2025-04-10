import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "/CB-logo.png";
export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Signed Out");
      })
      .catch((error) => console.log(error));
  };

  const navLink = (
    <>
      <li>
        <NavLink className="max-sm:text-xl" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="max-sm:text-xl" to={"/all-jobs"}>
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink className="max-sm:text-xl" to={"/about-us"}>
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar px-0 w-11/12 mx-auto text-white">
      {/* left side logo  */}
      <div className="navbar-start">
        <Link
          to={"/"}
          className={`w-12 md:w-16 rounded-lg ${
            location.pathname.includes("dashboard")
              ? "flex items-center gap-1 md:gap-3"
              : ""
          }`}
        >
          <img
            src={logo}
            className="w-full rounded-lg"
            alt="Chakri_Bakri.logo"
          />
          {location.pathname.includes("dashboard") && (
            <h2 className="text-lg md:text-2xl font-bold">Dashboard</h2>
          )}
        </Link>
      </div>

      {/* middle links for lg device */}
      {!location.pathname.includes("dashboard") && (
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
      )}

      <div className="navbar-end lg:hidden ">
        <div className="dropdown relative">
          <div
            tabIndex={0}
            role="button"
            className={`${
              location.pathname.includes("dashboard") ? "hidden" : ""
            } btn bg-cb-white text-cb-secondary lg:hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* navbar in mobile device main layout */}
          <ul
            tabIndex={0}
            className={`${
              location.pathname.includes("dashboard") ? "hidden" : ""
            } menu menu-sm absolute right-0 dropdown-content bg-cb-primary text-cb-white border border-cb-card rounded-box z-1 mt-3 w-52 p-2 shadow uppercase`}
          >
            {navLink}
            {user ? (
              <>
                <li>
                  <Link
                    className="my-3 btn bg-cb-white text-base text-cb-primary"
                    to={"/dashboard/become-employer"}
                  >
                    Become Employer
                  </Link>
                </li>
                <div className="divider h-[1px] bg-white/70"></div>
                <img
                  className="w-14 h-14 mx-auto border-2 border-cb-card rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                <h1 className="my-3 text-center text-white/70 text-xl md:text-2xl">
                  {user.displayName}
                </h1>
                <div className="text-center  py-2 flex flex-col gap-2">
                  <Link className="hover:underline uppercase" to="/dashboard">
                    Dashboard
                  </Link>
                  <button
                    className="hover:underline uppercase"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <li>
                  <NavLink className="max-sm:text-xl" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {/* dashboard right side link */}
          {location.pathname.includes("dashboard") && (
            <ul className="flex items-center gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all-jobs">All Jobs</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* right links for lg device */}
      <div className="navbar-end hidden lg:flex gap-x-4">
        {user ? (
          <>
            <Link
              className="btn border border-transparent text-cb-primary bg-cb-white hover:bg-transparent hover:text-cb-white hover:border-cb-white"
              to="/dashboard/become-employer"
            >
              Become Employer
            </Link>
            <div
              className={`relative dropdown dropdown-hover ${
                location.pathname.includes("dashboard")
                  ? "flex items-center gap-3"
                  : ""
              }`}
            >
              
              {!location.pathname.includes("dashboard") && (
                <>
                <img
                className={`w-10 h-10 rounded-full border-2 border-cb-white`}
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt={user?.displayName}
              />
                <ul
                  tabIndex={0}
                  className="absolute w-[260px] top-11 right-0 text-center space-y-3 dropdown-content menu bg-cb-white text-cb-primary rounded-box z-[1] px-3 py-4 shadow"
                >
                  <h1 className="text-xl font-bold text-cb-secondary/90">
                    {user ? user?.displayName : "Guest"}
                  </h1>
                  <div className="divider my-0"></div>
                  <Link
                    className="text-md font-semibold hover:underline"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                  <button
                    className="text-md font-semibold cursor-pointer hover:underline"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </ul>
                </>
              )}
              {location.pathname.includes("dashboard") && (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/all-jobs">All Jobs</Link>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-outline mr-1">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
