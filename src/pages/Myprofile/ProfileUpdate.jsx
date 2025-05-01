import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const ProfileUpdate = () => {
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.userName.value;
    const photo = form.photo.value;

    if (!user) return;

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        Swal.fire("Success!", "Profile updated successfully", "success").then(() => {
          // Refresh page after success
          window.location.reload();
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full flex flex-col justify-center items-center max-sm:px-3 max-sm:py-5 md:p-8">
        <div className="bg-cb-card p-5 lg:p-10 text-center rounded-lg">
          <h2 className="text-4xl text-cb-primary font-bold mb-3">
            Update Your Profile
          </h2>
          <form onSubmit={handleUpdate} className="w-full max-w-lg space-y-6">
            <input
              type="text"
              name="userName"
              placeholder="Enter your name"
              defaultValue={user?.displayName}
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            <input
              type="url"
              name="photo"
              placeholder="Photo URL"
              defaultValue={user?.photoURL}
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              className="w-full p-3 bg-gray-100 text-cb-primary border border-gray-300 rounded-md"
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
