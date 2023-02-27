// import React, { useEffect, useState } from 'react';
// import useTitle from '../../../hooks/useTitle';
// import QueryBar from '../../Share/QueryBar/QueryBar';
// import Leaders from './Leaders';

// const Leads = () => {
//     useTitle('Leads');

//     const [leads, setLeads] = useState([]);

//     useEffect(() => {
//         fetch('https://perform-tracker-server.vercel.app/projects')
//             .then(res => res.json())
//             .then(data => setLeads(data))
//     }, []);

//     return (
//         <div className='font-semibold'>
//             <div className="mx-4">
//                 {/* <QueryBar
//                     barData={{
//                         pageName: "Leads",
//                         btnOnClick: () => setLeads([]),
//                         labelValue: "addClientModal",
//                         hidden: ""
//                     }}
//                 /> */}
//             </div>
//             <p className='text-3xl font-bold'>Leads</p>
//             <div className='flex'>
//                 <div className='mt-4 mr-1'>
//                     <p>Show</p>
//                 </div>
//                 <div>
//                     <select className="select select-bordered my-4 select-sm w-full max-w-xs">
//                         <option disabled selected>10</option>
//                         <option>25</option>
//                         <option>50</option>
//                         <option>100</option>
//                     </select>
//                 </div>
//                 <div className='mt-4 ml-1'>
//                     <p>entries</p>
//                 </div>
//             </div>
//             <div className="overflow-x-auto w-full">
//                 <table className="table w-full">
//                     <thead>
//                         <tr>
//                             <th style={{ "position": "static" }}>#</th>
//                             <th>Lead Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Project</th>
//                             <th>Assigned Staff</th>
//                             <th>Status</th>
//                             <th>Created</th>
//                         </tr>
//                     </thead>
//                     {
//                         leads?.map((lead, i) => <Leaders
//                             key={lead._id}
//                             lead={lead}
//                             i={i}
//                         />)
//                     }
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Leads;


import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import useTitle from '../../../hooks/useTitle';
import "../../../Page/Dashboard/Employees/Teams/AllTeams/AllTeams.css";
import LeadsMemberImg from './LeadsMemberImg';

const Leads = () => {
    useTitle("Leads");

    const { data: leads = [], refetch } = useQuery({
        queryKey: ['leads'],
        queryFn: () => fetch(`http://localhost:5000/projects`).then(res => res.json()),
    });

    console.log(leads);

    return (
        <div className='h-full'>
            <div className="overflow-x-auto pb-5 h-full">
                <table className="teams-table table table-zebra w-full">
                    <thead>
                        <tr className='bg-gray-900'>
                            <th className='bg-gray-900'>#</th>
                            <td className='bg-gray-900'>Image</td>
                            <th className='bg-gray-900'>Lead Name</th>
                            <th className='bg-gray-900'>Email</th>
                            <th className='bg-gray-900'>Phone</th>
                            <th className='bg-gray-900'>Project</th>
                            <th className='bg-gray-900'>Assigned Staff</th>
                            <th className='bg-gray-900'>Status</th>
                            <th className='bg-gray-900'>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leads?.map((lead, i) => <tr
                                key={lead._id}
                                i={i}
                            >
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    {
                                        lead.assignedleaders.map(leader => <LeadsMemberImg
                                            key={leader.uid}
                                            uid={leader.uid}
                                        />)
                                    }
                                </td>
                                <td>{lead.assignedleaders[0].name}</td>
                                <td>{lead.assignedleaders[0].email}</td>
                                <td>{lead.assignedleaders[0].phone}</td>
                                <td>{lead.name}</td>

                                <td className='flex'>
                                    {
                                        lead.team.length > 4 ? <>
                                            {
                                                lead.team.slice(0, 3).map(member => <LeadsMemberImg
                                                    key={member.uid}
                                                    uid={member.uid}
                                                />)
                                            }
                                            <LeadsMemberImg
                                                uid={null}
                                                txt={lead.team.slice(3, lead.team.length - 1).length}
                                            />
                                        </> :
                                            lead.team.map(member => <LeadsMemberImg
                                                key={member.uid}
                                                uid={member.uid}
                                            />)
                                    }
                                </td>
                                <td>Working</td>
                                <td>10 hours</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leads;