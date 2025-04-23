import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/registrationAnimation.json";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useDispatch } from "react-redux";
import { registerUser, googleSignIn, updateUser } from "../../features/counter/authSlice";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser({ email: data.email, password: data.password }))
      .unwrap()
      .then(() => {
        dispatch(updateUser({ displayName: data.name, photoURL: data.photoUrl }));
        const userInfo = {
          name: data.name,
          email: data.email,
          role: data.role,
          photoUrl: data.photoUrl,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            reset();
            navigate("/");
          }
        });
      })
      .catch((error) => {
        Swal.fire("Registration Failed", error.message, "error");
      });
  };

  const handleGoogleLogin = () => {
    dispatch(googleSignIn())
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-lg">
          <Lottie animationData={registerAnimation} />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="bg-cb-card p-10 text-center rounded-lg">
          <h2 className="text-4xl text-cb-primary font-bold mb-3">Create an Account</h2>
          <div className="divider h-[1px] bg-cb-secondary opacity-30"></div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="w-full p-3 border rounded-md"
            />
            {errors.name && <span>This field is required</span>}

            <input
              type="url"
              {...register("photoUrl", { required: true })}
              placeholder="Photo URL"
              className="w-full p-3 border rounded-md"
            />
            {errors.photoUrl && <span>This field is required</span>}

            <select
              {...register("role", { required: true })}
              className="select select-bordered w-full"
              defaultValue=""
            >
              <option disabled value="">
                Select Role
              </option>
              <option value="seeker">Seeker</option>
              <option value="publisher">Publisher</option>
            </select>
            {errors.role && <span>This field is required</span>}

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
              Register
            </button>
          </form>

          <div className="divider text-cb-primary">OR</div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center border py-3 rounded-md hover:bg-cb-white transition"
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
