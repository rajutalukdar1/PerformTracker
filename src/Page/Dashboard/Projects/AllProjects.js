import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { GoRocket } from 'react-icons/go';
import QueryBar from '../../Share/QueryBar/QueryBar';
import Project from './Project';

const AllProjects = () => {

  const { data: projects = [], refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: () =>
      fetch(`http://localhost:5000/projects`).then(res => res.json()),
  });

  console.log(projects);
  return (
    <div>
      <QueryBar
        barData={{
          pageName: "Projects"
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
        {
          projects.map(project => <Project
            key={project._id}
            project={project}
          />)
        }
      </div>
    </div>
  )
}

export default AllProjects