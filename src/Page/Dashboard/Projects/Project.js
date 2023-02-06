import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';

const Project = ({ project, setProjectData }) => {
  const { _id, name, details, deadline, allTasks, assignedleaders, team, progressed } = project;
  const tasksCompleted = allTasks.filter(task => task.status === 'completed').length

  const handleProjectDelete = (id) => {

  }

  return (
    <div className="card light:bg-slate-200 bg-[#16191C] text-white rounded-sm">
      <div className="card-body block py-6 px-4 relative">
        <h2 className="card-title leading-4">
          <Link to={`/dashboard/projects/${_id}`}>{name}</Link>
        </h2>
        <p className='mb-2'>
          <small>{allTasks.length - tasksCompleted} open tasks, {tasksCompleted} completed tasks</small>
        </p>
        <div className='mb-6 text-gray-300 light:text-gray-500'>
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
        <div className="dropdown dropdown-bottom dropdown-left absolute top-2 right-3">
          <div tabIndex={0}>
            <h2 className="text-center mt-3 ml-4 font-semibold text-gray-500 text-xl cursor-pointer"><BsThreeDotsVertical /> </h2>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 border-2 bg-white rounded-box w-40"
            style={{ "top": "30px", "right": "5px" }}
          >
            <li className='bg-transparent'>
              <label onClick={() => setProjectData(project)} htmlFor="editProjectModal"><a className="flex items-center text-bold"> <GrEdit className=" mr-3" />Edit</a> </label>
            </li>
            <li>
              <Link className="text-bold" onClick={() => handleProjectDelete(_id)} > <RiDeleteBinLine />Delete</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project