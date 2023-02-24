import React from 'react';
import { FaBars, FaPlus, FaTh } from 'react-icons/fa';

const PromotionQuery = ({ promotionData }) => {
  const { pageName, btnValue, btnOnClick, labelValue, hidden } = promotionData;
  return (
    <div className="grid grid-cols-2 justify-end mb-5">
      <div className="flex justify-end items-center py-4 gap-4">
        <h2
          className={`cursor-pointer rounded-md p-4 bg-gray-600 shadow-xl
         ${hidden}
         `}
        >
          <FaTh color='white'></FaTh>
        </h2>
        <h2
          className={`cursor-pointer rounded-md p-4 bg-gray-600 shadow-xl ${hidden}`}
        >
          <FaBars color='white'></FaBars>
        </h2>
        <label
          onClick={btnOnClick}
          htmlFor={labelValue}
          className="px-12 btn rounded-full border-transparent bg-orange-500 cursor-pointer text-white"
        >
          <FaPlus className="mr-4 text-white"></FaPlus>
          <span>{
            btnValue ?
              btnValue :
              "Add " + pageName.slice(0, -1)
          }</span>
        </label>
      </div>
    </div>
  );
};

export default PromotionQuery;