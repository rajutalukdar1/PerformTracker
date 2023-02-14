import React from "react";
import { BsCoin, BsGearWideConnected } from "react-icons/bs";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { GoDashboard } from "react-icons/go";
import { MdLooks, MdSupervisedUserCircle } from "react-icons/md";

const HrBusiness = () => {
  return (
    <div className="my-14 px-2 md:px-20">
      <div className=" my-12 ">
        <MdLooks className="text-center mx-auto text-blue-600"></MdLooks>
        <h5 className="hover:text-rose-600 text-center font-bold text-blue-600 ">
          WE DO MORE FOR YOUR WORLD
        </h5>
        <h2 className="text-4xl hover:text-rose-600 text-center font-bold">
          All-in-one payroll and HR <br /> your business
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4">
        <div className="">
          <div className="text-center shadow-md w-20 h-20 lg:w-36 lg:h-36 rounded-full card bg-gray-200 flex items-center justify-center p-3 hover:bg-rose-600 text-blue-600 hover:text-white mx-auto">
            <div className="">
              <BsCoin className="lg:text-7xl text-3xl"></BsCoin>
            </div>
          </div>
          <h2 className="text-center mt-8 font-bold lg:text-xl text-sm">
            Payroll
          </h2>
        </div>
        <div className="">
          <div className="text-center shadow-md w-20 h-20 lg:w-36 lg:h-36 rounded-full card bg-gray-200 flex items-center justify-center p-3 hover:bg-rose-600 text-blue-600 hover:text-white mx-auto">
            <div className="">
              <GoDashboard className="lg:text-7xl text-3xl"></GoDashboard>
            </div>
          </div>
          <h2 className="text-center mt-8 font-bold lg:text-xl text-sm">
            Time & Attendance
          </h2>
        </div>
        <div className="">
          <div className="text-center shadow-md w-20 h-20 lg:w-36 lg:h-36 rounded-full card bg-gray-200 flex items-center justify-center p-3 hover:bg-rose-600 text-blue-600 hover:text-white mx-auto">
            <div className="">
              <HiOutlineCheckCircle className="lg:text-7xl text-3xl"></HiOutlineCheckCircle>
            </div>
          </div>
          <h2 className="text-center mt-8 font-bold lg:text-xl text-sm">
            Benefits
          </h2>
        </div>
        <div className="">
          <div className="text-center shadow-md w-20 h-20 lg:w-36 lg:h-36 rounded-full card bg-gray-200 flex items-center justify-center p-3 hover:bg-rose-600 text-blue-600 hover:text-white mx-auto">
            <div className="">
              <BsGearWideConnected className="lg:text-7xl text-3xl"></BsGearWideConnected>
            </div>
          </div>
          <h2 className="text-center mt-8 font-bold lg:text-xl text-sm">
            HR Management
          </h2>
        </div>
        <div className="">
          <div className="text-center shadow-md w-20 h-20 lg:w-36 lg:h-36 rounded-full card bg-gray-200 flex items-center justify-center p-3 hover:bg-rose-600 text-blue-600 hover:text-white mx-auto">
            <div className="">
              <MdSupervisedUserCircle className="lg:text-7xl text-3xl"></MdSupervisedUserCircle>
            </div>
          </div>
          <h2 className="text-center mt-8 font-bold lg:text-xl text-sm">
            Hiring
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HrBusiness;
