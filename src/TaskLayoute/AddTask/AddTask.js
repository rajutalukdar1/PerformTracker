import { UserPlusIcon } from '@heroicons/react/20/solid';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineDelete} from "react-icons/ai";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegSun, FaUserPlus} from "react-icons/fa";
import AddTaskDetails from '../AddTaskDetails/AddTaskDetails';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import TaskModal from '../TaskModal/TaskModal';

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
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
           
          
          </div>
          <div className="grid mx-4 mt-4  grid-cols-1">
        {user?.map((task) => (
          <AddTaskDetails key={task._id} task={task}></AddTaskDetails>
        ))}
      </div>
      <div>
      <form 
      onSubmit={handleSubmit}
      className={`w-full col-span-4 ${hidden}`}>
            <input type="text"  placeholder="Type here" name='title' className="p-1 w-full max-w-xs " />
            <button type="submit" > Submit</button>
            <button
            onClick={() => setHidden('hidden')}
            type="button"> Cancel</button>
          </form>
      </div>
      {/* {tasks && <AddTaskModal
        refetch={refetch}
        setTasks={setTasks}
        tasks={tasks}
      ></AddTaskModal>} */}

      <TaskModal></TaskModal>
          {/* <AddTaskModal>

          </AddTaskModal> */}
          </div>
          
       
        
    );
};

export default AddTask;