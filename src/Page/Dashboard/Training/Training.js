
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrEdit, GrFormAdd } from 'react-icons/gr';
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AddTrainerModal from "./AddTrainerModal";
import AddTrainingModal from "./AddTrainingModal";
const Training = () => {
  const { data: allTraining = [], refetch } = useQuery({
    queryKey: ['allTraining'],
    queryFn: () =>
      fetch(`http://localhost:5000/training`).then(res => res.json()),
      
  });
  refetch()
  
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="px-3 py-2 bg-gray-900 rounded-tr-3xl text-white font-semibold text-xl">
            Training
          </h2>
        </div>
        <div>
          {/* The button to open modal */}
          <label
            htmlFor="trainig-modal"
            className="px-3 py-2 flex items-center bg-gray-900 rounded-full text-white font-semibold text-xl"
          >
            <GrFormAdd  className=" bg-white rounded-full text-white mr-3"/> Add Training
          </label>
      
          <AddTrainingModal />
        </div>
        
        
      </div>
      <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Training Type</th>
            <th>Trainer</th>
            <th>Employee</th>
            <th>Time duration</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allTraining.map((training, i )=> 
            <tr>
            <td>{i+1}</td>
            {/* <td>
              <div className="flex items-center space-x-3">
                <div className="avatar ">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={training.img}
                      alt="Avatar Tailwind CSS Component"
                    />
                    
                  </div>
                  
                </div>
                <div>
                {trainer.name}
                </div>
              </div>
            </td> */}
            <td>
              {training.triningtype}
            </td>
            <td>
              {training.trainer}
            </td>
            <td>
              {training.employee}
            </td>
            <th>
              
             2 month
            </th>
            <th>
              
              {training.description}
            </th>
            <th>
              
              ${training.cost}
            </th>
            <th>
              
              {training.status}
            </th>
            <th>
              
            <div className="dropdown dropdown-bottom dropdown-left">
             
             {/* <label  className="btn bg-white border-0 ">
             <span className="text-center"></span>
             </label> */}
             <div  tabIndex={0}>
               <h2  className="text-center mt-3 ml-4 font-semibold text-gray-500 text-xl"><BsThreeDotsVertical /> </h2>
             </div>
             
             <ul
               tabIndex={0}
               className="dropdown-content menu p-2 border-2 bg-white rounded-box w-40"
             >
               <li>
                 
                  <label  htmlFor="my-modal-2"><a className="flex  items-center text-bold"> <GrEdit className=" mr-3"/>edit</a> </label>
                 
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

export default Training;
