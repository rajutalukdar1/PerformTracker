import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import QueryBar from '../../../Share/QueryBar/QueryBar'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBinLine } from 'react-icons/ri';
import ConfirmationModal from '../../../Share/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';
import EditSalary from '../EditSalary/EditSalary';
import { Link } from 'react-router-dom';

const EmployeeSalary = () => {
  const [deletingSalary, setDeletingSalary] = useState(null);
  const [editingSalary, setEditingSalary] = useState(null);

  const closeModal = () => {
    setDeletingSalary(null);
  };

  const { data: employees = [], refetch } = useQuery({
    queryKey: ['employees'],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/employees`).then(res => res.json()),
  });
console.log(employees, "this employee")
  const handleDeleteSalary = (employee) => {
    fetch(`http://localhost:5000/employees/${employee._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Salary ${employee.name} deleted successfully`);
        }
      });
  };

  // const handleSalaryDelete = (id) => {

  // }

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
                      <Link to={`/dashboard/employees/${employee._id}`} className="avatar">
                        <div className="w-10 rounded-full bg-gray-200">
                          <img src={employee.img} />
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link to={`/dashboard/employees/${employee._id}`} ><h4 className='leading-4'>{employee.name}</h4></Link>
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
                      <label
                        onClick={() => setEditingSalary(employee)}
                        htmlFor="editSalaryModal"
                        className="cursor-pointer ml-2  hover:bg-slate-900 py-1 rounded-md"
                      >
                        Edit
                      </label>
                      <label
                        onClick={() => setDeletingSalary(employee)}
                        htmlFor="confirmation-modal"
                        className="cursor-pointer ml-2 my-2 hover:bg-slate-900 py-1 rounded-md"
                      >
                        Delete
              </label>
                    </ul>
                  </div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {deletingSalary && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`if you delete ${deletingSalary.name}. It cannot be undone`}
          successAction={handleDeleteSalary}
          modalData={deletingSalary}
          successButtonName="Delete"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
      {editingSalary && (
        <EditSalary
          refetch={refetch}
          employee={editingSalary}
          setEditingSalary={setEditingSalary}
        ></EditSalary>
      )}
    </div>
  )
}

export default EmployeeSalary