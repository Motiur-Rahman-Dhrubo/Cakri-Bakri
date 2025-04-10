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
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => console.log(error));
  };
  // register trough name, image, email, pass
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const photo = e.target.photo.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  //   if (!passwordRegex.test(password)) {
  //     Swal.fire("Your Password is invalid to use");
  //     return;
  //   }

  //   try {
  //     const result = await createUser(email, password);
  //     if (result.user) {
  //       await updateUserProfile({ displayName: name, photoURL: photo });
  //       e.target.reset();
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.error("Registration error:", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Registration Failed",
  //       text: error.message,
  //     });
  //   }
  // };
  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user
        console.log(user)
        navigate('/')
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              role: data.role,
              photoUrl: data.photoUrl
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user added database')
                  reset()
                  navigate('/')
                }
              })
          })
          .catch(error => console.log(error))
      })

  }
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
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            {errors.name && <span>This field is required</span>}
            <input
              type="url"
              {...register("photoUrl", { required: true })}
              placeholder="Photo url..."
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            {errors.photoUrl && <span>This field is required</span>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select defaultValue={'default'} {...register("role")}
                className="select select-bordered w-full ">
                <option disabled value={'default'}>Select ROle</option>
                <option value="seeker">seeker</option>
                <option value="publisher">Publiser</option>
              </select>
              {errors.photoUrl && <span>This field is required</span>}
            </div>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            {errors.email && <span>This field is required</span>}
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              required
              className="w-full p-3 bg-cb-white text-cb-primary border border-cb-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-cb-secondary"
            />
            {errors.password && <span>This field is required</span>}
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
