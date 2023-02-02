import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { SlDiamond } from "react-icons/sl";
import Rechart from '../Rechart/Rechart';

const Admin = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl'>Welcome Admin!!</h2>
                <h4>Dashboard</h4>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10'>
                <div>
                    <div className="stats shadow-md w-72 h-24 rounded-none bg-slate-800">
                        <div className="stat flex justify-between">
                            <div className="avatar place-self-center">
                                <div className="border-8 rounded-full text-white">
                                    <MdOutlineDashboard size='3em'></MdOutlineDashboard>
                                </div>
                            </div>
                            <div className='font-extrabold place-self-center text-white'>
                                <p>112</p>
                                <p>projects</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stats shadow-md w-72 h-24 rounded-none bg-slate-800">
                        <div className="stat flex justify-between">
                            <div className="avatar place-self-center">
                                <div className="border-8 rounded-full text-white">
                                    <HiOutlineCurrencyDollar size='3em'></HiOutlineCurrencyDollar>
                                </div>
                            </div>
                            <div className='font-extrabold place-self-center text-white'>
                                <p>112</p>
                                <p>Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stats shadow-md w-72 h-24 rounded-none bg-slate-800">
                        <div className="stat flex justify-between">
                            <div className="avatar place-self-center">
                                <div className="border-8 rounded-full text-white">
                                    <SlDiamond size='3em'></SlDiamond>
                                </div>
                            </div>
                            <div className='font-extrabold place-self-center text-white'>
                                <p>112</p>
                                <p>Tasks</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stats shadow-md w-72 h-24 rounded-none bg-slate-800">
                        <div className="stat flex justify-between">
                            <div className="avatar place-self-center">
                                <div className="border-8 rounded-full text-white">
                                    <FaUserAlt size='3em'></FaUserAlt>
                                </div>
                            </div>
                            <div className='font-extrabold place-self-center text-white'>
                                <p>220</p>
                                <p>Employees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Rechart></Rechart>
            </div>
        </div>
    );
};

export default Admin;