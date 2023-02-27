import React from 'react';
import { Link } from 'react-router-dom';

const EmployeesReports = ({ report }) => {
    const {_id, img, name, employeeType, address, email,
        department, designation, joiningDate,
        DOB, phone, salary, maritalStatus,
        gender, EmergencyContactDetails, nationality, Experience, Status } = report

    return (
        <tbody className=''>
            <tr className='text-gray-300 font-bold'>
                <td>
                    
                    <Link to={`/dashboard/employees/${_id}`} className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className="font-bold">{name}</div>
                    </Link>
                </td>
                <td>
                    <p>{employeeType}</p>
                </td>
                <td>
                    <p>{email}</p>
                </td>
                <td>
                    <p>{department}</p>
                </td>
                <td>
                    <p>{designation}</p>
                </td>
                <td>
                    <p>{joiningDate}</p>
                </td>
                <td>
                    <p>{DOB}</p>
                </td>
                <td>
                    {maritalStatus}
                </td>
                <td>
                    <p>{gender}</p>
                </td>
                <td>
                    <p className='text-semibold'>{salary}</p>
                </td>
                <td>
                    {address}
                </td>
                <td>
                    {nationality}
                </td>
                <td>
                    {phone}
                </td>
                <td>
                    {EmergencyContactDetails}
                </td>
                <td>
                    {Experience}
                </td>
                <td>
                    {Status}
                </td>
            </tr>
        </tbody>
    );
};

export default EmployeesReports;