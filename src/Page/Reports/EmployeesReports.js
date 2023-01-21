import React from 'react';

const EmployeesReports = ({ report }) => {
    const { img, name, address, phone, salary, maritalStatus,
        nationality } = report
    return (
        <tbody>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="text-sm opacity-50"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="font-bold">{name}</div>
                </td>
                <td>
                    <p className='text-semibold'>{salary}</p>
                </td>
                <th>
                    {phone}
                </th>
                <th>
                    {address}
                </th>
                <th>
                    {maritalStatus}
                </th>
                <th>
                    {nationality}
                </th>
            </tr>
        </tbody>
        // <tbody>
        //     <tr>
        //         <th>1</th>
        //         <td>Cy Ganderton</td>
        //         <td>Quality Control Specialist</td>
        //         <td>Blue</td>
        //     </tr>
        //     <tr>
        //         <th>2</th>
        //         <td>Hart Hagerty</td>
        //         <td>Desktop Support Technician</td>
        //         <td>Purple</td>
        //     </tr>
        //     <tr>
        //         <th>3</th>
        //         <td>Brice Swyre</td>
        //         <td>Tax Accountant</td>
        //         <td>Red</td>
        //     </tr>
        // </tbody>
    );
};

export default EmployeesReports;