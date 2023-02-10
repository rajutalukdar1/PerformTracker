import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import facebook from "../../Assets/home/image.png";

import "./SignIn.css";
import { GoogleAuthProvider } from 'firebase/auth';
import { providerLogin, userLogin } from "../../features/auths/AuthSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const { register, formState: { errors }, handleSubmit, } = useForm();
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const from = location.state?.from?.pathname || '/dashboard';

  // Login With Firebase and Redux
  const handleLogin = (data) => {
    setLoginError();
    dispatch(userLogin(data.email, data.password, () => { }))
      .then((result) => {
        toast.success("Logged In Successfully.");
        console.log("Logged In");
        setLoginUserEmail(data.email);
        navigate(from, { replace: true })
      })
      .catch(e => {
        console.log(e.message);
        setLoginError(e.message);
      })
  };

  // Google Provider Login With Firebase and Redux
  const handleGoogleSign = () => {
    dispatch(providerLogin(googleProvider))
      .then(result => {
        toast.success("Google Logged In Successfully.");
        navigate(from, { replace: true });
        console.log("Provider Logged In");
      })
      .catch(error => console.error(error))
  }

  return (
    <div>
      <div className="hero min-h-screen text-black">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login now!!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-black">
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
                  className="input input-bordered "
                />
                {errors.email && (
                  <p role="alert" className="text-red-500">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text text-black">Password</span></label>
                <input type="password" {...register("password", {
                  required: "Password is Required",
                  minLength: { value: 6, message: 'Password must be 6 character' }
                })}
                  placeholder="Password"
                  className="input input-bordered" />
                {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                <label className="label"><span className="label-text">Forget Password?</span></label>
              </div>

              {loginError && <p className='text-red-500'>{loginError}</p>
              }
              <label className="label">
                <Link to="" className="label-text-alt link text-black">
                  Forgot password?
                </Link>
              </label>
              <input className="btn btn-warning" value="Login" type="submit" />
              <p className="text-center">-------------Or-------------</p>
              <div>
                <Link>
                  <div className="flex justify-content-center align-items-center mt-3 ">
                    <div className="flex justify-between items-center login-container hover:bg-warning">
                      <div className="w-10 h-10 ml-1">
                        <img
                          src="https://i.ibb.co/7yz77Hj/google.png"
                          alt=""
                        ></img>
                      </div>
                      <div
                        onClick={handleGoogleSign}
                        className=" font-semibold ">
                        Continue with Google
                      </div>
                      <div className="mr-6"></div>
                    </div>
                  </div>
                </Link>
                <Link>
                  <div className="flex justify-content-center align-items-center mt-3 ">
                    <div className="flex justify-between items-center login-container hover:bg-warning">
                      <div className="w-10 h-8 ml-1">
                        <img src={facebook} alt=""></img>
                      </div>
                      <div className=" font-semibold ">
                        Continue with FaceBook
                      </div>
                      <div className="mr-6"></div>
                    </div>
                  </div>
                </Link>
              </div>
              <small>
                <p>
                  Don't have an accounts?
                  <Link className="text-purple-600 font-bold" to="/signup">
                    Register now
                  </Link>
                </p>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
