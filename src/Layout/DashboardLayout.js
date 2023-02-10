import React from 'react';
import { Outlet } from 'react-router-dom';
import { GoReport, GoRocket } from "react-icons/go";
import { AiOutlineDashboard, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineUserGroup } from "react-icons/hi";
import DashboardSideItems from './DashboardSideItems';
import DashboardNav from '../Page/Share/DashboardNav/DashboardNav';
import { useSelector } from 'react-redux'; import { useQuery } from '@tanstack/react-query';

const DashboardLayout = () => {
    const { user } = useSelector(state => state.userReducer);

    const { data: currentUser = {}, refetch } = useQuery({
        queryKey: ['currentUser', user?.uid],
        queryFn: () =>
            fetch(`https://perform-tracker-server.vercel.app/users?uid=${user?.uid}`).then(res => res.json()),
    });

    return (
        <div data-theme='dark'>
            <DashboardNav currentUser={currentUser} />
            <div className="drawer drawer-mobile pt-16 md:pt-20">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle peer" />
                <div className="drawer-content px-4 py-10 lg:ml-[222px] h-auto">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side fixed h-full w-0 lg:w-[220px] peer-checked:w-full 
                lg:peer-checked:w-[220px] overflow-y-auto">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu bg-black text-base-content font-semibold py-5 w-full sm:w-[220px]">
                        {
                            currentUser.role === "Admin" ? <>
                                <DashboardSideItems
                                    icon={<AiOutlineDashboard className='text-2xl mt-2' />}
                                    title='Dashboard'
                                    subMenus={[
                                        {
                                            to: "/dashboard/admin",
                                            title: "Admin"
                                        }
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
                            </> : currentUser.role === "Client" ? <>
                                <DashboardSideItems
                                    icon={<AiOutlineDashboard className='text-2xl mt-2' />}
                                    title='Dashboard'
                                    subMenus={[
                                        {
                                            to: "/dashboard/dashboardClients",
                                            title: "Clients"
                                        },
                                    ]}
                                />
                                <DashboardSideItems
                                    icon={<AiOutlineUser className='text-2xl mt-2' />}
                                    title='Profile'
                                    subMenus={[
                                        {
                                            to: "/dashboard/profile/client",
                                            title: "Client Profile"
                                        },
                                    ]}
                                />
                            </> : <>
                                <DashboardSideItems
                                    icon={<AiOutlineDashboard className='text-2xl mt-2' />}
                                    title='Dashboard'
                                    subMenus={[
                                        {
                                            to: "/dashboard/dashboardEmployees",
                                            title: "Employees"
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
                                    ]}
                                />
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;