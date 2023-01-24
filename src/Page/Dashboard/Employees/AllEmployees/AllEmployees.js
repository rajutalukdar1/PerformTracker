import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddEmployeeFromModal from "./AddEmployeeFromModal";

const AllEmployees = () => {
  const [AllEmployees, setAllEmployees] = useState([]);

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
          <label htmlFor="my-modal" className="px-3 py-2 bg-orange-600 rounded-tl-3xl text-white font-semibold text-xl">
            Add Employee
          </label>
          <AddEmployeeFromModal />
        </div>
      </div>
      <div
        style={{ backgroundColor: "#F7F7F7" }}
        className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6"
      >
        {AllEmployees.map((singleEmployee, i) => (
          <Link key={i} to={`/dashboard/employee/${singleEmployee._id}`}>
            <div className=" shadow-md  rounded-md   bg-white py-8">
              <div className="flex  justify-center ">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={singleEmployee.img}
                  alt=""
                />
              </div>
              <div className="text-center pt-4">
                <h4 className="font-bold text-xl text-gray-900">
                  {singleEmployee.name}
                </h4>
                <p className="font-semibold text-gray-600">
                  {singleEmployee.designation}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllEmployees;
