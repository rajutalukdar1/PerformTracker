import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import ConfirmationModal from "../../Page/Share/ConfirmationModal/ConfirmationModal";

const AddTaskDetails = ({ task, refetch }) => {
  const [disabled, setDisabled] = useState(true);
  const [checkbox, setCheckbox] = useState(task.completed);
  const [deletingTask, setDeletingTask] = useState(null);

  const closeModal = () => {
    setDeletingTask(null);
  };
  const handleUpdateTask = () => {
    if (checkbox) {
      setCheckbox(false);
      toast.error("Task is not Completed");
    } else {
      setCheckbox(true);
      toast.success("Task is Completed");
    }

    fetch(`http://localhost:5000/task/${task._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ completed: !checkbox }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Task is successfully Updated!");
      });
  };
  const handleDeleteTask = (task) => {
    fetch(`https://perform-tracker-server.vercel.app/task/${task._id}`, {
      method: "DELETE",
      // headers: {
      //     authorization: `bearer ${localStorage.getItem('accessToken')}`
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Task ${task.title} deleted successfully`);
        }
      });
  };
  console.log(checkbox);

  return (
    <div className="grid grid-cols-6 overflow-x-auto  shadow-lg bg-gray-900 hover:bg-slate-800 border border-gray-700  py-2  mx-4">
      <div className="col-span-1 mx-auto">
        <input
          onClick={handleUpdateTask}
          defaultChecked={checkbox}
          type="checkbox"
          className="checkbox checkbox-success "
        />
      </div>
      <div className="w-full col-span-4">
        <input
          type="text"
          defaultValue={task.title}
          placeholder="Type here"
          className={`p-1 w-full bg-transparent max-w-xs ${checkbox && "text-slate-500"}`}
          disabled={task.title && disabled}
        />
      </div>
      <div className="col-span-1">
        <button className="whitespace-nowrap flex justify-end gap-2   ">
          <FaUserPlus className="text-xl text-slate-100  hover:text-slate-900"></FaUserPlus>
          <label
            onClick={() => setDeletingTask(task)}
            htmlFor="confirmation-modal"
            className=""
          >
            <AiOutlineDelete className="text-xl text-slate-100 hover:text-slate-900 cursor-pointer"></AiOutlineDelete>
          </label>
        </button>
      </div>
      {deletingTask && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`if you delete ${deletingTask.title}. It cannot be undone`}
          successAction={handleDeleteTask}
          modalData={deletingTask}
          successButtonName="Delete"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AddTaskDetails;
