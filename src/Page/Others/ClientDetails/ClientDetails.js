import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img1 from '../../../Assets/success_img/Vicky.jpg'


const ClientDetails = () => {
    const {_id,img, company,name, email, phone, birthday, address, position, gender } = useLoaderData();
    return (
        <div className='mb-8 max-w-6xl mx-auto'>
            


            <div className="hero flex justify-between  w-full bg-[#16191C]">
                <div className="hero-content flex justify-start">
                    <div className="avatar inline-block m-4">
                        <div className="w-32 rounded-full">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='whitespace-nowrap'>
                        <p className='text-white text-2xl font-semibold'>{company}</p>
                        <p className='text-white font-semibold'>{name}</p>
                        <p><span className='text-white'>{position}</span></p>
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


// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const ClientDetails = () => {
//     const {_id,img, company } = useLoaderData();
//     return (
//         <div>
//             <p>{company}</p>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ea assumenda fugiat officiis doloribus? Voluptates voluptate aut esse facilis iusto atque, praesentium excepturi ipsa, architecto maiores minus rem laboriosam inventore.</p>
//         </div>
//     );
// };

// export default ClientDetails;