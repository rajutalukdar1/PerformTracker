import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../Others/Loading/Loading";
import Project from "../Projects/Project";

const Projects = () => {
  const { loading, user_id } = useSelector((state) => state.userReducer);
  const { id } = useParams();
  console.log(id);

  const { data: projects = [] } = useQuery({
    queryKey: ["projects", id, user_id],
    queryFn: () =>
      fetch(
        `https://perform-tracker-server.vercel.app/employee/projects/${id ? id : user_id}`
      ).then((res) => res.json()),
  });

  console.log(projects);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
      {projects.length > 0 &&
        projects?.map((project) => <Project project={project}></Project>)}
    </div>
  );
};

export default Projects;
