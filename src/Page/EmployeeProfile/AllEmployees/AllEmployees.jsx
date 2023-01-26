import React, { useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import AddEmployeeFromModal from "./AddEmployeeFromModal";
import EditEmployeeDetails from "./EditEmployeeDetails";
import { useQuery } from "@tanstack/react-query";

const AllEmployees = () => {
  const [ employee , setEmployee] = useState(null)
  const [AllEmployees, setAllEmployees] = useState([]);
  console.log(AllEmployees);

  useEffect(() => {
    fetch(`https://perform-tracker-server.vercel.app/employees`)
      .then((res) => res.json())
      .then((data) => setAllEmployees(data));
  }, []);

  
  return (
    <section className="md:px-20">
      <div className="flex  justify-between items-center mb-6">
        <div>
          <h2 className="px-3 py-2 bg-gray-900 rounded-tr-3xl text-white font-semibold text-xl">
            Employees
          </h2>
        </div>
        <div>
          {/* The button to open modal */}
          <label
            htmlFor="my-modal"
            className="px-3 py-2 bg-orange-600 rounded-tl-3xl text-white font-semibold text-xl"
          >
            Add Employee
          </label>
          <AddEmployeeFromModal />
        </div>
      </div>
      {
        employee && <EditEmployeeDetails  employee={employee}/>
      }
      <div
        style={{ backgroundColor: "#F7F7F7" }}
        className="grid  grid-cols-4 gap-6"
      >
        {AllEmployees.map((singleEmployee) => (
         
            <div className=" shadow-md  rounded-sm   bg-white pb-8">
              <div className="dropdown dropdown-bottom dropdown-right">
             
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
                    
                     <label onClick={()=> setEmployee(singleEmployee._id)} htmlFor="my-modal-2"><a> <GrEdit />edit</a> </label>
                    
                  </li>
                  <li>
                    <a> <RiDeleteBinLine />delete</a>
                  </li>
                </ul>
                
              </div>
              <Link to={`/dashboard/employee/${singleEmployee._id}`}>
              <div className="flex  justify-center ">
                <img
                  className="w-20 h-20 rounded-full"
                  src={singleEmployee.img}
                  alt=""
                />
              </div>
              <div className="text-center  pt-4">
                <h4 className="font-bold text-xl text-gray-900">
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