import React from "react";
import {
  FaRegTimesCircle,
  FaRocketchat,
  FaTelegramPlane
} from "react-icons/fa";
import {
  HiCalendar,
  HiOutlineBars3BottomLeft
} from "react-icons/hi2";
import "./MarkComplet.css";

const MarkComplete = () => {
  return (
    <div className="w-full border-l-2 border-gray-700 pr-2">
      <div className="">
      <div className="pl-2 py-2">
        <h2 className="text-lg font-bold text-slate-200 ">
          Hospital Administration Phase 1
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-4 px-6  border-b-2 border-gray-400 pb-8">
          <div className="grid grid-cols-3 gap-4 hover:border-2 border-gray-300 rounded-md p-2 justify-center items-center cursor-pointer hover:bg-slate-400">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="https://i.ibb.co/gPDDW7S/IMG-20220603-205920.jpg" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className=" whitespace-nowrap">
                <h2>Assigned To</h2>
                <h2>John Doe</h2>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="text-xl border-2 rounded-full">
                <FaRegTimesCircle
                  className="text-white hover:text-slate-800"
                ></FaRegTimesCircle>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 hover:border-2 border-gray-300 rounded-md p-2 justify-center items-center cursor-pointer hover:bg-slate-400 ">
            <div className="avatar">
              <div className=" ext-xl border-2 rounded-full">
                <HiCalendar className="text-xl "></HiCalendar>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className=" whitespace-nowrap hover:text-white">
                <h2>Assigned To</h2>
                <h2>John Doe</h2>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="text-xl border-2 rounded-full">
                <FaRegTimesCircle className="text-white hover:text-slate-800"></FaRegTimesCircle>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-between items-center  mt-8 pb-6 border-b-2 border-r-gray-400 ">
          <HiOutlineBars3BottomLeft className="text-4xl rounded-full p-2 shadow-xl border-2 border-r-gray-400 cursor-pointer "></HiOutlineBars3BottomLeft>
          <textarea
            className=" p-1 w-full  border-2 border-r-gray-400 rounded-md"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="flex gap-4  justify-between items-center mt-8 pb-6 border-b-2 border-r-gray-400 ">
          <HiOutlineBars3BottomLeft className="text-4xl rounded-full p-2 shadow-xl border-2 border-r-gray-400 cursor-pointer "></HiOutlineBars3BottomLeft>
          <textarea
            className=" p-1  w-full border-2 border-r-gray-400 rounded-md"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="flex gap-4 justify-between items-center mt-8 pb-6 border-b-2 border-r-gray-400 ">
          <HiOutlineBars3BottomLeft className="text-4xl rounded-full p-2 shadow-xl border-2 border-r-gray-400 cursor-pointer "></HiOutlineBars3BottomLeft>
          <textarea
            className=" cursor-pointerp-1 w-full border-2 border-r-gray-400 rounded-md"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="flex gap-4 justify-between items-center mt-8 pb-6 border-b-2 border-r-gray-400 ">
          <HiOutlineBars3BottomLeft className="text-4xl rounded-full p-2 shadow-xl border-2 border-r-gray-400 cursor-pointer "></HiOutlineBars3BottomLeft>
          <textarea
            className=" p-1 w-full border-2 border-r-gray-400 rounded-md"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="flex gap-4 justify-between items-center mt-8 pb-6 border-b-2 border-r-gray-400 ">
          <HiOutlineBars3BottomLeft className="text-4xl rounded-full p-2 shadow-xl border-2 border-r-gray-400 cursor-pointer "></HiOutlineBars3BottomLeft>
          <textarea
            className=" p-1 w-full border-2 border-r-gray-400 rounded-md"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="flex gap-4 justify-between items-center mt-8 pb-6 border-b-2 border-r-gray-400 ">
          <HiOutlineBars3BottomLeft className="text-4xl rounded-full p-2 shadow-xl border-2 border-r-gray-400 cursor-pointer "></HiOutlineBars3BottomLeft>
          <textarea
            className=" p-1 w-full border-2 border-r-gray-400 rounded-md"
            placeholder="Description"
          ></textarea>
        </div>
      </div>
      </div>
      {/* footer  */}
      <div className="stop_b mb-0 bg-slate-900 mt-8 pb-6 border-t-2 border-r-gray-400 py-9  ">
        <div className="flex   justify-between items-center">
          <FaRocketchat className="text-4xl mx-2 shadow-xl cursor-pointer "></FaRocketchat>
          <textarea
            style={{ height: "52px" }}
            className="resize-none w-full border-l-2 border-t-2 border-b-2 border-r-gray-400 rounded-l-md"
            placeholder="Type message"
          ></textarea>
          <div className="px-3 py-4 rounded-r-md bg-orange-500 mr-3 2  cursor-pointer">
            <FaTelegramPlane className="text-xl mr-3 text-white "></FaTelegramPlane>
          </div>
        </div>
        <div></div>
        <div className="avatar-group flex items-center justify-start pl-2 ">
          <h2 className="mr-3">Flowers</h2>
          <div className="avatar">
            <div className="w-8">
              <img
                src="https://i.ibb.co/gPDDW7S/IMG-20220603-205920.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkComplete;
