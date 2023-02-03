import React from 'react'
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  const { name, details, deadline, allTasks, assignedleaders, team, progressed } = project;
  const tasksCompleted = allTasks.filter(task => task.status === 'completed').length


  return (
    <div className="card bg-[#16191C] rounded-md text-white">
      <div className="card-body block py-6 px-4">
        <h2 className="card-title leading-4 font-semibold">{name}</h2>
        <p className='mb-2'>
          <small>{allTasks.length - tasksCompleted} open tasks, {tasksCompleted} completed tasks</small>
        </p>
        <div className='mb-6 text-gray-300'>
          <p>
            {
              details.length > 100 ? details.slice(0, 99) + "..." : details
            }
          </p>
        </div>
        <div className='mb-5'>
          <p className='font-semibold leading-4'>Deadline:</p>
          <p>
            <small>{deadline}</small>
          </p>
        </div>
        <div>
          <p className='mb-2 font-semibold'>Project Leader:</p>
          <div className="flex">
            {
              assignedleaders.map(leader => <Link className="avatar" key={leader.uid}
                to={`/dashboard/employees/${leader.uid}`} title={leader.name}>
                <div className="w-10 h-10 rounded-full">
                  <img src={leader.img} alt=" " />
                </div>
              </Link>)
            }
          </div>
          <div className='mt-5 mb-2'>
            <p className='mb-2 font-semibold'>Team:</p>
            <div className='flex'>
              {
                team && (team.length > 4 ? <> {team.slice(0, 3).map(t =>
                  <Link key={t.uid} to={`/dashboard/employees/${t.uid}`} className="avatar" title={t.name}>
                    <div className="w-10 h-10 rounded-full">
                      <img src={t.img} alt=" " />
                    </div>
                  </Link>)}
                  <div className="w-10 h-10 rounded-full bg-red-400 flex items-center 
                  justify-center text-white font-semibold cursor-pointer">
                    <small>+{team.slice(3, team.length - 1).length}5</small>
                  </div>
                </> :
                  team.map(t => <Link to={`/dashboard/employees/${t.uid}`} className="avatar">
                    <div className="w-8 h-8 rounded-full">
                      <img src={t.img} alt=" " />
                    </div>
                  </Link>))
              }
            </div>
          </div>
          <div>
            <div className='flex justify-end font-bold text-success'>{progressed}%</div>
            <progress className="progress progress-success bg-white w-full"
              value={progressed} max="100">   </progress>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project