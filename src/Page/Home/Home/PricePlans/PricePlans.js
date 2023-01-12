import React from 'react';
import { FaCheck, FaTimes } from "react-icons/fa";

const PricePlans = () => {
  const plans = [
    {
      _id: 1,
      title: "Basic",
      price: 449,
      services: [
        {
          name: "Employee tracking",
          status: true
        },
        {
          name: "Manager tracking",
          status: false
        },
        {
          name: "Goal Setting",
          status: false
        }
      ],
      bg: "bg-[#ee3234]"
    },
    {
      _id: 2,
      title: "Standard",
      price: 599,
      services: [
        {
          name: "Employee tracking",
          status: true
        },
        {
          name: "Manager tracking",
          status: true
        },
        {
          name: "Goal Setting",
          status: false
        }
      ],
      bg: "bg-[#001328]"
    },
    {
      _id: 3,
      title: "Premium",
      price: 719,
      services: [
        {
          name: "Employee tracking",
          status: true
        },
        {
          name: "Manager tracking",
          status: true
        },
        {
          name: "Goal Setting",
          status: true
        }
      ],
      bg: "bg-[#ee3234]"
    },
  ]
  return (
    <div className='text-center bg-slate-100 py-24 mt-10 w-full max-w-[1440px] mx-auto'>
      <div className='container mx-auto'>
        <div className='mb-16'>
          <p className='uppercase text-gray-700 font-semibold text-xs sm:text-base'>Plans & Pricing</p>
          <h2 className='font-bold text-2xl sm:text-3xl md:text-5xl'>Choose Your Plan</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 mx-6 sm:mx-4'>
          {
            plans.map(plan => <div
              className="card w-full max-w-96 bg-white shadow-xl rounded-md"
              key={plan._id}
            >
              <div className="card-body">
                <h4 className="card-title justify-center mb-3 font-bold text-2xl text-black">{plan.title}</h4>
                <h2 className='flex justify-center mb-2'>
                  <span className='text-blue-600 font-bold'>$</span>
                  <span className='text-blue-600 font-bold text-4xl'>{plan.price}</span>
                  <span className='self-end text-gray-500'>/yearly</span>
                </h2>
                <div className='mb-5'>
                  {
                    plan.services.map((service, i) => <div
                    key={i}
                    className="flex justify-center items-center gap-3"
                    >
                      {
                        service.status ? 
                        <FaCheck color='green' className='' /> :
                        <FaTimes color='#ba0000' className='' />
                      }
                      <p className='text-gray-400 font-semibold text-left'>{service.name}</p>
                    </div>)
                  }
                </div>
                <div className="card-actions justify-center">
                  <button className={`btn border-0 text-white text-xs w-3/4 ${plan.bg}`}>Subscribe Now</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default PricePlans;
