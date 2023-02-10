import React from 'react';
import useTitle from '../../Hooks/useTitle';
import AddTask from '../AddTask/AddTask';
import MarkComplete from '../MarkComplete/MarkComplete';


const MainTask = () => {

    useTitle('All Task');

    return (
        <div className='stop grid lg:grid-cols-2  '>
            <div className='stop'>
                <AddTask></AddTask>
            </div>
            <div className=' border-l-2 border-gray-300 hidden lg:block'>
                <MarkComplete></MarkComplete>
            </div>
           
        </div>
    );
};

export default MainTask;