import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/registrationAnimation.json";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log("Google Sign-in user:", res.user);
        Swal.fire({
          icon: "success",
          title: "Logged in with Google",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google login error:", error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-in Failed",
          text: error.message,
        });
      });
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile({
          displayName: data.name,
          photoURL: data.photoUrl,
        })
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              role: data.role,
              photoUrl: data.photoUrl,
            };
            axiosPublic.post("/users", userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire({
                    icon: "success",
                    title: "Registration Successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              })
              .catch((error) => {
                console.error("Axios post error:", error);
                Swal.fire({
                  icon: "error",
                  title: "Failed to Save User",
                  text: error.message || "An error occurred while saving user info.",
                });
              });
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text: error.message || "An error occurred while updating profile.",
            });
          });
      })
      .catch((error) => {
        console.error("User creation error:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message || "An error occurred during registration.",
        });
      });
  };

  return (
    <div className="flex flex-col md:flex-row ">
      {/* Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center max-sm:px-3 max-sm:py-5 md:p-8">
        <div className="w-full max-w-lg">
          <Lottie animationData={registerAnimation} />
        </div>
      </div>

      {/* Register Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center max-sm:px-3 max-sm:py-5 md:p-8">
        <div className="bg-cb-card p-5 lg:p-10 text-center rounded-lg">
          <h2 className="text-4xl text-cb-primary font-bold mb-3">
            Create an Account
          </h2>
          <div className="divider mt-0 h-[1px] bg-cb-secondary opacity-30"></div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}

            <input
              type="url"
              {...register("photoUrl", { required: true })}
              placeholder="Photo URL"
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            {errors.photoUrl && <span className="text-red-500">Photo URL is required</span>}

            <div className="form-control text-left">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select defaultValue={'default'} {...register("role", { required: true })}
                className="select select-bordered w-full">
                <option disabled value={'default'}>Select Role</option>
                <option value="seeker">Seeker</option>
                <option value="publisher">Publisher</option>
              </select>
              {errors.role && <span className="text-red-500">Role is required</span>}
            </div>

            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            {errors.password && <span className="text-red-500">Password is required</span>}

            <button
              type="submit"
              className="w-full cursor-pointer bg-cb-primary text-white py-3 rounded-md hover:bg-cb-secondary transition"
            >
              Register
            </button>
          </form>

          <div className="divider text-cb-primary">OR</div>

          {/* Google Register Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full cursor-pointer text-cb-primary flex items-center justify-center border border-cb-secondary py-3 rounded-md hover:bg-cb-white transition"
          >
            <FcGoogle className="text-2xl mr-3" />
            Register with Google
          </button>

          <p className="text-cb-secondary mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-cb-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
