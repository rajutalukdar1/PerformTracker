import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../../Assets/home/image.png";
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { createUser, providerLogin, updateUser } from "../../features/auths/AuthSlice";
import { useDispatch } from "react-redux";
import SelectRole from "./SelectRole";
<<<<<<< HEAD
import useIsUserExist from "../../hooks/useIsUserExist";
=======
import LoginAnimation from "../Others/Lottiefiles/LoginAnimation/LoginAnimation";
>>>>>>> 75b1dfa04f48fe3311e8bc66f420ba3921af0197


const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const [uid, setUid] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

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
            saveUser({
              name: data.name,
              img: "https://i.ibb.co/Qj8XhH5/user.png",
              uid: result.user.uid,
              role: data.role,
            });
            console.log("Signed Up");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  // Google and Facebook Provider Login With Firebase and Redux
  const handleProviderSignIn = (provider) => {
    dispatch(providerLogin(provider))
      .then(result => {
        fetch(`https://perform-tracker-server.vercel.app/users?uid=${result.user.uid}`)
          .then(res => res.json())
          .then(data => {
            checkingUserExist(data, result.user)
          })
          .catch(err => console.error(err));
      })
      .catch(error => console.error(error))
  }

  const checkingUserExist = (existUser, loggedUser) => {
    if (existUser?.uid) {
      if (existUser?.role) {
        toast.success("Logged In Successfully.");
        navigate('/dashboard');
      } else {
        setUid(loggedUser.uid);
      }
    } else {
      saveUser({
        name: loggedUser.displayName,
        email: loggedUser.email,
        img: loggedUser.photoURL,
        uid: loggedUser.uid
      });
    }
  }

  const saveUser = (user) => {
    console.log(user?.role)
    fetch('https://perform-tracker-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (!user.role) {
          return setUid(user.uid);
        }
        navigate('/dashboard');
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <div className="hero text-black mb-10">
        <div className="hero-content flex-col lg:flex-row lg:gap-36">
          <div className="hidden lg:block">
            <LoginAnimation />
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
              <div>
                <div className='flex gap-4 justify-between mt-2'>
                  <p>I am here as an</p>
                  <div className='flex items-center gap-2'>
                    <input
                      id='employee'
                      {...register("role", {
                        required: "Role is required",
                      })}
                      type="radio"
                      className="radio radio-primary" value="Employee"
                    />
                    <label htmlFor="employee">Employee</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input
                      id='client'
                      {...register("role", {
                        required: "Role is required",
                      })}
                      type="radio"
                      className="radio radio-primary"
                      value="Client"
                    />
                    <label htmlFor="client">Client</label>
                  </div>
                </div>
                {errors.role && (
                  <p role="alert" className="text-red-500">
                    {errors.role?.message}
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
                        onClick={() => handleProviderSignIn(googleProvider)}
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
                      <div onClick={() => handleProviderSignIn(facebookProvider)} className=" font-semibold ">
                        Continue with Facebook
                      </div>
                      <div className="mr-6"></div>
                    </div>
                  </div>
                </Link>
              </div>

              <small>
                <p className="flex justify-center mt-2">
                  <span>Already have an account? </span>
                  <Link className="text-purple-600 font-bold" to="/login">
                    Login now
                  </Link>
                </p>
              </small>
            </form>
          </div>
        </div>
      </div>
      {
        uid &&
        <SelectRole
          uid={uid}
          setUid={setUid}
        />
      }
    </div>
  );
};

export default SignUp;
