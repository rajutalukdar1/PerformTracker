import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashboardSideItems = ({ icon, title, subMenus }) => {
  const [rotate, setRotate] = useState('rotate-0');
  const [height, setHeight] = useState('max-h-0 min-h-0');
  const toggle = e => {
    if (height === 'max-h-28 min-h-28') {
      setHeight('max-h-0 min-h-0')
      setRotate('rotate-0')
    } else {
      setHeight('max-h-28 min-h-28')
      setRotate('rotate-90')
    }
  }

  return (
    <li>
      <div className='block bg-transparent py-0 mb-2'>
        <div className='flex items-center gap-4 text-gray-300 hover:text-white' onClick={toggle}>
          {icon}
          <span>{title}</span>
          <FaAngleRight className={`transition-all ml-auto ${rotate}`} />
        </div>
        <div className={`overflow-hidden transition-[max-height] ease-linear duration-300 ${height}`}>
          <ul className="menu text-gray-300">
            {
              subMenus?.map((subMenu, i) => <li key={i}>
                <Link className='ml-6 py-1 bg-transparent hover:text-white hover:underline'
                  to={subMenu.to}>{subMenu.title}</Link>
              </li>)
            }
          </ul>
        </div>
      </div>
    </li>
  )
}

export default DashboardSideItems