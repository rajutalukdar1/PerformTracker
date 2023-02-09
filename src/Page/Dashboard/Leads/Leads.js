import React, { useEffect, useState } from 'react';
import Leaders from './Leaders';

const Leads = () => {

    const [leads, setLeads] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setLeads(data))
    }, []);

    console.log(leads)

    return (
        <div>
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