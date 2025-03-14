import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "/CB-logo.png";
export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
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
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-jobs"}>All Jobs</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-0 w-11/12 mx-auto text-white">
      {/* left side logo  */}
      <div className="navbar-start">
        <Link to={"/"} className="w-16 rounded-lg">
          <img
            src={logo}
            className="w-full rounded-lg"
            alt="Chakri_Bakri.logo"
          />
        </Link>
      </div>

      {/* middle links for lg device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>

      <div className="navbar-end lg:hidden ">
        <div className="dropdown relative">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-cb-white text-cb-secondary lg:hidden"
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

          {/* navbar in mobile device */}
          <ul
            tabIndex={0}
            className="menu menu-sm absolute right-0 dropdown-content bg-cb-primary text-cb-white border border-cb-card rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
            {user ? (
              <>
                <h1 className="mr-2 text-2xl">
                  <i>Welcome Back, {user.displayName}!!</i>
                </h1>
                <div className="dropdown dropdown-hover">
                  <img
                    className="w-10 h-10 rounded-full mr-5"
                    src={user.photoURL}
                    alt=""
                  />
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-cb-primary text-cb-white rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <button className="btn btn-outline" onClick={handleSignOut}>
                      Sign Out
                    </button>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>

              </>
            )}
          </ul>
        </div>
      </div>

      {/* right links for lg device */}
      <div className="navbar-end hidden lg:flex gap-x-4">
        {user ? (
          <>
            <h1 className="mr-2 text-2xl">
              <i>Welcome Back, {user.displayName}!!</i>
            </h1>
            <div className="dropdown dropdown-hover">
              <img
                className="w-10 h-10 rounded-full mr-5"
                src={user.photoURL}
                alt=""
              />
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-cb-primary text-cb-white rounded-box z-[1] w-52 p-2 shadow"
              >
                <button className="btn btn-outline" onClick={handleSignOut}>
                  Sign Out
                </button>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-outline mr-1">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline mr-2">Register</button>
            </Link>
            
          </>
        )}
      </div>
    </div>
  );
}
