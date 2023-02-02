import React from 'react';
import { FaEdit } from 'react-icons/fa';
import EmployeeProfileInfo from './EmployeeProfileInfo';

const PersonalInfo = () => {
    return (
        <div>
            <div className='w-full max-w-xl bg-[#16191C] mt-4 text-white p-5'>

                <div className='flex justify-between'>
                    <div>
                        <p>Personal information's</p>
                    </div>
                    <div>
                        <button>
                            <FaEdit />
                        </button>
                    </div>
                </div>
                <div className='grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] sm:grid-cols-[8rem_1fr]'>
                    <EmployeeProfileInfo
                        lab='Passport No.'
                        val='9876543210'
                    />
                    <EmployeeProfileInfo
                        lab='Passport No.'
                        val='9876543210'
                    />
                    <EmployeeProfileInfo
                        lab='Tel'
                        val='9876543210'
                    />
                    <EmployeeProfileInfo
                        lab='Nationality'
                        val='Bangladeshi'
                    />
                    <EmployeeProfileInfo
                        lab='Religion'
                        val='Islam'
                    />
                    <EmployeeProfileInfo
                        lab='Marital status'
                        val='Unmarried'
                    />
                    <EmployeeProfileInfo
                        lab='Employment of spouse'
                        val='No'
                    />
                    <EmployeeProfileInfo
                        lab='No. of children'
                        val='2'
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;