import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import EmployeeInfo from './EmployeeInfo';

const EmployeeProfile = () => {
  const { id } = useParams();
  const { data: { name, address, designation, email, gender, img, maritalStatus, nationality, phone, salary } = {}, refetch } = useQuery({
    queryKey: ['employee', id],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/employees/${id}`).then(res => res.json()),
  });

  return (
    <div className='w-full max-w-[1440px] mx-auto mb-20'>
      <div className="mx-5 md:mx-10">
        <h3 className='text-2xl font-semibold text-center'>Profile</h3>
        <div className="card w-full bg-slate-200 rounded-lg">
          <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
            <div className='flex gap-4 pb-5 md:pb-0 border-b-2 md:border-b-0 md:border-r-2 border-black border-dashed'>
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
                <div className='flex gap-2 text-primary text-2xl mt-2'>
                  <a href=""><FaFacebook /></a>
                  <a href=""><FaLinkedin /></a>
                  <a href=""><FaGithub /></a>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-[8rem_1fr]'>
              <EmployeeInfo
                lab='Phone:'
                val={<a className='link text-blue-600' href={`tel:${phone}`}>{phone}</a>}
              />
              <EmployeeInfo
                lab='Email:'
                val={<a className='flex-1 link text-blue-600' href={`mailto:${email}`}>{email}</a>}
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
              {/* <span className='w-36 md:w-32 font-bold'>Address:</span>
              <span>{address}</span>
              <span className='w-36 md:w-32 font-bold'>Gender:</span>
              <span>{gender}</span>
              <span className='w-36 md:w-32 font-bold'>Nationality:</span>
              <span>{nationality}</span>
              <span className='w-36 md:w-32 font-bold'>Salary:</span>
              <span>{salary}</span>
              <span className='w-36 md:w-32 font-bold'>Marital status:</span>
              <span>{maritalStatus}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
