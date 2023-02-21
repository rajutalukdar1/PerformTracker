import { useQuery } from '@tanstack/react-query';
import { prettyFormat } from '@testing-library/react';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import EmployeeProfileInfo from './EmployeeProfileInfo';

const PersonalInfo = () => {

    const { user } = useSelector(state => state.userReducer);

    const { data: Employees = [], refetch } = useQuery({
        queryKey: ['employees', user?.email],
        queryFn: () =>
            fetch(`https://perform-tracker-server.vercel.app/employee?email=${user?.email}`).then(res => res.json()),
    });

    const { profile } = Employees;

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-6 mt-6'>
            <div className='w-full max-h-128 bg-[#16191C] text-white p-5 rounded-md'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-xl font-semibold mb-4'>Personal Information's</p>
                    </div>
                    <div>
                        <button>
                            <FaEdit />
                        </button>
                    </div>
                </div>
                <div className='grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] grid-cols-[8rem_1fr]'>
                    <EmployeeProfileInfo
                        lab='Passport No.'
                        val={profile?.personal_info?.passport_no}
                    />
                    <EmployeeProfileInfo
                        lab='Tel'
                        val={profile?.personal_info?.tel}
                    />
                    <EmployeeProfileInfo
                        lab='Nationality'
                        val={profile?.personal_info?.nationality}
                    />
                    <EmployeeProfileInfo
                        lab='Religion'
                        val={profile?.personal_info?.religion}
                    />
                    <EmployeeProfileInfo
                        lab='Marital status'
                        val={profile?.personal_info?.marital_status}
                    />
                    <EmployeeProfileInfo
                        lab='Employment of spouse'
                        val={profile?.personal_info?.employment_of_spouse}
                    />
                    <EmployeeProfileInfo
                        lab='No. of children'
                        val={profile?.personal_info?.no_of_children}
                    />
                </div>
            </div>

            <div className='w-full bg-[#16191C] text-white p-5 rounded-md'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-xl font-semibold mb-4'>Emergency Contact</p>
                    </div>
                    <div>
                        <button>
                            <FaEdit />
                        </button>
                    </div>
                </div>
                <div className='grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] grid-cols-[8rem_1fr]'>
                    <EmployeeProfileInfo
                        lab='Primary'
                        val={profile?.emergency_contact?.primary}
                    />
                    <EmployeeProfileInfo
                        lab='Relationship'
                        val={profile?.emergency_contact?.relationship}
                    />
                    <EmployeeProfileInfo
                        lab='Phone'
                        val={profile?.emergency_contact?.phone}
                    />
                </div>
                <hr className='w-full mt-2 mb-2' />
                <div className='grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] grid-cols-[8rem_1fr]'>
                    <EmployeeProfileInfo
                        lab='Secondary'
                        val={profile?.emergency_contact?.secondary}
                    />
                    <EmployeeProfileInfo
                        lab='Relationship'
                        val={profile?.emergency_contact?.relationship}
                    />
                    <EmployeeProfileInfo
                        lab='Phone'
                        val={profile?.emergency_contact?.phone}
                    />
                </div>
            </div>

            <div className='w-full bg-[#16191C] text-white p-5 rounded-md'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-xl font-semibold mb-4'>Bank Information</p>
                    </div>
                </div>
                <div className='grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] grid-cols-[8rem_1fr]'>
                    <EmployeeProfileInfo
                        lab='Bank name'
                        val={profile?.bank_information?.bank_name}
                    />
                    <EmployeeProfileInfo
                        lab='Bank account No.'
                        val={profile?.bank_information?.bank_account_no}
                    />
                    <EmployeeProfileInfo
                        lab='Phone'
                        val={profile?.emergency_contact?.phone}
                    />
                </div>

                <div className='grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] grid-cols-[8rem_1fr]'>
                    <EmployeeProfileInfo
                        lab='Secondary'
                        val='Karen Wills'
                    />
                    <EmployeeProfileInfo
                        lab='Relationship'
                        val='Brother'
                    />
                    <EmployeeProfileInfo
                        lab='Phone'
                        val='9876543210, 9876543210'
                    />
                </div>
            </div>

            <div className='w-full bg-[#16191C] text-white p-5 rounded-md'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-xl font-semibold mb-4'>Education information's</p>
                    </div>
                    <div>
                        <button>
                            <FaEdit />
                        </button>
                    </div>
                </div>
                <div className='text-[#BBC4CC]'>
                    <div>
                        <p className='text-[#616156] font-bold'>
                            {profile?.education_information?.ug}
                        </p>
                        <p>Bsc Computer Science</p>
                        <p className='text-xs'>{profile?.education_information?.ug_year}</p>
                    </div>
                    <div className='mt-4'>
                        <p className='text-[#616156] font-bold'>
                            {profile?.education_information?.pg}
                        </p>
                        <p>Msc Computer Science</p>
                        <p className='text-xs'>{profile?.education_information?.pg_year}</p>
                    </div>
                </div>
            </div>

            <div className='w-full bg-[#16191C] text-white p-5 rounded-md'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-xl font-semibold mb-4'>Experience</p>
                    </div>
                    <div>
                        <button>
                            <FaEdit />
                        </button>
                    </div>
                </div>
                <div className='text-[#BBC4CC]'>
                    <div>
                        <p className='text-[#616156] font-bold'>
                            {profile?.experience?.experience_1}
                        </p>
                        <p className='text-xs'>{profile?.experience?.experience_1_join}</p>
                    </div>
                    <div className='mt-4'>
                        <p className='text-[#616156] font-bold'>
                            {profile?.experience?.experience_2}
                        </p>
                        <p className='text-xs'>{profile?.experience?.experience_2_join}</p>
                    </div>
                    <div className='mt-4'>
                        <p className='text-[#616156] font-bold'>
                            {profile?.experience?.experience_3}
                        </p>
                        <p className='text-xs'>{profile?.experience?.experience_3_join}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;