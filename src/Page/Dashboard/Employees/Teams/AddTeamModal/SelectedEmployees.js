import React from 'react'
import { FaTimes } from "react-icons/fa";

const SelectedEmployees = ({selectedEmployees, setStateFunc}) => {
  return (
    <div className="flex flex-wrap gap-1 px-1 py-2 items-center">
      {
        selectedEmployees.map((employee, i) => <div key={i} className="badge badge-info gap-2">
          <span>{employee.name}</span>
          <FaTimes
            onClick={() => setStateFunc(selectedEmployees.filter(emp => emp.uid !== employee.uid))}
          />
        </div>)
      }
    </div>
  )
}

export default SelectedEmployees