import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/LoginAnimation.json";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, googleSignIn } from "../../features/counter/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }))
      .unwrap()
      .then(() => navigate(from, { replace: true }))
      .catch((err) => console.error("Login error", err));
  };

  const handleGoogleLogin = () => {
    dispatch(googleSignIn())
      .unwrap()
      .then(() => navigate(from, { replace: true }))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-lg">
          <Lottie animationData={loginAnimation} />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="bg-cb-card p-10 text-center rounded-lg">
          <h2 className="text-4xl text-cb-primary font-bold mb-3">Welcome Back</h2>
          <div className="divider h-[1px] bg-cb-secondary opacity-30"></div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg space-y-6">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full p-3 border rounded-md"
            />
            {errors.email && <span>This field is required</span>}

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full p-3 border rounded-md"
            />
            {errors.password && <span>This field is required</span>}

            <button
              type="submit"
              className="w-full bg-cb-primary text-white py-3 rounded-md hover:bg-cb-secondary transition"
            >
              Login
            </button>
          </form>

          <div className="divider text-cb-primary">OR</div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center border py-3 rounded-md hover:bg-cb-white transition"
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
