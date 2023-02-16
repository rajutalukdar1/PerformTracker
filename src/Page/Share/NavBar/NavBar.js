import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Assets/logo (1).png";
import { logOut } from "../../../features/auths/AuthSlice";
import "./Nav.css";

const NavBar = () => {
  const { user } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const { data: currentUser = {} } = useQuery({
    queryKey: ['currentUser', user?.uid],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/users?uid=${user?.uid}`).then(res => res.json()),
  });

  const goDashboard = currentUser.role === "Employee" ? "/" : currentUser?.role?.toLowerCase();

  // Logout With Firebase and Redux
  const handleLogout = () => {
    dispatch(logOut())
      .then(() => {
        toast("You are Logged Out");
        console.log("Logged Out");
      })
      .catch((err) => console.error(err));
  };
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>
      <>
        {user?.uid ? (
          <>
            <li className="font-semibold">
              <Link to={`/dashboard/${goDashboard}`}>Dashboard</Link>
            </li>
            <li className="font-semibold">
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </>
        ) : (
          <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li>
        )}
      </>
    </>
  );

  return (
    <div className="stop bg-[#FAF7F5] bg-opacity-90 bg-transparent border-b-2">
      <div className="navbar w-[95%] max-w-[1440px] mx-auto flex justify-between">
        <div className="navbar-start">
          <div className="navbar-start w-80">
            <Link className="flex items-center gap-3" to="/">
              <img className="w-8 sm:w-12 md:w-16" src={logo} alt="" />
              <span className="font-bold text-lg sm:text-xl md:text-2xl text-black">
                Perform Tracker
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-end font-semibold hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-black">
            {menuItems}
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52 right-0" >
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
