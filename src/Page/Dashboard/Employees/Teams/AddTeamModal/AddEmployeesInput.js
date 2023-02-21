import React, { useState } from 'react'
import EmployeeList from './EmployeeList';
import SelectedEmployees from './SelectedEmployees';

const AddEmployeesInput = ({ handleTeam, setStateFunc, membersEmployees }) => {
  const [hidden, setHidden] = useState("hidden");
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const searchEmployee = (e) => {
    setLoading(true);
    setHidden("");
    setEmployees([]);
    if (e.target.value) {
      fetch(`http://localhost:5000/employees?name=${e.target.value}`)
        .then(res => res.json())
        .then(result => {
          setLoading(false);
          console.log("m", result.filter(employee => membersEmployees.every(member => member.uid !== employee._id)))
          setEmployees(result);
        })
        .catch(err => console.error(err))
    } else {
      setHidden("hidden");
    }
  }

  return (
      <div className="flex flex-wrap bg-gray-900  rounded-lg border-gray-200 relative">
        {
          employees.length > 0 && <SelectedEmployees
            selectedEmployees={membersEmployees}
          />
        }
        <input
          name="leader"
          className="flex-1 rounded-lg border-0 outline-none p-3 text-sm bg-gray-900 placeholder:text-gray-600"
          placeholder="Leader"
          type="text"
          onKeyUp={searchEmployee}
        // onBlur={() => setHidden("hidden")}
        />
        <EmployeeList
          hidden={hidden}
          loading={loading}
          employees={employees}
          setStateFunc={setStateFunc}
          handleEmployee={handleTeam}
        />
      </div>
  )
}

export default AddEmployeesInput