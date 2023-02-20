import React, { useState } from "react";
import { toast } from "react-hot-toast";
import AddEmployeesInput from "./AddEmployeesInput";

const AddTeamModal = ({ setShown, refetch }) => {
  const [leaders, setLeaders] = useState([]);
  const [members, setMembers] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleSetError = (data) => {
    const errorFor = Object.keys(data)[0];

    if ((typeof data[errorFor] !== "object" && !data[errorFor]) || ((errorFor === "leaders" && data[errorFor].length < 1) || (errorFor === "members" && data[errorFor].length < 2))) {
      setErrors(prevErrors => {
        if (!!prevErrors.find(err => err.for === errorFor)) {
          return prevErrors;
        }else{
          return [
            ...prevErrors,
            {
              for: errorFor,
              value: data.errorMsg
            }
          ];
        }
      })
    }else{
      setErrors(prevErrors => prevErrors.filter(err => err.for !== errorFor))
    }
  }

  const handleAddTeam = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const teamId = e.target.teamId.value

    handleSetError({name, errorMsg: "Team name is required"});
    handleSetError({teamId, errorMsg: "Team ID is required"});
    handleSetError({leaders, errorMsg: "Choose one or two leader(s)"});
    handleSetError({members, errorMsg: "Team ID is required"});

    if (errors.length > 0) {
      return;
    }
    
    const team = { name, teamId, leaders, members }
    console.log(team);
    return;
    fetch(`https://perform-tracker-server.vercel.app/teams`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(team)
    })
      .then(res => res.json())
      .then(result => {
        // toast.success('Team is successfully added!')
        // refetch()
        // e.target.reset()
        // setShown(false);
      })
      .catch(err => console.error(err))
  }

  console.log(errors)

  const handleTeam = (data, setFunc) => {
    setFunc(prevState => [
      ...prevState,
      data
    ]);
  }

  return (
    <div>
      <input type="checkbox" id="addTeamModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleAddTeam} className="space-y-4">
            <label onClick={() => setShown(false)} htmlFor="addTeamModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div>
              <input
                name="name"
                className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2"
                placeholder="Team Name"
                type="text"
                id="name"
              />
              {errors.map(err => err.for === "name" && <p className="text-error">{errors.value}</p>)}
            </div>
            <div>
              <input
                name="teamId"
                className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                placeholder="Team ID"
                type="text"
              />
            </div>
            {/* Team Leaders */}
            <AddEmployeesInput
              employeeType="Leaders"
              handleTeam={handleTeam}
              users={leaders}
              otherUsers={members}
              setStateFunc={setLeaders}
            />
            {/* Team Members */}
            <AddEmployeesInput
              employeeType="Members"
              handleTeam={handleTeam}
              users={members}
              otherUsers={leaders}
              setStateFunc={setMembers}
            />
            <div className="modal-action justify-center">
              <button className="px-3 py-2 rounded-lg bg-orange-600 text-white font-semibold" type="submit">Add Team</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeamModal;
