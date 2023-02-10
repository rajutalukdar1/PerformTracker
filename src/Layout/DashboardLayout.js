import React from 'react';
import { Outlet } from 'react-router-dom';
import { GoReport, GoRocket } from "react-icons/go";
import { AiOutlineDashboard, AiOutlineUser } from 'react-icons/ai';
import { HiOutlinePencilAlt, HiOutlineUserGroup } from "react-icons/hi";
import DashboardSideItems from './DashboardSideItems';
import DashboardNav from '../Page/Share/DashboardNav/DashboardNav';
import { FaAmazonPay, FaTrello, FaUserSecret } from 'react-icons/fa';

const DashboardLayout = () => {
    return (
        <div data-theme='dark'>
            <DashboardNav />
            <div className="drawer drawer-mobile pt-16 md:pt-20">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle peer" />
                <div className="drawer-content px-4 py-10 lg:ml-[222px] h-auto">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side fixed h-full w-0 lg:w-[220px] peer-checked:w-full 
                lg:peer-checked:w-[220px] overflow-y-auto">
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
                        <DashboardSideItems
                            icon={<GoRocket className='text-2xl mt-2' />}
                            title='Projects'
                            subMenus={[
                                {
                                    to: "/dashboard/projects",
                                    title: "Projects"
                                },
                                {
                                    to: "/dashboard/task",
                                    title: "Task"
                                },
                            ]}
                        />
                        <DashboardSideItems
                            icon={<AiOutlineUser className='text-2xl mt-2' />}
                            title='Profile'
                            subMenus={[
                                {
                                    to: "/dashboard/profile/employees",
                                    title: "Employee Profile"
                                },
                                {
                                    to: "/dashboard/profile/client",
                                    title: "Client Profile"
                                },
                            ]}
                        />
                        <DashboardSideItems
                            icon={<FaTrello className='text-2xl mt-2' />}
                            title='Leave Manage'
                            subMenus={[
                                {
                                    to: "/dashboard/profile/employees",
                                    title: "Leave Request"
                                },
                            ]}
                        />
                        <DashboardSideItems
                            icon={<FaUserSecret className='text-2xl mt-2' />}
                            title='Leads'
                            subMenus={[
                                {
                                    to: "/dashboard/leads",
                                    title: "Projects Leads"
                                }
                            ]}
                        />
                        <DashboardSideItems
                            icon={<HiOutlinePencilAlt className='text-2xl mt-2' />}
                            title='Attendance'
                            subMenus={[
                                {
                                    to: "/dashboard/profile/client",
                                    title: "Today's Attendance"
                                },
                                {
                                    to: "/dashboard/profile/client",
                                    title: "Employees Attendance"
                                },
                            ]}
                        />
                        <DashboardSideItems
                            icon={<FaAmazonPay className='text-2xl mt-2' />}
                            title='PayRoll'
                            subMenus={[
                                {
                                    to: "/dashboard/profile/client",
                                    title: "Employees Salary"
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