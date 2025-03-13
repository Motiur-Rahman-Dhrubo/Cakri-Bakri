import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from "/CB-logo.png"
export default function Navbar() {
  const user = false;
  const navLink = <>
  <li><NavLink to={'/'}>Home</NavLink></li>
    {user 
    ? 
    <li><NavLink >LogOut</NavLink></li> 
    : 
    <><li><NavLink to={'login'}>Login</NavLink></li>
      <li><NavLink to={'register'}>Register</NavLink></li></>}
      </>
  return (
    <div className="navbar w-11/12 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost bg-[#176B87] lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLink}
          </ul>
        </div>
        <Link to={'/'} className="w-16 rounded-lg">
          <img src={logo} className='w-full rounded-lg' alt="Chakri_Bakri.logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
    </div>
  )
}
