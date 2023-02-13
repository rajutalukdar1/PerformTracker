import React from 'react';
import { FaTicketAlt, FaUmbrellaBeach } from 'react-icons/fa';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiBriefcase } from "react-icons/bi";
import EmployeesRechart from './EmoloyeesRechart/EmoloyeesRechart';
import EmployeeTeam from './EmoloyeesTeam/EmoloyeesTeam';

const Employees = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl'>Welcome Employees !!!</h2>
                <h4>Dashboard</h4>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 mt-10'>
                <div>
                    <div className="stats shadow-md w-full h-36   bg-purple-600">
                        <div className="stat flex justify-between text-white">
                            <div className='font-semibold'>
                                <h2 className='text-2xl '>
                                    New Tickets
                                    <div className='mt-3'>23</div>
                                </h2>
                                <div className='mt-2 text-sm'>
                                    <div>
                                        <h2>18% Higher Then Last Month</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='place-self-center'>
                                <FaTicketAlt size='3em'></FaTicketAlt>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stats shadow-md w-full h-36   bg-green-500">
                        <div className="stat flex justify-between text-white">
                            <div className='font-semibold'>
                                <h2 className='text-2xl '>
                                    Ticket Resolved
                                    <div className='mt-3'>20</div>
                                </h2>
                                <div className='mt-2 text-sm'>
                                    <div>
                                        <h2>21% Higher Then Last Month</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='place-self-center'>
                                <IoIosCheckmarkCircleOutline size='3em'></IoIosCheckmarkCircleOutline>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stats shadow-md w-full h-36   bg-orange-600">
                        <div className="stat flex justify-between text-white">
                            <div className='font-semibold'>
                                <h2 className='text-2xl '>
                                    Project Assigned
                                    <div className='mt-3'>13</div>
                                </h2>
                                <div className='mt-2 text-sm'>
                                    <div>
                                        <h2>37% Higher Then Last Month</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='place-self-center'>
                                <BiBriefcase size='3em'></BiBriefcase>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stats shadow-md w-full h-36   bg-sky-500">
                        <div className="stat flex justify-between text-white">
                            <div className='font-semibold'>
                                <h2 className='text-2xl '>
                                    Available Leaves
                                    <div className='mt-3'>34</div>
                                </h2>
                                <div className='mt-2 text-sm'>
                                    <div>
                                        <h2>10% Higher Then Last Month</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='place-self-center'>
                                <FaUmbrellaBeach size='3em'></FaUmbrellaBeach>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div>
                <EmployeesRechart></EmployeesRechart>
            </div>
            <div>
                <EmployeeTeam></EmployeeTeam>
            </div>
        </div >
    );
};

export default Employees;