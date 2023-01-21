import React from 'react';
import { Link } from 'react-router-dom';
// import img1 from '../../../Assets/success_img/Vicky.jpg'

const Client = ({ client }) => {
    const { _id, img, company, name, position } = client;
    return (
        <div>
<<<<<<< HEAD

            <div className="card w-full bg-[#16191C] rounded text-neutral-content">
=======
            <div className="card w-96 bg-[#16191C] rounded text-neutral-content">
>>>>>>> 993b8944120d5fa115d71ec53c0fa9607905d2d6
                <div className="card-body items-center text-center">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <Link to={`/dashboard/clientDetails/${_id}`}>
                                <img src={img} alt="" />
                            </Link>
                        </div>
                    </div>
                    <h2 className="card-title text-[#BBC4CC]">{company}</h2>
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