import React, { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import EmployeeProfileInfo from '../../Profile/EmployeeProfileInfo';
import Loading from '../../../Share/Loading/Loading';
import { useSelector } from 'react-redux';

const EmployeesDetails = () => {

    // useTitle('Employee Profile');

    const { img, designation, name, email, phone, employeeId, address, maritalStatus, DOB, joiningDate, gender, nationality } = useLoaderData();

    const { user, loading } = useSelector((state) => state.userReducer);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="w-full max-w-[1440px] mx-auto mb-20">
                <div className="mx-5 md:mx-5">
                    <div
                        className="card w-full bg-[#16191C] rounded-b-none rounded-t-md
                     border-[#BBC4CC] border-b-2"
                    >
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
                            <div
                                className="flex text-white gap-4 pb-5 md:pb-0
                                border-b-2 md:border-b-0 md:border-r-2
                                border-[#BBC4CC] border-dashed"
                            >
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={`${img}`} alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[#BBC4CC]">
                                    <h3 className="text-2xl font-bold">{name}</h3>
                                    <p className="text-xs mb-2">{designation}</p>
                                    <p className="font-bold">Employee ID: {employeeId}</p>
                                    <p className="text-xs">Date of Join: {joiningDate}</p>
                                    <a
                                        className="inline-block rounded bg-[#FD7265] mt-8 px-6 py-2
                                        text-sm font-medium text-white transition hover:scale-110
                                        hover:shadow-xl focus:outline-none
                                        focus:ring active:bg-[#FD7265]"
                                        href=" "
                                    >
                                        Send Message
                                    </a>
                                </div>
                            </div>
                            <div className="grid text-[#BBC4CC] grid-cols-[8rem_1fr]">
                                <EmployeeProfileInfo
                                    lab="Phone:"
                                    val={
                                        <a className="link text-blue-600" href={`tel:${phone}`}>
                                            {phone}
                                        </a>
                                    }
                                />
                                <EmployeeProfileInfo
                                    lab="Email:"
                                    val={
                                        <a
                                            className="flex-1 link
                                     text-blue-600"
                                            href={`mailto:${email}`}
                                        >
                                            {email}
                                        </a>
                                    }
                                />
                                <EmployeeProfileInfo lab="Address:" val={address} />
                                <EmployeeProfileInfo lab="Gender:" val={gender} />
                                <EmployeeProfileInfo lab="Nationality:" val={nationality} />
                                <EmployeeProfileInfo lab="Birthday:" val={DOB} />
                                <EmployeeProfileInfo lab="Marital status:" val={maritalStatus}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex-none w-full bg-[#16191C] text-white lg:text-sm font-semibold
                    rounded-b-md"
                    >
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to="/dashboard/profile/employees">Profile</Link>
                            </li>
                            <li tabIndex={0}>
                                <Link to="/dashboard/profile/employees/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/profile/employees/bank">
                                    Bank & Statutory
                                    <span className="text-[#F62D51]">(Admin Only)</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Outlet>

                    </Outlet>
                </div>
            </div>
        </div>
    );
};

export default EmployeesDetails;