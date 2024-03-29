import React from 'react';
import { Outlet } from 'react-router-dom';
import { GoReport, GoRocket } from "react-icons/go";
import { AiOutlineDashboard, AiOutlineUser } from 'react-icons/ai';
import { MdModelTraining, MdSupportAgent } from "react-icons/md";
import { useSelector } from 'react-redux'; import { useQuery } from '@tanstack/react-query';
import { FaBullhorn } from 'react-icons/fa';
import { HiOutlinePencilAlt, HiOutlineUserGroup } from "react-icons/hi";
import DashboardSideItems from './DashboardSideItems';
import DashboardNav from '../Page/Share/DashboardNav/DashboardNav';
import { FaAmazonPay, FaTrello, FaUserSecret } from 'react-icons/fa';
import { TbFileInvoice } from "react-icons/tb";
import { BsChatDots } from 'react-icons/bs';

const DashboardLayout = () => {
    const { user } = useSelector(state => state.userReducer);
    const { theme } = useSelector(state => state.themeReducer);

    const { data: currentUser = {} } = useQuery({
        queryKey: ['currentUser', user?.uid],
        queryFn: () =>
            fetch(`https://perform-tracker-server.vercel.app/users?uid=${user?.uid}`).then(res => res.json()),
    });

    return (
        <div data-theme={theme}>
            <DashboardNav currentUser={currentUser} />
            <div className="drawer drawer-mobile pt-16 md:pt-20">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle peer" />
                <div className="drawer-content px-4 py-10 lg:ml-[222px] h-auto">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side fixed h-full w-0 lg:w-[230px] peer-checked:w-full 
                lg:peer-checked:w-[230px] overflow-y-auto">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu bg-black text-base-content font-semibold py-5 w-full sm:w-[220px] mb-20">
                        {
                            currentUser.role === "Admin" ? <>
                                <DashboardSideItems
                                    icon={<AiOutlineDashboard className='text-2xl mt-2' />}
                                    title='Dashboard'
                                    subMenus={[
                                        {
                                            to: "/dashboard/admin",
                                            title: "Admin"
                                        },
                                    ]}
                                />
                                <DashboardSideItems
                                    icon={<AiOutlineUser className='text-2xl mt-2' />}
                                    title='Employees'
                                    subMenus={[
                                        {
                                            to: "/dashboard/all-employees",
                                            title: "All Employees"
                                        },
                                        {
                                            to: "/dashboard/all-teams",
                                            title: "All Teams"
                                        },
                                    ]}
                                />
                                <DashboardSideItems
                                    icon={<HiOutlineUserGroup className='text-2xl mt-2' />}
                                    title='Clients'
                                    subMenus={[
                                        {
                                            to: "/dashboard/all-clients",
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
                                            to: "/dashboard/tasks/all-tasks",
                                            title: "Tasks"
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
                                        {
                                            to: "/dashboard/profile/admin",
                                            title: "My Profile"
                                        },
                                    ]}
                                />
                                <DashboardSideItems
                                    icon={<FaBullhorn className='text-2xl mt-2' />}
                                    title='Promotion'
                                    subMenus={[
                                        {
                                            to: "/dashboard/promotion",
                                            title: "Promotion"
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
                                            to: "/dashboard/salary",
                                            title: "Employees Salary"
                                        },
                                    ]}
                                />
                                <DashboardSideItems
                                    icon={<MdModelTraining className='text-2xl' />}
                                    title='Training'
                                    subMenus={[
                                        {
                                            to: "/dashboard/training",
                                            title: "Training List"
                                        },
                                        {
                                            to: "/dashboard/trainers",
                                            title: "Trainer"
                                        },
                                        {
                                            to: "/dashboard/trainingtype",
                                            title: "Training Type"
                                        },
                                    ]}
                                />

                                {/* ---------------------------------------------- ----*/}
                            </> : currentUser.role === "Client" ? <>
                                <DashboardSideItems
                                    icon={<AiOutlineDashboard className='text-2xl mt-2' />}
                                    title='Dashboard'
                                    subMenus={[
                                        {
                                            to: "/dashboard/client",
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
                                <DashboardSideItems
                                    icon={<GoRocket className='text-2xl mt-2' />}
                                    title='Projects'
                                    subMenus={[
                                        {
                                            to: "/dashboard/projects",
                                            title: "My Projects"
                                        },
                                    ]}
                                />
                                <DashboardSideItems
                                    icon={<MdSupportAgent className='text-2xl mt-2' />}
                                    title='Supports'
                                    subMenus={[
                                        {
                                            to: "/dashboard/projects",
                                            title: "Tickets"
                                        },
                                    ]}
                                />
                                <DashboardSideItems
                                    icon={<TbFileInvoice className='text-2xl mt-2' />}
                                    title='Billing'
                                    subMenus={[
                                        {
                                            to: "/dashboard/projects",
                                            title: "Billing"
                                        },
                                    ]}
                                />
                                <DashboardSideItems
                                    icon={<BsChatDots className='text-2xl mt-2' />}
                                    title='Chat'
                                    subMenus={[
                                        {
                                            to: "/dashboard/projects",
                                            title: "Chat"
                                        },
                                    ]}
                                />

                                {/* ------------------------------------------------------- */}
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
                                            title: "All Attendance"
                                        },
                                    ]}
                                />
                                <DashboardSideItems
                                    icon={<AiOutlineUser className='text-2xl mt-2' />}
                                    title='My Leaves'
                                    subMenus={[
                                        {
                                            to: "/dashboard/myTeam",
                                            title: "My Leaves"
                                        },
                                    ]}
                                />
                                <DashboardSideItems
                                    icon={<AiOutlineUser className='text-2xl mt-2' />}
                                    title='My Team'
                                    subMenus={[
                                        {
                                            to: "/dashboard/myTeam",
                                            title: "My Team"
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