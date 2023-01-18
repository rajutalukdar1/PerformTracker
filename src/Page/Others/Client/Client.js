import React from 'react';
import { Link } from 'react-router-dom';

const Client = () => {
    return (
        <div>
            <p>Client design</p>
            <div className="card w-96 bg-[#16191C] rounded text-neutral-content">
                <div className="card-body items-center text-center">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <Link>
                                <img src="https://placeimg.com/192/192/people" alt='' />
                            </Link>
                        </div>
                    </div>
                    <h2 className="card-title text-[#BBC4CC]">Global Technologies</h2>
                    <p className='text-[#BBC4CC]'>Barry Cuda</p>
                    <p><span className='text-[#BBC4CC]'>CEO</span></p>
                    <div className='flex justify-evenly w-full'>
                        <div>
                            <button className='text-[#BBC4CC]'>Message</button>
                        </div>
                        <div>
                            <button className='text-[#BBC4CC]'>View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;