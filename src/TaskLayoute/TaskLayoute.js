import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../Page/Share/DashboardNav/DashboardNav';



const TaskLayoute = () => {
    return (
        <div className=''>
            <div className=''>
            <DashboardNav />
            </div>
            <div className='pt-16    md:pt-20'>
            <Outlet></Outlet>
            </div>
            
               
                
            
            
            
        </div>
    );
};

export default TaskLayoute;