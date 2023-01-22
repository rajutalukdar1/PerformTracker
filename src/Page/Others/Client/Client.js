import React from 'react';
import { Link } from 'react-router-dom';
// import img1 from '../../../Assets/success_img/Vicky.jpg'

const Client = ({ client }) => {
    const { _id, img, company, name, position } = client;
    return (
        <div>
            <div className="card w-full  rounded text-neutral-content shadow-2xl">
                <div className="card-body bg-[#16191C] rounded-xl items-center text-center">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <Link to={`/dashboard/clientDetails/${_id}`}>
                                <img src={img} alt="" />
                            </Link>
                        </div>
                    </div>
                    <h2 className="card-title whitespace-nowrap text-[#BBC4CC]">{company}</h2>
                    <p className='text-[#BBC4CC]'>{name}</p>
                    <p><span className='text-[#BBC4CC]'>{position}</span></p>
                    <div className='flex justify-evenly w-full'>
                        <div>
                            <button className='text-[#BBC4CC]'>Message</button>
                        </div>
                        <div>
                            
                            <Link to={`/dashboard/clientDetails/${_id}`}>
                                <button className='text-[#BBC4CC]'>View Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;