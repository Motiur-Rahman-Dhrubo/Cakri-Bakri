import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    console.log(formData);
  };

  const handleGoogleLogin = () => {
    // Google login logic here
    console.log("Google login");
  };

  return (
    <div className="flex flex-col md:flex-row py-5">
      {/* Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        {/* Lottie Animation Placeholder */}
        <div className="w-full max-w-md">
          {/* <Lottie animationData={loginAnimation} /> */}
          <img src="/login-animation-placeholder.svg" alt="Login Animation" />
        </div>
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="bg-cb-card p-10 text-center rounded-lg">
          <h2 className="text-4xl text-cb-primary font-bold mb-3">
            Welcome Back
          </h2>
          <div className="divider mt-0 h-[1px] bg-cb-secondary opacity-30"></div>
          <form className="w-full max-w-lg space-y-6">
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
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-projectBlue-light"
            />
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-cb-primary text-white py-3 rounded-md hover:bg-projectBlue-primary transition"
            >
              Login
            </button>

            {/* Google Login Button */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full text-cb-primary flex items-center justify-center border border-cb-secondary py-3 rounded-md hover:bg-cb-white transition"
            >
              <FcGoogle className="text-2xl mr-3" />
              Login with Google
            </button>
          </form>
          <p className="text-cb-secondary mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-cb-primary hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
