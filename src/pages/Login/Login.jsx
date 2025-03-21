import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/LoginAnimation.json";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => console.log(error));
  };

  const handlLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log("Logged in", result.user);
        const user = { email: email };
        axios
          .post("http://localhost:5000/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Email and Password does not match");
      });
  };
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center max-sm:px-3 max-sm:py-5 md:p-8">
        {/* Lottie Animation Placeholder */}
        <div className="w-full max-w-lg">
          <Lottie animationData={loginAnimation} />
        </div>
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center max-sm:px-3 max-sm:py-5 md:p-8">
        <div className="bg-cb-card p-5 lg:p-10 text-center rounded-lg">
          <h2 className="text-4xl text-cb-primary font-bold mb-3">
            Welcome Back
          </h2>
          <div className="divider mt-0 h-[1px] bg-cb-secondary opacity-30"></div>
          <form className="w-full max-w-lg space-y-6" onSubmit={handlLogin}>
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
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-projectBlue-light"
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-cb-primary text-white py-3 rounded-md hover:bg-projectBlue-primary transition"
            >
              Login
            </button>
          </form>
          <div className="divider text-cb-primary">OR</div>
          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full cursor-pointer text-cb-primary flex items-center justify-center border border-cb-secondary py-3 rounded-md hover:bg-cb-white transition"
          >
            <FcGoogle className="text-2xl mr-3" />
            Login with Google
          </button>

          <p className="text-cb-secondary mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-cb-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;