import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import facebook from "../../Assets/home/image.png";

import "./SignIn.css";
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { providerLogin, userLogin } from "../../features/auths/AuthSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import LoginAnimation from "../Others/Lottiefiles/LoginAnimation/LoginAnimation";

const SignIn = () => {
  const { register, formState: { errors }, handleSubmit, } = useForm();
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const from = location.state?.from?.pathname || '/dashboard';

  // Login With Firebase and Redux
  const handleLogin = (data) => {
    setLoginError();
    dispatch(userLogin(data.email, data.password, () => { }))
      .then((result) => {
        toast.success("Logged In Successfully.");
        console.log("Logged In");
        setLoginUserEmail(data.email);
        fetch(`https://perform-tracker-server.vercel.app/users?uid=${result.user.uid}`)
          .then(res => res.json())
          .then(data => {
            navigateTo(data)
          })
          .catch(err => console.error(err));
        // navigate(from, { replace: true })
      })
      .catch(e => {
        console.log(e.message);
        setLoginError(e.message);
      })
  };

  // Google and Facebook Provider Login With Firebase and Redux
  const handleProviderSignIn = (provider) => {
    dispatch(providerLogin(provider))
      .then(result => {
        toast.success("Logged In Successfully.");
        // navigate(from, { replace: true });
        fetch(`https://perform-tracker-server.vercel.app/users?uid=${result.user.uid}`)
          .then(res => res.json())
          .then(data => {
            navigateTo(data)
          })
          .catch(err => console.error(err));
        console.log("Provider Logged In");
      })
      .catch(error => console.error(error))
  }

  const navigateTo = (existUser) => {
    if (existUser?.role === "Admin") {
      navigate('/dashboard/admin');
    } else if (existUser?.role === "Client") {
      navigate('/dashboard/client');
    } else {
      navigate('/dashboard');
    }
  }

  return (
    <div>
      <div className="hero text-black">
        <div className="hero-content flex-col lg:flex-row p-0 lg:gap-36 mt-5 md:mt-10 mb-5 md:mb-16">
          <div className="text-center lg:text-left hidden lg:block">
            <LoginAnimation />
          </div>
          <div className="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100 text-black">
            <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
                {errors.email &&
                  <p role="alert" className="text-red-500">
                    {errors.email?.message}
                  </p>
                }
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is Required",
                    minLength: { value: 6, message: 'Password must be 6 character' }
                  })}
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
                {errors.password &&
                  <p className='text-red-600' role="alert">{errors.password?.message}</p>
                }
              </div>
              {loginError && <p className='text-red-500'>{loginError}</p>
              }
              <label className="label">
                <Link to="/reset" className="label-text-alt link text-black">
                  Forgot password?
                </Link>
              </label>
              <input className="btn btn-warning" value="Login" type="submit" />
              <div className="divider text-gray-500 before:bg-gray-300 after:bg-gray-300">Or</div>
              <div>
                <div className="flex justify-between items-center sm:w-80 h-10 sm:h-[51px] bg-white border-2 hover:bg-warning rounded-badge cursor-pointer transition-all">
                  <div className="w-6 sm:w-10 sm:h-10 ml-1">
                    <img src="https://i.ibb.co/7yz77Hj/google.png" alt="" />
                  </div>
                  <div
                    onClick={() => handleProviderSignIn(googleProvider)}
                    className="font-semibold text-xs sm:text-base"
                  >
                    Continue with Google
                  </div>
                  <div className="mr-6"></div>
                </div>
                <div className="flex justify-between items-center sm:w-80 h-10 sm:h-[51px] bg-white border-2 hover:bg-warning rounded-badge cursor-pointer transition-all mt-2">
                  <div className="w-8 sm:w-12 sm:h-12">
                    <img src={facebook} alt="" />
                  </div>
                  <div
                    onClick={() => handleProviderSignIn(facebookProvider)}
                    className="font-semibold text-xs sm:text-base"
                  >
                    Continue with FaceBook
                  </div>
                  <div className="mr-6"></div>
                </div>
              </div>
              <p className="text-center">
                <small>
                  <span>Don't have an accounts? </span>
                  <Link className="text-purple-600 font-bold" to="/signup">Register now</Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;