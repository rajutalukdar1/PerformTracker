import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import EmployeesReports from './EmployeesReports';

const Reports = () => {

    useTitle('Reports');

    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch('https://perform-tracker-server.vercel.app/employees')
            .then(res => res.json())
            .then(data => {
                setReports(data)
            });
    }, [])
    return (
        <div className=''>
            <div className="overflow-x-auto  w-full ">
                <table className="table w-full">
                    <thead>
                        <tr className='text-white'>
                            <th style={{ "position": "static" }}>Employee Name</th>
                            <th>Employee Type</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Joining Date</th>
                            <th>DOB</th>
                            <th>Marital Status</th>
                            <th>Gender</th>
                            <th>Salary</th>
                            <th>Address</th>
                            <th>Nationality</th>
                            <th>Contract Number</th>
                            <th>Emergency Contact</th>
                            <th>Experience</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        reports?.map(report => <EmployeesReports
                            key={report._id}
                            report={report}
                        ></EmployeesReports>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Reports;