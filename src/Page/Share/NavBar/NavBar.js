import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo (1).png";
import "./Nav.css";

const NavBar = () => {
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="font-semibold">
        <Link to="/client">Client</Link>
      </li>
      <li className="font-semibold">
        <Link to="/clientDetails">Client Details</Link>
      </li>
      <li className="font-semibold">
        <Link to="/services">Services</Link>
      </li>

      <>
        <li className="font-semibold">
          <Link to="/myReview">My Review</Link>
        </li>

        {/* <li className='font-semibold'>
                <button className='btn-ghost'>Log Out</button>
                onClick={handelLogOut}
            </li> */}
      </>

      <>
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      </>
    </>
  );
  return (
    <div className="navbar bg-base-100 justify-between shadow mx-auto stop">
      <div className="flex w-full">
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

// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//     return (
//         <div className=" flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 mb-3 sticky top-0 z-30">

//             <div className="navbar bg-base-100 ">
//                 <div className="navbar-start">
//                     <div className="dropdown lg:hidden">
//                         <label tabindex="0" className="btn btn-ghost btn-circle">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//                         </label>
//                         <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

//                             <li> <Link to="/home">Home</Link></li>
//                             <li><Link to="/media">Media</Link></li>
//                             <li><Link to="/message"> Message</Link></li>
//                             <li><Link to="/about">About</Link></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="navbar lg:-ml-28 ">
//                     <Link to='/home' className="btn btn-ghost normal-case text-3xl">
//                         <img src="https://i.ibb.co/Gxw7yvF/logo.png" alt="" />
//                     </Link>
//                 </div>
//                 <div className="navbar-end ">

//                     <ul className="flex gap-0 flex-col lg:flex-row list-none lg:ml-auto items-center">

//                         <li className="nav-item hidden lg:block">
//                             <Link to="/home"
//                                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
//                             >

//                                 <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
//                             </Link>
//                         </li>

//                         <li className="nav-item hidden lg:block">
//                             <Link to="/media"
//                                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
//                             >
//                                 <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Media</span>
//                             </Link>
//                         </li>
//                         <li className="nav-item hidden lg:block">
//                             <Link to="/message"
//                                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
//                             >
//                                 <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2"> Message</span>
//                             </Link>
//                         </li>
//                         <li className="nav-item hidden lg:block">
//                             <Link to="/about"
//                                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
//                             >
//                                 <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2 whitespace-nowrap">About</span>
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NavBar;
