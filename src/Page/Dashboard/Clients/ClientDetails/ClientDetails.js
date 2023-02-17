import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import img1 from '../../../Assets/success_img/Vicky.jpg'

const ClientDetails = () => {
    const { img, company, name, email, phone, birthday, address, position, gender, clientId } = useLoaderData();
    return (
        <div className='mb-8 lg:max-w-screen-lg mx-5 lg:mx-auto'>

            <div className="lg:flex sm:block justify-between rounded-xl shadow-sm
             py-4 lg:w-full sm:w-full bg-[#16191C]">
                <div className="hero-content lg:w-1/2 sm:w-full flex justify-start">
                    <div className="avatar inline-block m-4">
                        <div className="w-32 rounded-full">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='whitespace-nowrap'>
                        <p className='text-white text-2xl font-semibold'>{company}</p>
                        <p className='text-white font-semibold'>{name}</p>
                        <p><span className='text-white'>{position}</span></p>
                        <p className='text-white font-semibold'>Client ID: {clientId}</p>

                        <a
                            className="inline-block rounded bg-[#FD7265] mt-8 px-6 py-2 text-sm font-medium
                             text-white transition hover:scale-110 hover:shadow-xl focus:outline-none
                              focus:ring active:bg-[#FD7265]"
                            href=' '
                        >
                            Send Message
                        </a>
                    </div>
                </div>

                <div className='flex justify-evenly lg:w-1/2 sm:w-full'>
                    <div className="">
                        <p className='text-white font-semibold mb-4'>Phone:</p>
                        <p className='text-white font-semibold mb-4'>Email:</p>
                        <p className='text-white font-semibold mb-4'>Birthday:</p>
                        <p className='text-white font-semibold mb-4'>Address:</p>
                        <p className='text-white font-semibold'>Gender:</p>
                    </div>
                    <div>
                        <p className='text-blue-500 mb-4'>{phone}</p>
                        <p className='text-blue-500 mb-4'>{email}</p>
                        <p className='text-white mb-4'>{birthday}</p>
                        <p className='text-white mb-4'>{address}</p>
                        <p className='text-white'>{gender}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ClientDetails;
