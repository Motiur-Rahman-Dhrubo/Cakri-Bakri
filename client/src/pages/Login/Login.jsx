import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Lottie Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        {/* <Lottie animationData={loginAnimation} className="w-full max-w-md" /> */}
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-6">Welcome Back</h2>
        <form className="w-full max-w-sm space-y-4">
          <input 
            type="email" name="email" placeholder="Email" 
            onChange={handleChange} required 
            className="w-full p-3 border rounded-md"
          />
          <input 
            type="password" name="password" placeholder="Password" 
            onChange={handleChange} required 
            className="w-full p-3 border rounded-md"
          />
          <button className="w-full bg-blue-500 text-white py-3 rounded-md">
            Login
          </button>
        </form>
        <p className="mt-4">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
      </div>
    </div>
  );
};

