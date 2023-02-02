import React from 'react'
import { AiOutlineDashboard } from 'react-icons/ai'
import { FaBars, FaPlus, FaTh } from "react-icons/fa";
import { Link } from 'react-router-dom';

const QueryBar = ({ barData }) => {
  const { pageName } = barData;

  return (
    <div className="grid grid-cols-2 justify-end mb-5">
      <div>
        <h2 className="text-3xl font-bold">{pageName}</h2>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to='/dashboard' className='font-semibold'>
                <AiOutlineDashboard size='18' className='mr-2' />
                Dashboard
              </Link>
            </li>
            <li>
              {pageName}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end items-center py-4 gap-4">
        <h2 className="cursor-pointer rounded-md p-4 bg-base-100 shadow-xl">
          <FaTh></FaTh>
        </h2>
        <h2 className="cursor-pointer rounded-md p-4 bg-base-100 shadow-xl">
          <FaBars className="text-black"></FaBars>
        </h2>
        <label
          htmlFor="booking-modal"
          className="px-12 btn rounded-full border-transparent bg-orange-500 cursor-pointer text-white"
        >
          <FaPlus className="mr-4 text-white"></FaPlus>
          <span>Add {pageName.slice(0, -1)}</span>
        </label>
      </div>
    </div>
  )
}

export default QueryBar