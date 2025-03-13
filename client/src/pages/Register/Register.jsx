import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/LoginAnimation.json";
import { Link } from "react-router";
export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    photoUrl: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    console.log(formData);
  };

  const handleGoogleRegister = () => {
    console.log("Google Register");
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
        <form className="w-full max-w-md space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
          />
          <input
            type="url"
            name="photoUrl"
            placeholder="Photo url..."
            onChange={handleChange}
            required
            className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
          />
          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-cb-primary text-white py-3 rounded-md hover:bg-cb-secondary transition"
          >
            Register
          </button>

          {/* Google Register Button */}
          <button
            type="button"
            onClick={handleGoogleRegister}
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
}

