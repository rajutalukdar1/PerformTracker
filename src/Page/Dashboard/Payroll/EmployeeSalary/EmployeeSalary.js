import { useQuery } from '@tanstack/react-query';
import React from 'react'
import QueryBar from '../../../Share/QueryBar/QueryBar'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBinLine } from 'react-icons/ri';

const EmployeeSalary = () => {
  const { data: employees = [], refetch } = useQuery({
    queryKey: ['employees'],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/employees`).then(res => res.json()),
  });

  const handleSalaryDelete = (id) => {

  }

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
      <div className="overflow-x-auto pb-5">
        <table className="table table-zebra w-full">
          <thead>
            <tr className='bg-gray-900'>
              <th className='bg-gray-900'>Employee</th>
              <th className='bg-gray-900'>Employee ID</th>
              <th className='bg-gray-900'>Email</th>
              <th className='bg-gray-900'>Join Date</th>
              <th className='bg-gray-900'>Role</th>
              <th className='bg-gray-900'>Salary</th>
              <th className='bg-gray-900'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(employee => <tr
                key={employee._id}
              >
                <td>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center">
                      <div className="avatar">
                        <div className="w-10 rounded-full bg-gray-200">
                          <img src={employee.img} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className='leading-4'>{employee.name}</h4>
                      <p><small>{employee.designation}</small></p>
                    </div>
                  </div>
                </td>
                <td>{employee.employeeId}</td>
                <td>{employee.email}</td>
                <td>{employee.joiningDate}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                <td>
                  <div className="dropdown relative">
                    <div tabIndex={0}>
                      <h2 className="text-center mt-3 ml-4 font-semibold text-gray-500 text-xl cursor-pointer"><BsThreeDotsVertical /> </h2>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 bg-gray-800 rounded-box w-40 absolute right-0"
                    >
                      <li className='bg-transparent'>
                        <label onClick={() => { }} htmlFor="editSalaryModal"><a className="flex items-center text-bold"> <FaPencilAlt className=" mr-3" />Edit</a> </label>
                      </li>
                      <li>
                        <span className="text-bold" onClick={() => handleSalaryDelete(employee._id)} > <RiDeleteBinLine />Delete</span>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeSalary