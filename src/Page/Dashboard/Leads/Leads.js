import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import Leaders from './Leaders';

const Leads = () => {
    useTitle('Leads');

    const [leads, setLeads] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setLeads(data))
    }, []);

    return (
        <div className='font-semibold'>
            {/* <div className="mx-4">
                <QueryBar
                    barData={{
                        pageName: "Leads",
                        btnOnClick: () => setLeads([]),
                        labelValue: "addClientModal",
                        hidden: ""
                    }}
                />
            </div> */}
            <p className='text-3xl font-bold'>Leads</p>
            <div className='flex'>
                <div className='mt-4 mr-1'>
                    <p>Show</p>
                </div>
                <div>
                    <select className="select select-bordered my-4 select-sm w-full max-w-xs">
                        <option disabled selected>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
                <div className='mt-4 ml-1'>
                    <p>entries</p>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th style={{ "position": "static" }}>#</th>
                            <th>Lead Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Project</th>
                            <th>Assigned Staff</th>
                            <th>Status</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    {
                        leads?.map((lead, i) => <Leaders
                            key={lead._id}
                            lead={lead}
                            i={i}
                        />)
                    }
                </table>
            </div>
        </div>
    );
};

export default Leads;