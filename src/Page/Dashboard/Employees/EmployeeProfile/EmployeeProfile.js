import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import EmployeeInfo from './EmployeeInfo';
import useTitle from '../../../../Hooks/useTitle';

const EmployeeProfile = () => {


  const { id } = useParams();
  const { data: { name, address, designation, email, gender, img, maritalStatus, nationality, phone, salary } = {}, refetch } = useQuery({
    queryKey: ['employee', id],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/employees/${id}`).then(res => res.json()),
  });

  return (
    <div className='w-full max-w-[1440px] mx-auto mb-20'>
      <div className="mx-5 md:mx-10 text-gray-200">
        <h3 className='text-2xl font-semibold text-center'>Profile</h3>
        <div className="card w-full bg-gray-900 rounded-lg">
          <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
            <div className='flex gap-4 pb-5 md:pb-0 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 border-dashed'>
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={`${img}`} alt='img' />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{name}</h3>
                <p>{designation}</p>
                <div className='flex gap-2 text-2xl mt-2'>
                  <a href=" "><FaFacebook /></a>
                  <a href=" "><FaLinkedin /></a>
                  <a href=" "><FaGithub /></a>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-[8rem_1fr]'>
              <EmployeeInfo
                lab='Phone:'
                val={<a className='link' href={`tel:${phone}`}>{phone}</a>}
              />
              <EmployeeInfo
                lab='Email:'
                val={<a className='flex-1 link' href={`mailto:${email}`}>{email}</a>}
              />
              <EmployeeInfo
                lab='Address:'
                val={address}
              />
              <EmployeeInfo
                lab='Gender:'
                val={gender}
              />
              <EmployeeInfo
                lab='Nationality:'
                val={nationality}
              />
              <EmployeeInfo
                lab='Salary:'
                val={salary}
              />
              <EmployeeInfo
                lab='Marital status:'
                val={maritalStatus}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
