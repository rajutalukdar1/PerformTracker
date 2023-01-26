import React, { useEffect, useState } from 'react';
import Client from './Client';

const Clients = () => {

    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch('https://perform-tracker-server.vercel.app/clients')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <div>
            <div className='grid gap-4 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

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