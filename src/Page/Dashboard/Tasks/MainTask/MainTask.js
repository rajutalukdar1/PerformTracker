import React, { useState } from 'react';
import { FaCheck, FaEllipsisV, FaRegSun } from 'react-icons/fa';
import useTitle from '../../../../hooks/useTitle';
import AddTask from '../AddTask/AddTask';
import MarkComplete from '../MarkComplete/MarkComplete';
import "./MainTask.css";


const MainTask = () => {
    const [hidden, setHidden] = useState("hidden");
    useTitle('Project Tasks');

    return (
        <div>
            <div className='flex fixed tasks-header z-[99999]'>
                <div className='w-full shadow-lg bg-gray-900 pt-4 py-2 flex justify-between border-b-2 sticky border-gray-700'>
                    <label onClick={() => setHidden('')} htmlFor="my-modal-3" className="btn btn-outline hover:text-gray-400 bg-transparent hover:bg-gray-800 ml-2">Add Task</label>
                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0}><FaRegSun className='px-2 py-1 mr-2 border rounded-lg text-4xl cursor-pointer'></FaRegSun></label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  p-2 shadow bg-slate-900 rounded-box w-52 fixed">
                            <li><a>Pending Task</a></li>
                            <li><a>Complete Task</a></li>
                            <li><a>All Task</a></li>
                        </ul>
                    </div>
                </div>
                <div className="stop w-full shadow-lg bg-gray-900 pt-4 py-2  flex justify-between border-b-2 border-l-2 fixed border-gray-700 ">
                    <button className=" shadow-xl bg-gray-900 px-2 py-1 ml-2 border border-gray-700 rounded-md flex justify-center items-center gap-2">
                        <FaCheck></FaCheck> Mark Complete{" "}
                    </button>
                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0}>
                            <FaEllipsisV className="px-2 py-1 mr-2 border rounded-lg text-4xl cursor-pointer text-slate-400"></FaEllipsisV>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content  p-2 shadow bg-gray-900 rounded-box w-52  fixed"
                        >
                            <li>
                                <a>Delete</a>
                            </li>
                            <li>
                                <a>Edit</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex pt-20'>
                <AddTask
                    hidden={hidden}
                    setHidden={setHidden}
                ></AddTask>
                <MarkComplete></MarkComplete>
            </div>
        </div>
    );
};

export default MainTask;