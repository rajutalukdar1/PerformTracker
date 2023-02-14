import React from 'react'

const EmployeeInfo = ({lab, val}) => {
  return (
    <>
    <span className='font-bold'>{lab}</span>
    <span className='break-all'>{val}</span>
    </>
  )
}

export default EmployeeInfo