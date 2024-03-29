import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrFormAdd } from 'react-icons/gr';
import AddEmployeeFromModal from "./AddEmployeeFromModal";
import EditEmployeeDetails from "./EditEmployeeDetails";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { FaPencilAlt } from "react-icons/fa";
import useTitle from "../../../../hooks/useTitle";

const AllEmployees = () => {

  useTitle('Employees');

  const [id, setId] = useState(null);

  const { data: allEmployees = [], refetch } = useQuery({
    queryKey: ['employees'],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/employees`).then(res => res.json()),
  });

  const handleReviewDelete = (id) => {
    const process = window.confirm("Are you sure delete this Employee")
    if (process) {
      fetch(`https://perform-tracker-server.vercel.app/employees/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully !!");
            refetch();

            // const remainigAllEmployees =  .filter((review) => review._id !==  id);
            // setMyReviews(remainigReview);
          }
        });
    }
  }
  return (
    <section className="md:px-20">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="px-3 py-2 bg-gray-900 rounded-tr-3xl text-white font-semibold text-xl">
            Employees
          </h2>
        </div>
        <div>
          {/* The button to open modal */}
          <label
            htmlFor="my-modal"
            className="cursor-pointer px-3 py-2 flex items-center bg-gray-900 hover:bg-gray-800 rounded-full text-white font-semibold 
            text-xl"
          >
            <GrFormAdd className=" bg-white rounded-full text-white mr-3 " /> Add Employee
          </label>
          <AddEmployeeFromModal />
        </div>
      </div>
      {
        id && <EditEmployeeDetails id={id} />
      }
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {allEmployees.map((singleEmployee) => (
          <div key={singleEmployee._id} className="shadow-md bg-gray-900 rounded-sm pb-8">
            <div className="dropdown dropdown-bottom dropdown-right">
              <div tabIndex={0}>
                <h2 className="text-center mt-3 ml-4 font-semibold text-gray-400 text-xl cursor-pointer">
                  <BsThreeDotsVertical /></h2>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 bg-slate-800 text-white rounded-box w-40"
              >
                <li>
                  <label onClick={() => setId(singleEmployee._id)}
                    htmlFor="my-modal-2"><span
                      className="flex  items-center text-bold">
                      <FaPencilAlt className="mr-3" />Edit</span> </label>
                </li>

                <li>
                  <Link className="text-bold" onClick={() => handleReviewDelete(singleEmployee._id)} > <RiDeleteBinLine />Delete</Link>
                </li>
              </ul>
            </div>
            <Link to={`/dashboard/employees/${singleEmployee._id}`}>
              <div className="flex  justify-center ">
                <img
                  className="w-20 h-20 rounded-full object-cover bg-slate-100"
                  src={singleEmployee.img}
                  alt=""
                />
              </div>
              <div className="text-center pt-4">
                <h4 className="font-bold text-xl text-gray-300">
                  {singleEmployee.name}
                </h4>
                <p className="font-semibold text-gray-600">
                  {singleEmployee.designation}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllEmployees;
