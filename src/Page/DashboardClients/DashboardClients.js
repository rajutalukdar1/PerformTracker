import React from 'react';
import { RiSecurePaymentLine } from "react-icons/ri";
import { FcBusinesswoman, FcClock } from "react-icons/fc";
import { BsClipboardPlus } from "react-icons/bs";

const DashboardClients = () => {
    return (
        <div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-44 gap-5 mt-10'>
                <div>
                    <div className="stats shadow-md w-full  bg-purple-600">
                        <div className="stat flex justify-between text-white">
                            <div className='font-semibold'>
                                <h2 className='text-xl'>
                                    Running Projects
                                    <div className='mt-3 text-2xl'>70</div>
                                </h2>
                                <div className='mt-2 text-sm'>
                                    <div>
                                        <h2>18% Higher Then Last Month</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='place-self-center'>
                                <BsClipboardPlus size='3em'></BsClipboardPlus>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stats shadow-md w-full bg-orange-600">
                        <div className="stat flex justify-between text-white">
                            <div className='font-semibold'>
                                <h2 className='text-xl '>
                                    Active Tickets
                                    <div className='mt-3 text-2xl'>650</div>
                                </h2>
                                <div className='mt-2 text-sm'>
                                    <div>
                                        <h2>07% Higher Then Last Month</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='place-self-center'>
                                <FcClock className='text-black' size='3em'></FcClock>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stats shadow-md w-full bg-green-500">
                        <div className="stat flex justify-between text-white">
                            <div className='font-semibold'>
                                <h2 className='text-xl'>
                                    Assigned Employee
                                    <div className='mt-3 text-2xl'>885</div>
                                </h2>
                                <div className='mt-2 text-sm'>
                                    <div>
                                        <h2>12% Higher Then Last Month</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='place-self-center'>
                                <FcBusinesswoman size='3em'></FcBusinesswoman>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stats shadow-md w-full bg-sky-500">
                        <div className="stat flex justify-between text-white">
                            <div className='font-semibold'>
                                <h2 className='text-xl '>
                                    Total Payments
                                    <div className='mt-3 text-2xl'>$9,456</div>
                                </h2>
                                <div className='mt-2 text-sm'>
                                    <div>
                                        <h2>10% Higher Then Last Month</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='place-self-center'>
                                <RiSecurePaymentLine size='3em'></RiSecurePaymentLine>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default DashboardClients;