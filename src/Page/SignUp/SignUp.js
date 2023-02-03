import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import facebook from "../../Assets/Home-Images/image.png";
import { GoogleAuthProvider } from 'firebase/auth';
import { createUser, providerLogin, updateUser } from "../../features/auths/AuthSlice";
import { useDispatch } from "react-redux";


const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const from = location.state?.from?.pathname || '/dashboard/employees';

  // Signup With Firebase and Redux
  const handleSignUp = (data) => {
    setSignUpError();
    dispatch(createUser(data.email, data.password))
      .then((result) => {
        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        dispatch(updateUser(userInfo))
          .then(() => {
            console.log("Signed Up");
            navigate('/dashboard/employees')
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  // Google Provider Login With Firebase and Redux
  const handleGoogleSign = () => {
    dispatch(providerLogin(googleProvider))
      .then(result => {
        toast.success("Logged In Successfully.");
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
            <h1 className="text-5xl font-bold">Please Signup Now!!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-black">
            <form className="card-body" onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Your Name is required",
                  })}
                  placeholder="Name"
                  className="input input-bordered "
                />
                {errors.name && (
                  <p role="alert" className="text-red-500">
                    {errors.name?.message}
                  </p>
                )}
              </div>
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
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password Address is required",
                    minLength: {
                      value: 6,
                      message: "password must be 6 cheaters",
                    },
                  })}
                  placeholder="Password"
                  className="input input-bordered "
                />
                {errors.password && (
                  <p role="alert" className="text-red-500">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              {signUpError && <p className='text-red-600'>{signUpError}</p>}
              <label className="label">
                <Link to="" className="label-text-alt link text-black">
                  Forgot password?
                </Link>
              </label>
              <input className="btn btn-warning" value="SignUp" type="submit" />
              <p className="text-center">-------------Or-------------</p>
              <div>
                <Link>
                  {/* onClick={handleSignInWithGoogle} */}
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
                  {/* onClick={handleSignInWithFacebook} */}
                  <div className="flex justify-content-center align-items-center mt-3 ">
                    <div className="flex justify-between items-center login-container hover:bg-warning">
                      <div className="w-8 h-8 ml-1">
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
                <p className="flex justify-center mt-2">
                  Already have a accounts?
                  <Link className="text-purple-600 font-bold" to="/login">
                    Login now
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

export default SignUp;