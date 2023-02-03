import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { SlDiamond } from "react-icons/sl";
import Reports from '../Dashboard/Reports/Reports';
import Rechart from '../Rechart/Rechart';
import AdminProgress from './AdminProgress/AdminProgress';

const Admin = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl'>Welcome Admin!!</h2>
                <h4>Dashboard</h4>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 mt-10'>
                <div>
                    <div className="stats shadow-md w-72 h-24 rounded-none bg-slate-800">
                        <div className="stat flex justify-between">
                            <div className="avatar place-self-center">
                                <div className="border-8 rounded-full text-white">
                                    <MdOutlineDashboard size='3em'></MdOutlineDashboard>
                                </div>
                            </div>
                            <div className='font-extrabold place-self-center text-white'>
                                <p>152</p>
                                <p>Projects</p>
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
                                <p>142</p>
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
            <div>
                <AdminProgress></AdminProgress>
            </div>
            <div className='flex'>
                <div className='w-1/2'>
                    <h2 className='text-3xl font-bold'>Clients Data</h2>
                    <Reports></Reports>
                </div>
                <div className='w-1/2'>
                    <h2 className='text-3xl font-bold'>Employees Data</h2>
                    <Reports></Reports>
                </div>
            </div>
        </div>
    );
};

export default Admin;