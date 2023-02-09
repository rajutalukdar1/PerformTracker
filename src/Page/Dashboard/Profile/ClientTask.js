import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllTasks from './AllTasks'

const ClientTask = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);
    console.log(tasks);

    return (
        <div>
            <div className="flex-none w-full bg-[#444b52] text-white lg:text-sm font-semibold 
                    rounded-b-md mt-2">
                <ul className="menu flex justify-around menu-horizontal w-full px-1">
                    <li>
                        <Link to='/dashboard/profile/client/task'>
                            All Tasks
                        </Link>
                    </li>
                    <li tabIndex={0}>
                        <Link to='/dashboard/profile/client/task'>
                            Pending Tasks
                        </Link>
                    </li>
                    <li tabIndex={0}>
                        <Link to='/dashboard/profile/client/task'>
                            Completed Tasks
                        </Link>
                    </li>
                </ul>
            </div>

            {
                tasks?.map(task => <AllTasks
                    key={task._id}
                    task={task}
                />)
            }
        </div>
    );
};

export default ClientTask;