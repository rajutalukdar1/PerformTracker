import React from "react";
import { toast } from "react-hot-toast";

const AddProjects = ({ setShown, refetch }) => {

  const handleAddProject = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const progressed = Number(e.target.progressed.value)
    const cost = e.target.cost.value
    const createdby = e.target.createdby.value
    const status = e.target.status.value
    const created = e.target.created.value
    const deadline = e.target.deadline.value
    const details = e.target.details.value
    // const assignedleaders = e.target.assignedleaders.value
    // const team = e.target.team.value

    const allTasks = [
      { name: "Patient appointment booking", status: "completed" },
      { name: "Appointment booking with payment gateway", status: "completed" },
      { name: "Doctor available module", status: "pending" },
      { name: "Patient Profile add", status: "completed" },
      { name: "Patient and Doctor video conferencing", status: "completed" }
    ]
    const assignedleaders = [
      { name: "Raju Talukder", uid: "63d144b298f23efc47e1f053", img: "https://i.ibb.co/f183SSQ/about.jpg" }
    ]
    const team = [
      { name: "Sumon Kaysar", uid: "63d144b298f23efc47e1f055", img: "https://i.ibb.co/6ZKqqZm/avatar-16.jpg" },
      { name: "Ishtiq Robin", uid: "ATrEsIG8NIND3m8T4TNpXVNOMt93", img: "https://i.ibb.co/qCf3n1W/11775.png" },
      { name: "Rofiqul Islam", uid: "63d144b298f23efc47e1f058", img: "https://i.ibb.co/dMH27DW/IMG-20220603-205920-copy.png" },
      { name: "Jabed Mia", uid: "63d144b298f23efc47e1f056", img: "https://i.ibb.co/6ZKqqZm/avatar-16.jpg" },
      { name: "Ahnaf Sagor", uid: "63d144b298f23efc47e1f057", img: "https://i.ibb.co/GnjtCpf/1670525634938.jpg" }
    ];

    const project = { name, progressed, cost, createdby, allTasks, status, created, deadline, details, assignedleaders, team }

    fetch(`http://localhost:5000/projects`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        toast.success('Project is successfully added!')
        refetch()
        e.target.reset()
        setShown(false);
      })
      .catch(err => console.error(err))
  }
  return (
    <div>
      <input type="checkbox" id="addProjectModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleAddProject} action="" className="space-y-4">
            <label onClick={() => setShown(false)} htmlFor="addProjectModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className="mt-8">
              <input
                name="name"
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
            <div>
              <input
                name="progressed"
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Progressed"
                type="text"
              />
            </div>
            <div>
              <input
                name="cost"
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Cost"
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  name="createdby"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Created By"
                  type="text"
                />
              </div>
              <div>
                <input
                  name="status"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Status"
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  name="created"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Created On (Ex: 3rd Feb, 2023)"
                  type="text"
                />
              </div>
              <div>
                <input
                  name="deadline"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Deadline (Ex: 8th Feb, 2023)"
                  type="text"
                />
              </div>
            </div>
            <div>
              <textarea
                name="details"
                className="textarea w-full rounded-lg border-transparent bg-white p-3 text-sm bgwh"
                placeholder="Details"
              ></textarea>
            </div>
            <div className="modal-action justify-center">
              <button className="px-3 py-2 rounded-lg bg-orange-600 text-white font-semibold" type="submit">Add Project</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProjects;
