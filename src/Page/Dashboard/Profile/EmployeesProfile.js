import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import EmployeeProfileInfo from './EmployeeProfileInfo';

const EmployeesProfile = () => {

    const [employee, SetEmployee] = useState(null);

    const { data: Employees = [], refetch } = useQuery({
        queryKey: ['employees'],
        queryFn: () =>
            fetch(`http://localhost:5000/employees/63d144b298f23efc47e1f054`).then(res => res.json()),
    });

    const { img, name, employeeType, email, department, designation, joiningDate, DOB,
        maritalStatus, gender, EmployeeID,
        salary, address, nationality, phone, EmergencyContactDetails, Experience, Status } = Employees;

    return (
        <div>
            <div className='w-full max-w-[1440px] mx-auto mb-20'>
                <div className="mx-5 md:mx-5">
                    <div className="card w-full bg-[#16191C] rounded-lg">
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
                            <div className='flex text-white gap-4 pb-5 md:pb-0 
                            border-b-2 md:border-b-0 md:border-r-2
                        border-[#BBC4CC] border-dashed'>
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={`${img}`} alt='img' />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-[#BBC4CC]'>
                                    <h3 className="text-2xl font-bold">{name}</h3>
                                    <p className='text-xs mb-2'>{designation}</p>
                                    <p className='font-bold'>Employee ID: {EmployeeID}</p>
                                    <p className='text-xs'>Date of Join: {joiningDate}</p>
                                    <a
                                        className="inline-block rounded bg-[#FD7265] mt-8 px-6 py-2 
                                        text-sm font-medium text-white transition hover:scale-110
                                        hover:shadow-xl focus:outline-none
                                        focus:ring active:bg-[#FD7265]"
                                        href=' '
                                    >
                                        Send Message
                                    </a>
                                    {/* <div className='flex gap-2 text-primary text-2xl mt-2'>
                                        <a href=" "><FaFacebook /></a>
                                        <a href=" "><FaLinkedin /></a>
                                        <a href=" "><FaGithub /></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className='grid text-[#BBC4CC] grid-cols-[8rem_1fr]'>
                                <EmployeeProfileInfo
                                    lab='Phone:'
                                    val={<a
                                        className='link text-blue-600' href={`tel:${phone}`}>{phone}</a>}
                                />
                                <EmployeeProfileInfo
                                    lab='Email:'
                                    val={<a className='flex-1 link
                                     text-blue-600' href={`mailto:${email}`}>{email}</a>}
                                />
                                <EmployeeProfileInfo
                                    lab='Address:'
                                    val={address}
                                />
                                <EmployeeProfileInfo
                                    lab='Gender:'
                                    val={gender}
                                />
                                <EmployeeProfileInfo
                                    lab='Nationality:'
                                    val={nationality}
                                />
                                <EmployeeProfileInfo
                                    lab='Salary:'
                                    val={salary}
                                />
                                <EmployeeProfileInfo
                                    lab='Marital status:'
                                    val={maritalStatus}
                                />
                                {/* <span className='w-36 md:w-32 font-bold'>Address:</span>
                                <span>{address}</span>
                                <span className='w-36 md:w-32 font-bold'>Gender:</span>
                                <span>{gender}</span>
                                <span className='w-36 md:w-32 font-bold'>Nationality:</span>
                                <span>{nationality}</span>
                                <span className='w-36 md:w-32 font-bold'>Salary:</span>
                                <span>{salary}</span>
                                <span className='w-36 md:w-32 font-bold'>Marital status:</span>
                                <span>{maritalStatus}</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeesProfile;