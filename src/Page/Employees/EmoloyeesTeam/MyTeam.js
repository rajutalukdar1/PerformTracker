import React from 'react';

const MyTeam = ({ report }) => {
    const { img, name, Status } = report
    return (
        <tbody className=''>
            <tr className='text-gray-300 font-bold '>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="font-bold">{name}</div>
                </td>
                <td>
                    <div className="font-bold">{Status}</div>
                </td>
            </tr>
        </tbody>
    );
};

export default MyTeam;