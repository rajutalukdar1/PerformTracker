import React from 'react';
import { FaCheck, FaEllipsisV, FaRegSun, FaRegTimesCircle } from 'react-icons/fa';
import { HiCalendar, HiOutlineBars3BottomLeft, IconName } from "react-icons/hi2";

const MarkComplete = () => {
    return (
        <div className='h-screen'>
            <div className=' w-full shadow-lg bg-gray-900 pt-4 py-2 sticky flex justify-between border-b-2 border-gray-700 '>
                <button className=" shadow-xl bg-slate-900 px-2 py-1 ml-2 border border-gray-700 rounded-md flex justify-center items-center gap-2"><FaCheck></FaCheck> Mark Complete </button>
                <div className="dropdown dropdown-end ">
                    <label tabIndex={0}><FaEllipsisV className='px-2 py-1 mr-2 border rounded-lg text-4xl cursor-pointer text-slate-400'></FaEllipsisV></label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content  p-2 shadow bg-slate-900 rounded-box w-52  fixed">
                        <li><a>Delete</a></li>
                        <li><a>Edit</a></li>
                    </ul>
                </div>

            </div>
            <div className='pl-2 py-2'>
                <h2 className='text-lg font-bold text-white'>Hospital Administration Phase 1</h2>
                <div className='grid grid-cols-2 gap-4 mt-4 px-6  border-b-2 border-gray-600 pb-8'>
                    <div className='grid grid-cols-3 gap-4 hover:border-2 border-gray-600 rounded-md p-2 justify-center items-center cursor-pointer hover:bg-slate-600 text-gray-200'>
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img src="https://i.ibb.co/gPDDW7S/IMG-20220603-205920.jpg" />
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className=' whitespace-nowrap'>
                                <h2>Assigned To</h2>
                                <h2>John Doe</h2>
                            </div>
                        </div>
                        <div className='flex justify-end items-center'>
                            <div className='text-xl border-2 rounded-full'>
                                <FaRegTimesCircle className='text-white hover:text-slate-800
                        '></FaRegTimesCircle>
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-3 gap-4 hover:border-2 border-gray-600 rounded-md p-2 justify-center items-center cursor-pointer hover:bg-slate-600  text-gray-200'>
                        <div className="avatar">
                            <div className=" ext-xl border-2 rounded-full">
                                <HiCalendar className='text-xl '></HiCalendar>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className=' whitespace-nowrap'>
                                <h2>Assigned To</h2>
                                <h2>John Doe</h2>
                            </div>
                        </div>
                        <div className='flex justify-end items-center'>
                            <div className='text-xl border-2 rounded-full'>
                                <FaRegTimesCircle className='text-white hover:text-slate-800'></FaRegTimesCircle>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex gap-4 justify-between items-center mt-8 pb-6 border-b-2 border-gray-600 '>
                    <HiOutlineBars3BottomLeft className='text-4xl rounded-full p-2 shadow-xl border-2 border-gray-600 cursor-pointer '></HiOutlineBars3BottomLeft>
                    <textarea className=" px-2 py-1 w-full border-2 border-gray-600 rounded-md bg-gray-900 text-white" placeholder="Description..."></textarea>
                </div>

            </div>

        </div>
    );
};

export default MarkComplete;