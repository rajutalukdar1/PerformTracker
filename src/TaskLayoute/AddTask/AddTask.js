import { UserPlusIcon } from '@heroicons/react/20/solid';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaRegSun, FaUserPlus } from "react-icons/fa";
import AddTaskDetails from '../AddTaskDetails/AddTaskDetails';
import { HiArrowSmRight, IconName } from "react-icons/hi";
import ConfirmationModal from '../../Page/Share/ConfirmationModal/ConfirmationModal';


const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [hidden, setHidden] = useState("hidden");

  const { data: user = [], refetch } = useQuery({
    queryKey: ["task"],
    queryFn: () =>
      fetch(`http://localhost:5000/task`).then((res) => res.json()),
  });

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    if (!title) {
      return
    }

    const task = {
      title
    }

    fetch('http://localhost:5000/task', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          form.reset()
          toast.success(' Confirmed')
          refetch();
        }
        else {
          toast.error(data.message);
        }
      })
  }

  console.log(user);
  return (

    <div className='mb-8'>
      <div className=' w-full shadow-lg bg-gray-900 pt-4 py-2  flex justify-between border-b-2 sticky  border-gray-700 '>
        {/* <button className=" shadow-xl bg-slate-100 px-2 py-1 ml-2 border border-gray-500 rounded-md">Add Task </button> */}
        <label
          onClick={() => setHidden('')}
          htmlFor="my-modal-3" className="shadow-xl bg-slate-900 px-2 py-1 ml-2 border border-gray-700 rounded-md cursor-pointer">Add Task</label>
        <div className="dropdown dropdown-end ">
          <label tabIndex={0}><FaRegSun className='px-2 py-1 mr-2 border rounded-lg text-4xl cursor-pointer'></FaRegSun></label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content  p-2 shadow bg-slate-900 rounded-box w-52 fixed">
            <li><a>Pending Task</a></li>
            <li><a>Complete Task</a></li>
            <li><a>All Task</a></li>
          </ul>
        </div>
      </div>
      <div className="grid mx-4 mt-4 grid-cols-1">
        {user?.map((task) => (
          <AddTaskDetails
            key={task._id}
            refetch={refetch}
            task={task}>

          </AddTaskDetails>
        ))}
      </div>
      <div className='mx-8'>
        <form
          onSubmit={handleSubmit}
          className={`w-full  ${hidden}`}>
          <input type="text" placeholder="Type here" name='title' className="px-2 w-full mx-auto py-3 bg-gray-900" />
          <br />
          <div className='flex justify-end gap-3 mr-3 mt-4'>
            <button className='px-4 py-2 bg-slate-700 hover:bg-slate-600 hover:text-white rounded-md shadow-lg font-bold'
              onClick={() => setHidden('hidden')}
              type="button"> Cancel</button>
            <button className='px-4 py-2 bg-primary text-white rounded-md shadow-lg flex justify-center items-center gap-2 font-bold' type="submit" > Submit <HiArrowSmRight></HiArrowSmRight> </button>
          </div>
        </form>
      </div>
      {tasks && <ConfirmationModal
        refetch={refetch}
        // setDeletingTask={setDeletingTask}
        tasks={tasks}


      ></ConfirmationModal>}




      {/* <AddTaskModal>

          </AddTaskModal> */}
    </div>



  );
};

export default AddTask;