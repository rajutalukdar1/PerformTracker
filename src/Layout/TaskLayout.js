import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import DashboardNav from '../Page/Share/DashboardNav/DashboardNav';

const TaskLayout = () => {
    const { user } = useSelector(state => state.userReducer);
    const { theme } = useSelector(state => state.themeReducer);

    const { data: currentUser = {} } = useQuery({
        queryKey: ['currentUser', user?.uid],
        queryFn: () =>
            fetch(`https://perform-tracker-server.vercel.app/users?uid=${user?.uid}`).then(res => res.json()),
    });

    const { data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: () =>
            fetch(`https://perform-tracker-server.vercel.app/projects`).then(res => res.json()),
    });

    return (
        <div className='' data-theme={theme}>
            <DashboardNav
                currentUser={currentUser}
            />
            <div className="drawer drawer-mobile pt-16 md:pt-10">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle peer" />
                <div className="drawer-content md:py-10 lg:ml-[222px] h-auto">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side fixed h-full w-0 lg:w-[220px] peer-checked:w-full lg:peer-checked:w-[220px] ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu bg-black text-base-content font-semibold py-5 w-full sm:w-[220px] pl-6 pt-16">
                        {/* <div className='text-white pl-4 h-screen pt-6 cursor-pointer '> */}
                        <Link to="/dashboard/admin">
                            <h2 className='flex items-center gap-2 hover:text-white text-slate-400 cursor-pointer my-1 '> <FaHome className='text-white text-xl'></FaHome> Back to Home</h2>
                        </Link>
                        <h2 className='hover:text-white text-slate-400 cursor-pointer my-1'>
                            <Link to="/dashboard/tasks/all-tasks">All Tasks</Link>
                        </h2>
                        {
                            projects.map(project => <h2 key={project._id} className='hover:text-white text-slate-400 cursor-pointer my-1'>
                                <Link to={`/dashboard/tasks/project/${project._id}`}>{project.name}</Link>
                            </h2>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TaskLayout;