import React from "react";
import { toast } from "react-hot-toast";


const AddTrainingtypeModal = () => {
  const handleAddTrainerForm = (e) => {
    e.preventDefault();
    const techtype = e.target.techtype.value;
    const status = e.target.status.value
    const description = e.target.description.value;
    const post = {
      techtype: techtype,
      description: description,
      status: status,
    };
    fetch(`https://perform-tracker-server.vercel.app/trainingtype`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Trainer is successfully added!");
      });
    e.target.reset();
  };
  return (
    <div>
      <input type="checkbox" id="tainer-type-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleAddTrainerForm} action="" class="space-y-4">
            <label
              htmlFor="tainer-type-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h2 className="text-center font-bold text-2xl"> Add new</h2>
            <div>
              <label className="sr-only" htmlFor="phone">
                Tech Type
              </label>
              <input
                name="techtype"
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Tech Type"
                type="text"
              />
            </div>

            <div className="mt-8">
              <textarea
                name="description"
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="description"
                type="text"
              />
            </div>
            <div>
              <select
                name="status"
                className="select  rounded-lg border-gray-200 p-3 w-full "
              >
                <option disabled selected>
                  Select Status
                </option>
                <option>active</option>
                <option>inactive</option>
              </select>
            </div>
            <div className="modal-action">
              <button
                className="px-3 py-2 rounded-lg bg-orange-600  text-white font-semibold text-xl"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrainingtypeModal;
