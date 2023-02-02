import React from 'react';
import AddTask from '../AddTask/AddTask';
import MarkComplete from '../MarkComplete/MarkComplete';
import TaskSidebar from '../TaskSidebar/TaskSidebar';

const MainTask = () => {
    return (
        <div className='grid lg:grid-cols-2  '>
            {/* <div className='bg-black lg:col-span-1 col-span-0 row-span-2 hidden lg:block '>
                <TaskSidebar></TaskSidebar>
            </div> */}
            <div className=''>
                <AddTask></AddTask>
            </div>
            <div className=' border-l-2 border-gray-300 hidden lg:block'>
                <MarkComplete></MarkComplete>
            </div>
           
        </div>
    );
};

export default MainTask;