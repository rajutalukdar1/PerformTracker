import { UserPlusIcon } from '@heroicons/react/20/solid';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaRegSun, FaUserPlus} from "react-icons/fa";
import AddTaskDetails from '../AddTaskDetails/AddTaskDetails';
import { HiArrowSmRight, IconName } from "react-icons/hi";


const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [hidden, setHidden] = useState("hidden");


  const { data: user = [], refetch } = useQuery({
    queryKey: ["task"],
    queryFn: () =>
      fetch(`http://localhost:5000/task`).then((res) => res.json()),
  });

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
        const title = form.title.value;

        const task={
          title
      }

      fetch('http://localhost:5000/task',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                
                toast.success(' Confirmed')
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })
        

    }

  console.log(user);
    return (

      <div>
          <div className=' w-full shadow-lg bg-white pt-4 py-2  flex justify-between border-b-2 sticky  border-gray-400 '>
          {/* <button className=" shadow-xl bg-slate-100 px-2 py-1 ml-2 border border-gray-500 rounded-md">Add Task </button> */}
          <label
          onClick={() => setHidden('')}
           htmlFor="my-modal-3" className="shadow-xl bg-slate-100 px-2 py-1 ml-2 border border-gray-500 rounded-md cursor-pointer">Add Task</label>


            
        
        <div className="dropdown dropdown-end ">
          <label tabIndex={0}><FaRegSun className='px-2 py-1 mr-2 border rounded-lg text-4xl cursor-pointer'></FaRegSun></label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-52  fixed">
            <li><a>Pending Task</a></li>
            <li><a>Complete Task</a></li>
            <li><a>All Task</a></li>
          </ul>
        </div>
           
          
          </div>
          <div className="grid mx-4 mt-4  grid-cols-1">
        {user?.map((task) => (
          <AddTaskDetails key={task._id} task={task}></AddTaskDetails>
        ))}
      </div>
      <div className='mx-8'>
      <form 
      onSubmit={handleSubmit}
      className={`w-full  ${hidden}`}>
            <input type="text"  placeholder="Type here" name='title' className="p-1 w-full  mx-auto  py-3  " />
            <br />
            <div className='flex justify-end gap-3 mr-3 mt-4'>
            
            <button className='px-4 py-2 bg-slate-200 hover:bg-slate-500 hover:text-white rounded-md shadow-lg font-bold'
            onClick={() => setHidden('hidden')}
            type="button"> Cancel</button>
            <button className='px-4 py-2 bg-slate-200 hover:bg-slate-500 hover:text-white rounded-md shadow-lg flex justify-center items-center gap-2 font-bold' type="submit" > Submit <HiArrowSmRight></HiArrowSmRight> </button>
            </div>
          </form>
      </div>
      {/* {tasks && <AddTaskModal
        refetch={refetch}
        setTasks={setTasks}
        tasks={tasks}
      ></AddTaskModal>} */}

      
          {/* <AddTaskModal>

          </AddTaskModal> */}
          </div>
          
       
        
    );
};

export default AddTask;