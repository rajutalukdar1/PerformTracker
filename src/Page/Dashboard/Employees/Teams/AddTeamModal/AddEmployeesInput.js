import React, { useEffect, useRef, useState } from 'react'
import EmployeeList from './EmployeeList';
import SelectedEmployees from './SelectedEmployees';

const AddEmployeesInput = ({ employeeType, handleTeam, setStateFunc, users }) => {
  const [hidden, setHidden] = useState("hidden");
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const inputRef = useRef(null)
  const selectRef = useRef(null)

  const searchEmployee = (e) => {
    setLoading(true);
    setHidden("");
    setEmployees([]);
    if (e.target.value) {
      fetch(`http://localhost:5000/employees?name=${e.target.value}`)
        .then(res => res.json())
        .then(result => {
          setLoading(false);
          setEmployees(result.filter(employee => users.every(member => member.uid !== employee._id)));
        })
        .catch(err => console.error(err))
    } else {
      setHidden("hidden");
    }
  }

  const handleListShow = e => {
    if(e.relatedTarget){
      setHidden("hidden");
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if ((inputRef.current && !inputRef.current.contains(e.target)) && (selectRef.current && !selectRef.current.contains(e.target))) {
        setHidden("hidden");
      }
    })
  }, [])

  return (
      <div className="flex flex-wrap bg-gray-900  rounded-lg border-gray-200 relative">
        {
          users.length > 0 && <SelectedEmployees
            selectedEmployees={users}
            setStateFunc={setStateFunc}
          />
        }
        <input
          name={employeeType.toLowerCase()}
          className="flex-1 rounded-lg border-0 outline-none p-3 text-sm bg-gray-900 placeholder:text-gray-600"
          placeholder={employeeType}
          type="text"
          onKeyUp={searchEmployee}
          onBlur={handleListShow}
          ref={inputRef}
        />
        <EmployeeList
          hidden={hidden}
          loading={loading}
          employees={employees}
          setEmployees={setEmployees}
          setStateFunc={setStateFunc}
          handleEmployee={handleTeam}
          selectRef={selectRef}
          inputRef={inputRef}
        />
      </div>
  )
}

export default AddEmployeesInput