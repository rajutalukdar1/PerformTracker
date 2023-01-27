import React from 'react';
import { Outlet } from 'react-router-dom';
import { GoReport } from "react-icons/go";
import { AiOutlineDashboard, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineUserGroup } from "react-icons/hi";
import DashboardSideItems from './DashboardSideItems';
import DashboardNav from '../Page/Share/DashboardNav/DashboardNav';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNav />
            <div className="drawer drawer-mobile pt-16 md:pt-20">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-4 py-10 lg:ml-[222px] ">
                
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side fixed h-full w-full sm:w-[220px] overflow-y-auto">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu bg-black text-base-content font-semibold py-5 w-full sm:w-[220px]">

                        <DashboardSideItems
                            icon={<AiOutlineDashboard className='text-2xl mt-2' />}
                            title='Dashboard'
                            subMenus={[
                                {
                                    to: "/dashboard/admin",
                                    title: "Admin"
                                },
                                {
                                    to: "/dashboard/dashboardEmployees",
                                    title: "Employees"
                                },
                            ]}
                        />

                        <DashboardSideItems
                            icon={<AiOutlineUser className='text-2xl mt-2' />}
                            title='Employees'
                            subMenus={[
                                {
                                    to: "/dashboard/employees",
                                    title: "All Employees"
                                },
                            ]}
                        />
                        <DashboardSideItems
                            icon={<HiOutlineUserGroup className='text-2xl mt-2' />}
                            title='Clients'
                            subMenus={[
                                {
                                    to: "/dashboard/clients",
                                    title: "All Clients"
                                },
                            ]}
                        />
                        <DashboardSideItems
                            icon={<GoReport className='text-2xl mt-2' />}
                            title='Reports'
                            subMenus={[
                                {
                                    to: "/dashboard/reports",
                                    title: "Employee Reports"
                                },
                            ]}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;