import React from 'react';
import img1 from '../../../Assets/success_img/Vicky.jpg'

const ClientDetails = () => {
    return (
        <div className='mb-8 max-w-6xl mx-auto'>
            <p>Client Details</p>

            <div className="hero flex justify-between w-full bg-[#16191C]">
                <div className="hero-content flex justify-start">
                    <div className="avatar inline-block m-4">
                        <div className="w-32 rounded-full">
                            <img src={img1} alt='' />
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-white text-2xl font-semibold'>Global Technologies</p>
                        <p className='text-white font-semibold'>Barry Cuda</p>
                        <p><span className='text-white'>CEO</span></p>
                        <p className='text-white font-semibold'>Employee ID: CLT-0001</p>
                        <button className="btn btn-sm mt-8 text-white rounded bg-[#FD7265]
                         hover:bg-[#FD7265]">Send Message</button>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="divider lg:divider-horizontal text-white"></div>
                </div>
                <div className='flex justify-evenly w-full'>
                    <div className="">
                        <p className='text-white font-semibold mb-4'>Phone:</p>
                        <p className='text-white font-semibold mb-4'>Email:</p>
                        <p className='text-white font-semibold mb-4'>Birthday:</p>
                        <p className='text-white font-semibold mb-4'>Address:</p>
                        <p className='text-white font-semibold'>Gender:</p>
                    </div>
                    <div>
                        <p className='text-blue-500 mb-4'>9876543210</p>
                        <p className='text-blue-500 mb-4'>barrycuda@example.com</p>
                        <p className='text-white mb-4'>2nd August</p>
                        <p className='text-white mb-4'>5754 Airport Rd, Posada, AL, 3602</p>
                        <p className='text-white'>Male</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;