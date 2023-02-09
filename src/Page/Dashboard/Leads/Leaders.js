import React from 'react';

const Leaders = ({ lead }) => {

    const { _id, name, details, deadline, allTasks, assignedleaders, team, progressed } = lead;

    return (
        <div>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={team[1].img}
                                        alt=' ' />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{team[1].name}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p>robin.pass36@gmail.com</p>
                    </td>
                    <td>
                        <p>{name}</p>
                    </td>
                    <th>
                        <p>{name}</p>
                    </th>
                    <th>
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-10">
                                    <img src={team[1].img}
                                        alt=' ' />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10">
                                    <img src={team[1].img}
                                        alt=' ' />
                                </div>
                            </div>
                            <div className="avatar placeholder">
                                <div className="w-10 bg-[#FD7265] text-white">
                                    <span>+15</span>
                                </div>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className='bg-[#59cc59] rounded-md'>
                            <p className='text-center text-xs text-[#056405] py-2'>Working</p>
                        </div>
                    </th>
                </tr>
            </tbody>
        </div>
    );
};

export default Leaders;