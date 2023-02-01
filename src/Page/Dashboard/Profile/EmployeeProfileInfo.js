import React from 'react';

const EmployeeProfileInfo = ({ lab, val }) => {
    return (
        <>
            <span className='font-semibold'>{lab}</span>
            <span className='break-all'>{val}</span>
        </>
    )
};

export default EmployeeProfileInfo;

