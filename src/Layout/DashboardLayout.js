import React from 'react';
import { Outlet } from 'react-router-dom';
import { GoReport } from "react-icons/go";
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineUserGroup } from "react-icons/hi";
import DashboardSideItems from './DashboardSideItems';
import DashboardNav from '../Page/Share/DashboardNav/DashboardNav';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNav />
            <div className="drawer drawer-mobile pt-20">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-4 py-10 lg:ml-[190px]">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side fixed h-full w-full sm:w-[220px] overflow-y-auto">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
<<<<<<< HEAD
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
=======
                    <ul className="menu bg-black text-base-content font-semibold py-5 w-full sm:w-[220px]">
                        <DashboardSideItems
                            icon={<AiOutlineUser className='text-2xl' />}
                            title='Employees'
                            subMenus={[
                                {
                                    to: "/dashboard/employees",
                                    title: "All Employees"
                                },
                            ]}
                        />
                        <DashboardSideItems
                            icon={<HiOutlineUserGroup className='text-2xl' />}
                            title='Clients'
                            subMenus={[
                                {
                                    to: "/dashboard/clients",
                                    title: "All Clients"
                                },
                            ]}
                        />
                        <DashboardSideItems
                            icon={<GoReport className='text-2xl' />}
                            title='Reports'
                            subMenus={[
                                {
                                    to: "/dashboard/reports",
                                    title: "Employee Reports"
                                },
                            ]}
                        />
>>>>>>> 6d78451324e3bfce91601e65a8a7a9725b1225b0
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;