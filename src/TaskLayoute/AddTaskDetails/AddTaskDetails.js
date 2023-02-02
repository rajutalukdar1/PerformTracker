import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';

const AddTaskDetails = ({task}) => {
  const [disabled, setDisabled] = useState(true);

    return (
        <div className='grid grid-cols-6 overflow-x-auto  shadow-lg bg-slate-100 hover:bg-slate-200 border border-gray-500  py-2  mx-4'>


          <div className='col-span-1 mx-auto'>
            <input type="checkbox" className="checkbox " />
          </div>
          <div className='w-full col-span-4'>
            <input type="text" defaultValue={task.title} placeholder="Type here" className="p-1 w-full max-w-xs " disabled={task.title && disabled} />
          </div>
          <div className='col-span-1'>
          <button className='whitespace-nowrap flex justify-end gap-2  visibility-hidden pointer-events-none '><FaUserPlus className='text-xl '></FaUserPlus><AiOutlineDelete className='text-xl'></AiOutlineDelete></button>
          
          </div>
          
          </div>
    );
};

export default AddTaskDetails;