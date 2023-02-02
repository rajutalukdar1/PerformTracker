import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import DashboardNav from '../../Page/Share/DashboardNav/DashboardNav';

const TaskSidebar = () => {
    return (
        
        <div className=''>
            <DashboardNav />
            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle peer" />
                <div className="drawer-content px-4 py-10 lg:ml-[222px] h-auto">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side fixed h-full w-0 lg:w-[220px] peer-checked:w-full lg:peer-checked:w-[220px] ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu bg-black text-base-content font-semibold py-5 w-full sm:w-[220px] pl-3">
                    {/* <div className='text-white pl-4 h-screen pt-6 cursor-pointer '> */}
                        <Link to="/dashboard/admin">
                        <li  className='flex gap-2 hover:text-slate-400'> <FaHome></FaHome> Back to Home</li>
                        </Link>
                        <li className='hover:text-slate-400 my-1'>Project Management</li>
                        <li className='hover:text-slate-400 my-1'>Official Management</li>
                        <li className='hover:text-slate-400 my-1'>Video Calling Apps</li>
                        
                    {/* </div> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TaskSidebar;