import React from 'react';
import { useQuery } from '@tanstack/react-query';
import EmployeeProfileInfo from './EmployeeProfileInfo';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../../Share/Loading/Loading';
import { useSelector } from 'react-redux';

const ClientProfile = () => {
    const { user, loading } = useSelector(state => state.userReducer);

    const { data: client = [], refetch } = useQuery({
        queryKey: ['client'],
        queryFn: () =>
            fetch(`https://perform-tracker-server.vercel.app/client?email=${user?.email}`).then(res => res.json()),
    });

    console.log(client)
    console.log(user.uid)

    const { employee_id, company, name, email, birthday, phone, address, img, position, gender } = client;

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <div className='w-full max-w-[1440px] mx-auto mb-20'>
                <div className="mx-5 md:mx-5">
                    <div className="card w-full bg-[#16191C] rounded-b-none rounded-t-md
                     border-[#BBC4CC] border-b-2">
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
                                    <h3 className="text-2xl font-bold">{company}</h3>
                                    <p className='font-bold'>{name}</p>
                                    <p className='text-sm font-semibold mb-2'>{position}</p>
                                    <p className='text-sm font-semibold'>Employee ID : {employee_id}</p>
                                    <a
                                        className="inline-block rounded bg-[#FD7265] mt-8 px-6 py-2 
                                        text-sm font-medium text-white transition hover:scale-110
                                        hover:shadow-xl focus:outline-none
                                        focus:ring active:bg-[#FD7265]"
                                        href=' '
                                    >
                                        Send Message
                                    </a>
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
                                    lab='Birthday:'
                                    val={birthday}
                                />
                                <EmployeeProfileInfo
                                    lab='Address:'
                                    val={address}
                                />
                                <EmployeeProfileInfo
                                    lab='Gender:'
                                    val={gender}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-none w-full bg-[#16191C] text-white lg:text-sm font-semibold 
                    rounded-b-md">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/dashboard/profile/client'>
                                    Projects
                                </Link>
                            </li>
                            <li tabIndex={0}>
                                <Link to='/dashboard/profile/client/task'>
                                    Task
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

export default ClientProfile;