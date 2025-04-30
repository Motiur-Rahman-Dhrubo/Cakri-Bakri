import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { NavLink } from "react-router";

const Myprofile = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
      <div className="py-4">
        <div className=" ">
        <h1 className="text-5xl py-6 font-bold text-center">Welcome!</h1>
          <div className="hero-content flex-col lg:py-6">
            <img
              src={user?.photoURL}
              className="max-w-sm rounded-full shadow-2xl"
            />
            <div>
              <h1 className=" text-3xl font-bold lg:text-5xl">{user?.displayName} </h1>
              <p className="py-6 text-center">{user?.email}</p>
              <div className="flex justify-center items-center">
              <NavLink to='/profileUpdate' className='btn bg-cb-primary text-white px-6 py-2'>
                <button>Update Profile</button>
              </NavLink>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  );
};

export default Myprofile;
