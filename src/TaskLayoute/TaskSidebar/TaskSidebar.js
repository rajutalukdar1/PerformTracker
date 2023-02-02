import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TaskSidebar = () => {
    return (
        <div className='text-white pl-4 h-screen pt-6 cursor-pointer '>
            <Link to="/dashboard/admin">
            <h2  className='flex gap-2 hover:text-slate-400'> <FaHome></FaHome> Back to Home</h2>
            </Link>
            <h2 className='hover:text-slate-400 my-1'>Project Management</h2>
            <h2 className='hover:text-slate-400 my-1'>Official Management</h2>
            <h2 className='hover:text-slate-400 my-1'>Video Calling Apps</h2>
            
        </div>
    );
};

export default TaskSidebar;