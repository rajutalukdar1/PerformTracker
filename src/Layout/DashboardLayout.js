import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Page/Share/NavBar/NavBar';
import { GoReport } from "react-icons/go";
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineUserGroup } from "react-icons/hi";

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
                    <ul className="menu p-4 bg-base-100 text-base-content font-normal">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn m-1">Click</label>
                            <div tabIndex={0} className="dropdown-content card card-compact w-64 p-2 
                            shadow bg-primary text-primary-content">
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow
                                 bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* <li className='rounded-md mb-4'><Link className='pl-0 text-2xl' to="/"><AiOutlineHome /> Home</Link></li> */}
                        <li className='rounded-md mb-4'><Link className='pl-0 text-2xl' to=""><AiOutlineUser />Employee</Link></li>
                        <li className='rounded-md mb-4'><Link className='pl-0 text-2xl' to=""><HiOutlineUserGroup />Clients</Link></li>
                        <li className='rounded-md mb-4'><Link className='pl-0 text-2xl' to="/dashboard/reports"><GoReport /> Reports</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;