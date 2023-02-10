
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminProgress = () => {
    const { user } = useSelector(state => state.userReducer);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 p-12 '>
                <div className='border p-3 bg-slate-900 text-gray-200'>
                    <h2 className='text-xl font-bold'>Statistics</h2>
                    <div className='border p-2 mt-1'>
                        <div className='flex justify-between'>
                            <h3>Today Leave</h3>
                            <h3>4/65</h3>
                        </div>
                        <progress className="progress progress-error w-full h-1" value="40" max="100"></progress>
                    </div>
                    <div className='border p-2 mt-1'>
                        <div className='flex justify-between'>
                            <h3>Pending Invoice</h3>
                            <h3>15/92</h3>
                        </div>
                        <progress className="progress progress-secondary w-full h-1" value="60" max="100"></progress>
                    </div>
                    <div className='border p-2 mt-1'>
                        <div className='flex justify-between'>
                            <h3>Completed Projects</h3>
                            <h3>86/112</h3>
                        </div>
                        <progress className="progress progress-accent w-full h-1" value="80" max="100"></progress>
                    </div>
                    <div className='border p-2 mt-1'>
                        <div className='flex justify-between'>
                            <h3>Open Tickets</h3>
                            <h3>190/212</h3>
                        </div>
                        <progress className="progress progress-info w-full h-1" value="70" max="100"></progress>
                    </div>
                    <div className='border p-2 mt-1'>
                        <div className='flex justify-between'>
                            <h3>Closed Tickets</h3>
                            <h3>22/212</h3>
                        </div>
                        <progress className="progress progress-success w-full h-1" value="50" max="100"></progress>
                    </div>
                </div>
                {/* <div> */}
                <div className='border p-6 bg-slate-900 text-gray-200'>
                    <h2 className='text-xl font-bold'>Task Statistics</h2>
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='border text-center p-3 w-full font-semibold'>
                            <h2>Total Tasks</h2>
                            <h3>350</h3>
                        </div>
                        <div className='border text-center p-3 w-full font-semibold'>
                            <h2>Overdue Tasks</h2>
                            <h3>19</h3>
                        </div>
                    </div>
                    <div class="relative pt-1 mt-4">
                        <div class="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                            <div className="w-[10%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500">10%</div>
                            <div className="w-[30%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400">30%</div>
                            <div className="w-[25%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-400">25%</div>
                            <div className="w-[35%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500">35%</div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <span className='text-red-500 text-2xl mr-3 mt-2'>&#9678;</span>
                                <h2>Completed Tasks</h2>
                            </div>
                            <h5>166</h5>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <span className='text-white text-2xl mr-3 mt-2'>&#9678;</span>
                                <h2>Inprogress Tasks</h2>
                            </div>
                            <h5>166</h5>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <span className='text-blue-600 text-2xl mr-3 mt-2'>&#9678;</span>
                                <h2>Pending Tasks</h2>
                            </div>
                            <h5>166</h5>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <span className='text-green-400 text-2xl mr-3 mt-2'>&#9678;</span>
                                <h2>Review Tasks</h2>
                            </div>
                            <h5>166</h5>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <span className='text-sky-400 text-2xl mr-3 mt-2'>&#9678;</span>
                                <h2>coming Tasks</h2>
                            </div>
                            <h5>166</h5>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                <div className='border p-6 bg-slate-900 text-gray-200'>
                    <h2 className='text-xl font-bold'>Today Absent <span className='text-red-500'>5</span></h2>
                    <div className='border p-2'>
                        <div className='flex items-center'>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL || 'https://i.ibb.co/Qj8XhH5/user.png'} alt='' />
                                </div>
                            </div>
                            <div>
                                <span className='hidden sm:block ml-3 font-semibold'>{user?.displayName}</span>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>
                                <h2>03 feb 2023</h2>
                                <h3>Leave Date</h3>
                            </div>
                            <div>
                                <Link
                                    class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
                                    href="/download"
                                >
                                    Active
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='border p-2 mt-5'>
                        <div className='flex items-center'>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL || 'https://i.ibb.co/Qj8XhH5/user.png'} alt='' />
                                </div>
                            </div>
                            <div>
                                <span className='hidden sm:block ml-3 font-semibold'>{user?.displayName}</span>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>
                                <h2>03 feb 2023</h2>
                                <h3>Leave Date</h3>
                            </div>
                            <div>
                                <Link
                                    class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
                                    href="/download"
                                >
                                    Pending
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <a
                            class="group flex items-center justify-between rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
                            href="/download"
                        >
                            <span class="font-medium transition-colors group-hover:text-white">
                                Lode out more
                            </span>

                            <span
                                class="ml-4 flex-shrink-0 rounded-full border border-indigo-600 hover:bg-slate-800 p-2 group-active:border-indigo-500"
                            >
                                <svg
                                    class="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProgress;