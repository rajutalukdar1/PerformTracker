import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import AddTaskDetails from '../AddTaskDetails/AddTaskDetails';
import { HiArrowSmRight, IconName } from "react-icons/hi";
import { useParams } from 'react-router-dom';

const AddTask = ({ hidden, setHidden }) => {
  const [tasks, setTasks] = useState([]);
  const [projectTasks, setProjectTasks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://perform-tracker-server.vercel.app/project-tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectTasks(data)
      })
  }, [id]);

  const refetch = () => {
    fetch(`https://perform-tracker-server.vercel.app/project-tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectTasks(data);
      })
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;

    if (!title) {
      return
    }

    const task = {
      title,
      projectId: id,
    }

    fetch('https://perform-tracker-server.vercel.app/tasks', {
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
  return (
    <div className='w-full mb-8'>
      <div className="grid mx-4 mt-4  grid-cols-1">
        {
          projectTasks?.map((task) => (
            <AddTaskDetails
              key={task._id}
              refetch={refetch}
              task={task}
            >
            </AddTaskDetails>
          ))
        }
      </div>
      <div className='mx-8'>
        <form
          onSubmit={handleSubmit}
          className={`w-full  ${hidden}`}>
          <input type="text" placeholder="Type here" name='title' className="pr-3 pl-4 w-full mx-auto py-3 bg-slate-800" />
          <br />
          <div className='flex justify-end gap-3 mr-3 mt-4'>
            <button
              className='btn bg-slate-900'
              onClick={() => setHidden('hidden')}
              type="button"
            >Cancel</button>
            <button className='btn bg-slate-900 flex justify-center items-center gap-2' type="submit">Submit <HiArrowSmRight></HiArrowSmRight> </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;