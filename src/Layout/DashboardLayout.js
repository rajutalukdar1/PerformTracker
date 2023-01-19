import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Page/Share/NavBar/NavBar';
import { GoFileMedia } from "react-icons/go";
import { AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';

const DashboardLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 bg-slate-100 text-base-content font-normal">

                        {/* <li className='rounded-md mb-4'><Link className='pl-0 text-2xl' to="/"><AiOutlineHome /> Home</Link></li> */}
                        <li className='rounded-md mb-4'><Link className='pl-0 text-2xl' to=""><GoFileMedia /> Media</Link></li>
                        <li className='rounded-md mb-4'><Link className='pl-0 text-2xl' to=""><AiOutlineMessage />Message</Link></li>
                        <li className='rounded-md mb-4'><Link className='pl-0 text-2xl' to=""><AiOutlineUser />About</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;