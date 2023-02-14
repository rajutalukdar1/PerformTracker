import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import QueryBar from '../../../Share/QueryBar/QueryBar'
import "./ProjectDetails.css"

const ProjectDetails = () => {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);

  const { data: project = {}, isLoading, refetch } = useQuery({
    queryKey: ['project'],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/projects/${id}`).then(res => res.json()),
  });

  if (isLoading) {
    return;
  }

  const { _id, name, details, deadline, allTasks, assignedleaders, team, progressed, tasks, cost, created, createdby, status } = project;
  const tasksCompleted = allTasks.filter(task => task.status === 'completed').length

  return (
    <div>
      <QueryBar
        barData={{
          pageName: "Project",
          btnValue: "Edit Project",
          btnOnClick: () => setProjectDetails(project.name && project),
          hidden: "hidden"
        }}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className="card bg-slate-800 rounded-sm">
          <div className="card-body block py-6 px-4">
            <h2 className="card-title leading-4">{name}</h2>
            <p className='mb-2'>
              <small>{allTasks.length - tasksCompleted} open tasks, {tasksCompleted} completed tasks</small>
            </p>
            <div className='text-gray-300'>
              <p>{details}</p>
            </div>
          </div>
        </div>
        <div className="card bg-slate-800 rounded-sm">
          <div className="card-body block py-6 px-4">
            <h2 className="card-title mb-4">Project Details</h2>
            <div className="overflow-x-auto">
              <table className="table w-full project-details-table text-gray-300 rounded-sm">
                <tbody>
                  <tr>
                    <th className='rounded-sm'>Cost:</th>
                    <td className='text-right rounded-sm'>${cost}</td>
                  </tr>
                  <tr>
                    <th>Created On:</th>
                    <td className='text-right'>{created}</td>
                  </tr>
                  <tr>
                    <th>Created By:</th>
                    <td className='text-right'>{createdby}</td>
                  </tr>
                  <tr>
                    <th>Deadline:</th>
                    <td className='text-right'>{deadline}</td>
                  </tr>
                  <tr>
                    <th className='rounded-sm'>Status:</th>
                    <td className='text-right rounded-sm'>{status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className='flex justify-end font-bold text-gray-400 mt-5'>{progressed}%</div>
              <progress className="progress progress-success w-full" value={progressed} max="100"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails