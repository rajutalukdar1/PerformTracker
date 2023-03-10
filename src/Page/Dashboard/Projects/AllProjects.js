import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import QueryBar from '../../Share/QueryBar/QueryBar';
import AddProjects from './AddProjects/AddProjects';
import EditProjects from './EditProject/EditProject';
import Project from './Project';

const AllProjects = () => {

  // useTitle('Projects');

  const [projectData, setProjectData] = useState(null);
  const [shown, setShown] = useState(false);

  const { data: projects = [], refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/projects`).then(res => res.json()),
  });

  return (
    <div>
      <QueryBar
        barData={{
          pageName: "Projects",
          labelValue: projectData ? "editProjectModal" : "addProjectModal",
          btnOnClick: () => !shown && setShown(true),
          hidden: ""
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
        {
          projects.map(project => <Project
            key={project._id}
            project={project}
            setProjectData={setProjectData}
            refetch={refetch}
          />)
        }
      </div>
      {
        shown && <AddProjects
          refetch={refetch}
          setShown={setShown}
        />
      }
      {
        projectData &&
        <EditProjects
          project={projectData}
          setProjectData={setProjectData}
          refetch={refetch}
        />
      }

    </div>
  )
}

export default AllProjects