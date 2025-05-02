import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/LoginAnimation.json";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser, signInWithGoogle } = useContext(AuthContext);

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log("Logged in user:", user);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login error:", error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Google user:", user);
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Google login error:", error);
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center max-sm:px-3 max-sm:py-5 md:p-8">
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg space-y-6"
          >
            <input
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}

            <input
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}

            <button
              type="submit"
              className="w-full cursor-pointer bg-cb-primary text-white py-3 rounded-md hover:bg-projectBlue-primary transition"
            >
              Login
            </button>
          </form>

          <div className="divider text-cb-primary">OR</div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full cursor-pointer text-cb-primary flex items-center justify-center border border-cb-secondary py-3 rounded-md hover:bg-cb-white transition"
          >
            <FcGoogle className="text-2xl mr-3" />
            Login with Google
          </button>

          <p className="text-cb-secondary mt-4">
            Don&apos;t have an account?{" "}
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
