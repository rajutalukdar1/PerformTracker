import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const EmployeeProfile = () => {
  const {id} = useParams();
  const { data: {name, address, designation, email, gender, img, maritalStatus, nationality, phone, salary}, refetch } = useQuery({
    queryKey: ['employee', id],
    queryFn: () =>
      fetch(`http://localhost:5000/employees/${id}`).then(res => res.json()),
  });

  console.log(name);
  
  return (
    <div className='w-full max-w-[1440px] mx-auto mb-20'>
      <div className="mx-5 md:mx-10">
        <h3 className='text-2xl font-semibold text-center'>Profile</h3>
        <div className="card w-full bg-slate-200 rounded-lg">
          <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className='flex justify-between'>
                  <a className='text-primary' href=""><FaFacebook /></a>
                  <a className='text-primary' href=""><FaLinkedin /></a>
                  <a className='text-primary' href=""><FaGithub /></a>
                </div>
              </div>
            </div>
            <div>
              <div className='flex'>
                <span className='w-36 md:w-32 font-bold'>Phone:</span>
                <a className='link text-blue-600' href={`tel:${phone}`}>{phone}</a>
              </div>
              <div className='flex'>
                <span className='w-36 md:w-32 font-bold'>Email:</span>
                <a className='link text-blue-600' href={`mailto:${email}`}>{email}</a>
              </div>
              <div className='flex'>
                <span className='w-36 md:w-32 font-bold'>Address:</span>
                <span>{address}</span>
              </div>
              <div className='flex'>
                <span className='w-36 md:w-32 font-bold'>Gender:</span>
                <span>{gender}</span>
              </div>
              <div className='flex'>
                <span className='w-36 md:w-32 font-bold'>Nationality:</span>
                <span>{nationality}</span>
              </div>
              <div className='flex'>
                <span className='w-36 md:w-32 font-bold'>Salary:</span>
                <span>{salary}</span>
              </div>
              <div className='flex'>
                <span className='w-36 md:w-32 font-bold'>Marital status:</span>
                <span>{maritalStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
