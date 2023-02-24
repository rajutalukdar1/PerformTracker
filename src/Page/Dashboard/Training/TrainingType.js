
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrEdit, GrFormAdd } from 'react-icons/gr';
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AddTrainingtypeModal from "./AddTrainingtypeModal";
const TrainingType = () => {
  const { data: allTrainerType = [], refetch } = useQuery({
    queryKey: ['allTrainerType'],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/trainingtype`).then(res => res.json()),

  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="px-3 py-2 bg-gray-900 rounded-tr-3xl text-white font-semibold text-xl">
            Training Type
          </h2>
        </div>
        <div>
          {/* The button to open modal */}
          <label
            htmlFor="tainer-type-modal"
            className="px-3 py-2 flex items-center bg-gray-900 rounded-full text-white font-semibold text-xl"
          >
            <GrFormAdd className=" bg-white rounded-full text-white mr-3" /> Add Training Type
          </label>

          <AddTrainingtypeModal />
        </div>


      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allTrainerType.map((TrainingType, i) =>
                <tr>
                  <td>{i + 1}</td>

                  <th>

                    {TrainingType.techtype}
                  </th>
                  <th>

                    {TrainingType.description}
                  </th>
                  <th>

                    {TrainingType.status}
                  </th>
                  <th>

                    <div className="dropdown dropdown-bottom dropdown-left">

                      {/* <label  className="btn bg-white border-0 ">
             <span className="text-center"></span>
             </label> */}
                      <div tabIndex={0}>
                        <h2 className="text-center mt-3 ml-4 font-semibold text-gray-500 text-xl"><BsThreeDotsVertical /> </h2>
                      </div>

                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 border-2 bg-white rounded-box w-40"
                      >
                        <li>

                          <label htmlFor="my-modal-2"><a className="flex  items-center text-bold"> <GrEdit className=" mr-3" />edit</a> </label>

                        </li>
                        <li>
                          <Link className="text-bold" > <RiDeleteBinLine />delete</Link>
                        </li>
                      </ul>

                    </div>
                  </th>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainingType;
