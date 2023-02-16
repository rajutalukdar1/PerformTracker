import React from 'react'

const EmployeeList = ({hidden, loading, employees, handleEmployee, setStateFunc}) => {
  return (
    <div className={`w-full absolute bottom-12 max-h-[120px] bg-[#000] rounded-lg overflow-y-auto ${hidden}`}>
      <ul className="menu mx-2 my-1">
        {
          !loading ? employees.map(employee => <li
            key={employee._id}
            className="flex-row items-center gap-2 my-1 py-1 px-2 bg-gray-900 hover:bg-slate-700 rounded-md"
            onClick={() => handleEmployee({ uid: employee.uid, name: employee.name }, setStateFunc)}
          >
            <div className="p-0">
              <div className="avatar">
                <div className="w-6 rounded-full bg-slate-200">
                  <img src={employee.img} />
                </div>
              </div>
            </div>
            <span className="p-0">{employee.name}</span>
          </li>) : <p>Loading...</p>
        }
      </ul>
    </div>
  )
}

export default EmployeeList