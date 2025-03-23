import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ProfileUpdate = () => {
    const{user} = useContext(AuthContext)
    console.log(user)
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Register Form Section */}
      <div className="w-full  flex flex-col justify-center items-center max-sm:px-3 max-sm:py-5 md:p-8">
        <div className="bg-cb-card p-5 lg:p-10 text-center rounded-lg">
          <h2 className="text-4xl text-cb-primary font-bold mb-3">
            Update Your Profile
          </h2>
          <form  className="w-full max-w-lg space-y-6">
            <input
              type="text"
              name="userName"
              placeholder={user?.displayName}
              defaultValue={`${user?.displayName}`}
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            <input
              type="url"
              name="photo"
              placeholder={user?.photoURL}
              defaultValue={`${user?.photoURL}`}
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            <input
              type="email"
              name="email"
              placeholder={user?.email}
              defaultValue={`${user?.email}`}
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-cb-primary text-white py-3 rounded-md hover:bg-cb-secondary transition"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
