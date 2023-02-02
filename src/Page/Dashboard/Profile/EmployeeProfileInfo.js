import React from 'react';

const EmployeeProfileInfo = ({ lab, val }) => {
    return (
        <>
            <span className='font-semibold mb-2'>{lab}</span>
            <span className='break-all'>{val}</span>
        </>
    )
};

export default EmployeeProfileInfo;

