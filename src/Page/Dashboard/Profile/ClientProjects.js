import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import Loading from '../../Share/Loading/Loading';
import Project from '../Projects/Project';

const ClientProjects = () => {
    const { user, loading } = useSelector(state => state.userReducer);

    const { data: projects = [], refetch } = useQuery({
        queryKey: ['projects', user?.uid],
        queryFn: () =>
            fetch(`https://perform-tracker-server.vercel.app/client/projects/${user?.uid}`).then(res => res.json()),
    });

    if (loading) {
        return <Loading />
    }

    return (
        <div className='mt-6 grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
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

export default ClientProjects;