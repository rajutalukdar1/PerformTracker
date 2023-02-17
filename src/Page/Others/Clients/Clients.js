import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useTitle from '../../../hooks/useTitle';
import Client from '../Client/Client';
import Loading from '../Loading/Loading';

const Clients = () => {

    const { loading } = useSelector(state => state.userReducer);

    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch('https://perform-tracker-server.vercel.app/clients')
            .then(res => res.json())
            .then(data => setClients(data))
    }, []);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='grid gap-4 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    clients.map(client => <Client
                        key={client._id}
                        client={client}
                    ></Client>)
                }
            </div>
        </div>
    );
};

export default Clients;