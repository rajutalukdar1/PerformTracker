import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import AddTask from '../../Dashboard/Tasks/AddTask/AddTask';
import MyTeam from './MyTeam';

const EmployeeTeam = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch('https://perform-tracker-server.vercel.app/employees')
            .then(res => res.json())
            .then(data => {
                setReports(data)
            });
    }, [])


    const data = [
        {
            "id": 1,
            "name": "React",
            "logo": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
            "total": 8
        },
        {
            "id": 2,
            "name": "JavaScript",
            "logo": "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
            "total": 9
        },
        {
            "id": 4,
            "name": "CSS",
            "logo": "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
            "total": 8
        },
        {
            "id": 5,
            "name": "Git",
            "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
            "total": 11
        }
    ];

    return (

        <div className='grid grid-cols-3 gap-3 mt-5 '>
            <div className="overflow-x-auto  w-full border border-black shadow-2xl">
                <table className="table w-full">
                    <thead>
                        <tr className='text-white'>
                            <th>Avatar</th>
                            <th style={{ "position": "static" }}>Employee Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        reports?.map(report => <MyTeam
                            key={report._id}
                            report={report}
                        ></MyTeam>)
                    }
                </table>
            </div>
            <div className='border border-black shadow-2xl'>
                <AddTask></AddTask>
            </div>
            <div className='border border-black shadow-2xl'>
                <div>
                    <BarChart width={400} height={400} data={data}>
                        <Bar dataKey="total" fill="#8884d8" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default EmployeeTeam;