import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import facebook from "../../Assets/Home-Images/image.png";
import { AuthContext } from "../../context/AuthContext";
import { GoogleAuthProvider } from 'firebase/auth';


const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUoError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const { providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard/employees';

  const handleSignUp = (data) => {
    setSignUoError();
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate('/dashboard/employees')
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUoError(error.message);
      });
  };
  const handleGoogleSign = () => {

    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true });

        const currentUser = {
          email: user.email
        }

        console.log(currentUser);

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
