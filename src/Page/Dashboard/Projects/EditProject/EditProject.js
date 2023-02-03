import React from "react";
import { toast } from "react-hot-toast";

const EditProjects = ({ project, setProjectData, refetch }) => {
  const { _id, name, progressed, cost, createdby, status, created, deadline, details } = project;

  const handleEditProject = (e) => {
    e.preventDefault();

    const name = e.target.name.value
    const progressed = Number(e.target.progressed.value)
    const cost = e.target.cost.value
    const createdby = e.target.createdby.value
    const status = e.target.status.value
    const created = e.target.created.value
    const deadline = e.target.deadline.value
    const details = e.target.details.value

    const project = { name, progressed, cost, createdby, status, created, deadline, details }

    fetch(`https://perform-tracker-server.vercel.app/projects/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        toast.success('Project is successfully updated!')
        setProjectData(null);
        refetch();
      })
      .catch(err => console.error(err))
  }
  return (
    <div>
      <input type="checkbox" id="editProjectModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleEditProject} action="" className="space-y-4">
            <label onClick={() => setProjectData(null)} htmlFor="editProjectModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className="mt-8">
              <input
                name="name"
                defaultValue={name}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
            <div>
              <input
                name="progressed"
                defaultValue={progressed}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Progressed"
                type="text"
              />
            </div>
            <div>
              <input
                name="cost"
                defaultValue={cost}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Cost"
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  name="createdby"
                  defaultValue={createdby}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Created By"
                  type="text"
                />
              </div>
              <div>
                <input
                  name="status"
                  defaultValue={status}
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
                  defaultValue={created}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Created On (Ex: 3rd Feb, 2023)"
                  type="text"
                />
              </div>
              <div>
                <input
                  name="deadline"
                  defaultValue={deadline}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Deadline (Ex: 8th Feb, 2023)"
                  type="text"
                />
              </div>
            </div>
            <div>
              <textarea
                name="details"
                defaultValue={details}
                className="textarea w-full rounded-lg border-transparent bg-white p-3 text-sm bgwh"
                placeholder="Details"
              ></textarea>
            </div>
            <div className="modal-action justify-center">
              <button className="px-3 py-2 rounded-lg bg-orange-600 text-white font-semibold" type="submit">Edit Project</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProjects;
