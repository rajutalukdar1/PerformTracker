import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo (1).png";
import { AuthContext } from "../../../context/AuthContext";
import "./Nav.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => { })
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
      <>

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
    <div className="stop">
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 " >
              {menuItems}
            </ul>
          </div>
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
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
      {/* <Banner></Banner> */}
    </div>

  );
};

export default NavBar;
