import React, { useState } from "react";
import { toast } from "react-hot-toast";
import EmployeeList from "./EmployeeList";
import SelectedEmployees from "./SelectedEmployees";

const AddTeamModal = ({ setShown, refetch }) => {
  const [leadersEmployees, setLeadersEmployees] = useState([]);
  const [MembersEmployees, setMembersEmployees] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [membersLoading, setMembersLoading] = useState(false);
  const [hidden, setHidden] = useState("hidden");

  const handleAddTeam = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const progressed = Number(e.target.progressed.value) || 0
    const cost = e.target.cost.value
    const createdby = e.target.createdby.value
    const status = e.target.status.value || "pending"
    const created = e.target.created.value
    const deadline = e.target.deadline.value
    const details = e.target.details.value

    const team = { name, progressed, cost, createdby, status, created, deadline, details }

    fetch(`https://perform-tracker-server.vercel.app/teams`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(team)
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Team is successfully added!')
        refetch()
        e.target.reset()
        setShown(false);
      })
      .catch(err => console.error(err))
  }

  const searchEmployee = (e, setLoadingFunc, setEmployees) => {
    setLoadingFunc(true);
    setHidden("");
    setEmployees([]);
    if (e.target.value) {
      fetch(`http://localhost:5000/employee?name=${e.target.value}`)
        .then(res => res.json())
        .then(result => {
          setLoadingFunc(false);
          setEmployees(result);
        })
        .catch(err => console.error(err))
    } else {
      setHidden("hidden");
    }
  }

  const handleTeam = ({ uid, name }, setFunc) => {
    setFunc(prevState => [
      ...prevState,
      { uid, name }
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
            </div>
            <div>
              <input
                name="teamId"
                className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                placeholder="Team ID"
                type="text"
              />
            </div>
            <div className="relative">
              <div className="flex flex-wrap bg-gray-900  rounded-lg border-gray-200">
                {
                  leaders.length > 0 && <SelectedEmployees
                    selectedEmployees={leaders}
                  />
                }
                <input
                  name="leader"
                  className="flex-1 rounded-lg border-0 outline-none p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                  placeholder="Leader"
                  type="text"
                  onKeyUp={(e) => searchEmployee(e, setLoading, setLeadersEmployees)}
                />
              </div>
              <EmployeeList
                hidden={hidden}
                loading={loading}
                employees={leadersEmployees} handleEmployee={handleTeam}
                setStateFunc={setLeaders}
              />
            </div>
            <div className="relative">
              <div className="flex flex-wrap bg-gray-900  rounded-lg border-gray-200">
                {
                  members.length > 0 && <SelectedEmployees
                    selectedEmployees={members}
                  />
                }
                <input
                  name="members"
                  className="flex-1 rounded-lg border-0 outline-none p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                  placeholder="Members"
                  type="text"
                  onKeyUp={(e) => searchEmployee(e,setMembersLoading, setMembersEmployees)}
                />
              </div>
              <EmployeeList
                hidden={hidden}
                loading={membersLoading}
                employees={MembersEmployees} handleEmployee={handleTeam}
                setStateFunc={setMembers}
              />
            </div>
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
