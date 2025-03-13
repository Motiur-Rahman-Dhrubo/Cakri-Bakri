import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/LoginAnimation.json";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => console.log(error));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert("Your Password is invalid to use");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(
          result.user &&
            updateUserProfile({ displayName: name, photoURL: photo })
        );

        e.target.reset();
        navigate("/");
      })
      .catch((error) => alert("Invalid Request", error.message));
  };
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-lg">
          <Lottie animationData={registerAnimation} />
        </div>
      </div>

      {/* Register Form Section */}
      <div className="w-full md:w-1/2  flex flex-col justify-center items-center p-8">
        <div className="bg-cb-card p-10 text-center rounded-lg">
          <h2 className="text-4xl text-cb-primary font-bold mb-3">
            Create an Account
          </h2>
          <div className="divider mt-0 h-[1px] bg-cb-secondary opacity-30"></div>
          <form className="w-full max-w-md space-y-6" onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            <input
              type="url"
              name="photo"
              placeholder="Photo url..."
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            <button
              type="button"
              className="w-full bg-cb-primary text-white py-3 rounded-md hover:bg-cb-secondary transition"
            >
              Register
            </button>

            {/* Google Register Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full text-cb-primary flex items-center justify-center border border-cb-secondary py-3 rounded-md hover:bg-cb-white transition"
            >
              <FcGoogle className="text-2xl mr-3" />
              Register with Google
            </button>
          </form>
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
