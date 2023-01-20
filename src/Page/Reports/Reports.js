import React, { useEffect, useState } from 'react';
import EmployeesReports from './EmployeesReports';

const Reports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(res => res.json())
            .then(data => {
                setReports(data)
            });
    }, [])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Marital Status</th>
                            <th>Nationality</th>
                        </tr>
                    </thead>
                    {
                        reports?.map(report => <EmployeesReports
                            key={report.id}
                            report={report}
                        ></EmployeesReports>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Reports;