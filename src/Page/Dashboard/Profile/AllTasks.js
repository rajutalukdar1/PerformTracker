import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';

const AllTasks = ({ task }) => {

    const [disabled, setDisabled] = useState(true);

    return (
        <div className='grid grid-cols-12 overflow-x-auto shadow-lg bg-[#16191C] 
         border border-gray-500 py-2 mt-1'>
            <div className='flex col-span-1 mx-auto pt-1'>
                <input type="checkbox" className="checkbox checkbox-success" />
            </div>
            <div className='w-full col-span-10 text-white'>
                <p className='text-white'>{task.name}</p>
            </div>
            <div className='col-span-1'>
                <button className='whitespace-nowrap flex justify-end gap-2'><FaUserPlus className='text-xl
                 text-slate-100'></FaUserPlus><AiOutlineDelete className='text-xl
                  text-slate-100'></AiOutlineDelete></button>
            </div>
        </div>
    );
};

export default AllTasks;