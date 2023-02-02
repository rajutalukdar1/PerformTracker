import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../Others/Loading/Loading';
import Project from '../Projects/Project';

const Projects = () => {
    const { user, loading } = useSelector(state => state.userReducer);

    const { data: projects = [], isLoading, refetch } = useQuery({
        queryKey: ['projects', user?.uid],
        queryFn: () =>
            fetch(`http://localhost:5000/employee/projects/${user?.uid}`).then(res => res.json()),
    });

    if (loading) {
        return <Loading />
    }

    return (
        <div className='mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
            {
                projects.length > 0
                &&
                projects?.map(project => <Project
                    project={project}
                >
                </Project>
                )
            }
        </div>
    );
};

export default Projects;