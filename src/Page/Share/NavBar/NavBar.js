import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo (1).png";
import { AuthContext } from "../../../context/AuthContext";
import "./Nav.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="font-semibold">
        <Link to="/services">Services</Link>
      </li>
      <>
        <li className="font-semibold">
          <Link to="/myReview">My Review</Link>
        </li>

        {user?.uid ? (
          <>
            <li className="font-semibold">
              <Link to="/dashboard">Dashboard</Link>
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
    <div className="w-full navbar bg-base-100  justify-between mx-auto stop ">
      <div className="flex w-full justify-between">
        <div className="navbar-start w-80">
          <Link className="flex items-center gap-3" to="/">
            <img className="w-8 sm:w-12 md:w-16" src={logo} alt="" />
            <span className="font-bold text-lg sm:text-xl md:text-2xl text-black">
              Perform Tracker
            </span>
          </Link>
        </div>
        <div className="flex navbar-end w-3/4">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {menuItems}
          </ul>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars className="text-lg sm:text-xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-slate-50 rounded-box w-52 right-2"
            >
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
