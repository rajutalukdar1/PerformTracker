import React from 'react'
import { FaTimes } from "react-icons/fa";

const SelectedEmployees = ({selectedEmployees}) => {
  return (
    <div className="flex flex-wrap gap-1 px-1 py-2 items-center">
      {
        selectedEmployees.map(employee => <div className="badge badge-info gap-2">
          <span>{employee.name}</span>
          <FaTimes />
        </div>)
      }
    </div>
  )
}

export default SelectedEmployees