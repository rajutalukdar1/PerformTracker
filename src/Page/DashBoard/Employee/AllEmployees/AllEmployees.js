import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                <h2 className="px-3 py-2 bg-gray-900 rounded-tr-3xl text-white font-semibold text-xl">Employees</h2>
            </div>
            <div>
                <button className="px-3 py-2 bg-orange-600 rounded-tl-3xl text-white font-semibold text-xl">Add Profile</button>
            </div>
        </div>
      <div style={{ backgroundColor: "#F7F7F7" }} className="grid  grid-cols-4 gap-6">
        
        {AllEmployees.map((singleEmployee, i) => (
          <Link to={`/dashboard/employees/${singleEmployee._id}`} key={i} className=" shadow-md  rounded-md   bg-white py-8">
            <div className="flex  justify-center ">
              <img className="w-20 h-20 rounded-full" src={singleEmployee.img} alt="" />
            </div>
            <div className="text-center  pt-4">
              <h4 className="font-bold text-xl text-gray-900">{singleEmployee.name}</h4>
              <p className="font-semibold text-gray-600">{singleEmployee.designation}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllEmployees;
