import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink } from "react-router";

const Myprofile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
      <div className="w-11/12 mx-auto">
      <div className="hero-content flex gap-10 items-center justify-start lg:py-6">
        <img
          src={user?.photoURL}
          className="max-w-sm rounded-full w-full aspect-[1/1] object-cover object-center shadow-2xl border-4 border-[#176B87]"
        />
        <div>
          <h1 className=" text-3xl font-bold lg:text-5xl">User Name: {user?.displayName} </h1>
          <p className="py-6">User Email: {user?.email}</p>
          <div className="flex items-center">
            <NavLink to='/profileUpdate' className='btn bg-cb-primary text-white px-6 py-2'>
              <button>Update Profile</button>
            </NavLink>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Myprofile;
