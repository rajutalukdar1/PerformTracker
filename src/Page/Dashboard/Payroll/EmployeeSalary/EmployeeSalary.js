import { useQuery } from '@tanstack/react-query';
import React from 'react'
import QueryBar from '../../../Share/QueryBar/QueryBar'

const EmployeeSalary = () => {
  const { data: employees = [], refetch } = useQuery({
    queryKey: ['employees'],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/employees`).then(res => res.json()),
  });

  return (
    <div>
      <QueryBar
        barData={{
          pageName: "Employee Salary",
          labelValue: "addSalaryModal",
          btnValue: "Add Salary",
          btnOnClick: () => { },
          // btnOnClick: () => !shown && setShown(true),
          hidden: "hidden"
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
        {
          employees.map(employee => <h2
            key={employee._id}
            className="bg-gray-900 text-center"
          >
            <span>{employee.name}</span> - ${employee.salary}
          </h2>)
        }
      </div>
    </div>
  )
}

export default EmployeeSalary