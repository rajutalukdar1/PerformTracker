import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../Assets/logo (1).png";
import { ImExit } from "react-icons/im";
import { FaCog } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthContext';

const DashboardNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-black fixed border-b-2 border-gray-900 z-50">
      <div className="flex-1">
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden pl-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <Link className="flex items-center gap-3 py-2" to="/">
          <img className="w-6 sm:w-8 md:w-12 border-2 rounded-full" src={logo} alt="" />
          <span className="font-semibold sm:text-lg md:text-xl text-slate-200">
            Perform Tracker
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="flex items-center gap-3 cursor-pointer">
            <div className="w-6 sm:w-10 rounded-full overflow-hidden">
              <img src={user?.photoURL || 'https://i.ibb.co/Qj8XhH5/user.png'} />
            </div>
            <span className='text-white hidden sm:block'>{user?.displayName}</span>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 text-slate-200 rounded-box w-52">
            <li className='border-b-2 pb-2 mx-4 mt-3'>
              <div className="bg-transparent flex flex-col gap-0 items-center">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img src={user?.photoURL || 'https://i.ibb.co/Qj8XhH5/user.png'} />
                  </div>
                </div>
                <h3 className='text-lg p-0'>{user?.displayName}</h3>
                <p className='p-0'>Admin</p>
                <Link to='/profile' className='btn text-white bg-gradient-to-r from-purple-600 to-red-500 mt-2'>View Profile</Link>
              </div>
            </li>
            <li>
              <Link className='items-center'>
                <FaCog />
                <span>Settings</span>
              </Link>
            </li>
            <li className='mb-3'>
              <button onClick={handleLogout} className='items-center'>
                <ImExit />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav