import React, { useEffect, useState } from 'react';
import Client from '../Client/Client';
import { FaBars, FaPlus, FaTh } from "react-icons/fa";

const Clients = () => {

    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch('https://perform-tracker-server.vercel.app/clients')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <div className='bg-slate-100 mt-6'>
            <div className='grid grid-cols-2 justify-end '>
                <div>
                    <h2 className='text-3xl font-bold p-4'>Clients</h2>
                </div>
                <div className='flex justify-end px-6 p-4 gap-4'>
                    <h2 className='cursor-pointer rounded-md p-4 bg-base-100 shadow-xl'><FaTh></FaTh></h2>
                    
                    <h2 className='cursor-pointer rounded-md p-4 bg-base-100 shadow-xl'><FaBars className='text-black'></FaBars></h2>
                    <h2 className="px-12 btn rounded-full bg-orange-500  cursor-pointer text-white"> <FaPlus className='mr-4 text-white'></FaPlus>Add Client</h2>
                </div>
            </div>
            <div className='grid gap-6 mx-4  my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-success w-full max-w-xs">SEARCH</button>
                </div>
            </div>
            <div className='grid gap-6 mx-4  my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

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