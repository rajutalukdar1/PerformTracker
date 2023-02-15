import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllTasks = () => {
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: () =>
      fetch(`http://localhost:5000/tasks`).then(res => res.json()),
  });

  return (
    <div className='mt-8 max-w-[900px] mx-auto'>
      <h3 className='text-center text-2xl font-semibold mb-5'>All Tasks</h3>
      {
        tasks.map(task => <div className="flex gap-3 bg-slate-900 hover:bg-slate-800 border border-gray-700 py-2 px-4 mx-4">
          <div className='mt-1'>
            <input
              defaultChecked
              type="checkbox"
              className={`checkbox ${task.status === "completed" && "checkbox-success"}`}
              disabled
            />
          </div>
          <div className='mt-1'>
            <p>{task.title}</p>
          </div>
        </div>)
      }
    </div>
  );
};

export default AllTasks;