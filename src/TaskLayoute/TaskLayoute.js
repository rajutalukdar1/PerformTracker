import React from 'react';
import { FaAccusoft, FaHome } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import DashboardNav from '../Page/Share/DashboardNav/DashboardNav';




const TaskLayoute = () => {
    return (
        <div className=''>
        <DashboardNav />
        <div className="drawer drawer-mobile pt-16 md:pt-10">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle peer" />
            <div className="drawer-content  py-10 lg:ml-[222px] h-auto">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side fixed h-full w-0 lg:w-[220px] peer-checked:w-full lg:peer-checked:w-[220px] ">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu bg-black text-base-content font-semibold py-5 w-full sm:w-[220px] pl-6 pt-16">
                {/* <div className='text-white pl-4 h-screen pt-6 cursor-pointer '> */}
                    <Link to="/dashboard/admin">
                    <h2  className='flex   items-center gap-2 hover:text-white text-slate-400 cursor-pointer my-1 '> <FaHome className='text-white text-xl'></FaHome> Back to Home</h2>
                    </Link>
                    <h2 className='hover:text-white text-slate-400 cursor-pointer my-1'>Project Management</h2>
                    <h2 className='hover:text-white text-slate-400 cursor-pointer my-1'>Official Management</h2>
                    <h2 className='hover:text-white text-slate-400 cursor-pointer my-1'>Video Calling Apps</h2>
                    
                {/* </div> */}
                </ul>
            </div>
        </div>
    </div>
    );
};

export default TaskLayoute;