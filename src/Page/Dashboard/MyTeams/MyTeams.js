import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const MyTeams = () => {
  return (
    <div>
      <div className="card lg:card-side dark:bg-gray-900 shadow-xl w-11/12 mx-auto mt-4">
        <figure><img className='w-72' src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1676570913~exp=1676571513~hmac=72b904f741bac9b1f568f601a4bcfa42c77498e13c25f1bac6d043bf81730491' alt="Album" /></figure>
        <div className='flex justify-between'>
          <div className="card-body">
            <h1 className="text-2xl font-bold">Raju Talukdar</h1>
            <h3 className="card-title text-xl font-semibold">FrontEnd Developer</h3>
            <h3 className="card-title text-sm font-semibold">Lorem  ipsum, dolor sit adipisicing elit. Reiciendis, possimus.</h3>
          </div>
          <div className='self-center'>
            <div className='flex items-center'>
              <div className=''><CiLocationOn></CiLocationOn></div>
              <div>Shanti Nagar Bldg No B 4, Sector No 6, Mira Road</div>
            </div>
            <div className='flex items-center'>
              <div className=''><CiLocationOn></CiLocationOn></div>
              <div>Shanti Nagar Bldg No B 4, Sector No 6, Mira Road</div>
            </div>
            <div className='flex items-center'>
              <div className=''><CiLocationOn></CiLocationOn></div>
              <div>Shanti Nagar Bldg No B 4, Sector No 6, Mira Road</div>
            </div>
            <div className='flex items-center'>
              <div className=''><CiLocationOn></CiLocationOn></div>
              <div>Shanti Nagar Bldg No B 4, Sector No 6, Mira Road</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTeams