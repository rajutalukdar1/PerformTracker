import React from 'react';
import { FaEdit } from 'react-icons/fa';
import EmployeeProfileInfo from './EmployeeProfileInfo';

const PersonalInfo = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-6 mt-6'>
            <div className='w-full max-h-128 bg-[#16191C] text-white p-5 rounded-md'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-xl font-bold mb-4'>Personal information's</p>
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

            <div className='w-full bg-[#16191C] text-white p-5 rounded-md'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-xl font-bold mb-4'>Emergency Contact</p>
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
                        val='John Doe'
                    />
                    <EmployeeProfileInfo
                        lab='Relationship'
                        val='Father'
                    />
                    <EmployeeProfileInfo
                        lab='Phone'
                        val='9876543210, 9876543210'
                    />
                    {/* <hr className='w-full' /> */}

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
                        <p className='text-xl font-bold mb-4'>Bank Information</p>
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
                        lab='Bank name'
                        val='John ICICI Bank'
                    />
                    <EmployeeProfileInfo
                        lab='Bank account No.'
                        val='159843014641'
                    />
                    <EmployeeProfileInfo
                        lab='Phone'
                        val='9876543210, 9876543210'
                    />
                </div>
                <hr className='w-full mt-2 mb-2' />

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
        </div>
    );
};

export default PersonalInfo;