import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { Link, Outlet, useParams } from 'react-router-dom';
import EmployeeProfileInfo from '../../Profile/EmployeeProfileInfo';
import AddPromotion from '../../Promotion/AddPromotion/AddPromotion';


const EmployeeProfile = () => {
  // const { user } = useSelector(state => state.userReducer);
  const [promotion, setPromotion] = useState({});
  const { id } = useParams();
  const { data: { name, designation, address, company, joiningDate, employeeId, DOB, email, gender, img, phone, nationality, maritalStatus } = {}, refetch } = useQuery({
    queryKey: ['employee', id],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/employees/${id}`).then(res => res.json()),
  });

  return (
    <div>
      <div className='w-full max-w-[1440px] mx-auto mb-20'>
        <div className="mx-5 md:mx-5">
          <div className="card w-full bg-[#16191C] rounded-b-none rounded-t-md
             border-[#BBC4CC] border-b-2">
            <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
              <div className='flex text-white gap-4 pb-5 md:pb-0 border-b-2 md:border-b-0 md:border-r-2 border-[#BBC4CC] border-dashed'>
                <div>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={`${img}`} alt='img' />
                    </div>
                  </div>
                </div>
                <div className='text-[#BBC4CC]'>
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <p className="text-xs mb-2">{designation}</p>
                  <p className="font-bold">Employee ID: {employeeId}</p>
                  <p className="text-xs">Date of Join: {joiningDate}</p>

                  <label className=" cursor-pointer inline-block rounded bg-[#FD7265] mt-8 px-6 py-2 text-sm font-medium text-white transition hover:bg-slate-900 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#0f0302]"
                    htmlFor='addPromotionModal'
                    onClick={() => setPromotion({
                      employeeId: id,
                      name,
                      img,
                      designation
                    })}
                  >Promote
                  </label>
                </div>
              </div>
              <div className='grid text-[#BBC4CC] grid-cols-[8rem_1fr]'>
                <EmployeeProfileInfo
                  lab='Phone:'
                  val={<a
                    className='link text-blue-600' href={`tel:${phone}`}>{phone}</a>}
                />
                <EmployeeProfileInfo
                  lab='Email:'
                  val={<a className='flex-1 link text-blue-600' href={`mailto:${email}`}>{email}</a>}
                />
                <EmployeeProfileInfo
                  lab='Address:'
                  val={address}
                />
                <EmployeeProfileInfo
                  lab='Gender:'
                  val={gender}
                />

                <EmployeeProfileInfo lab="Nationality:" val={nationality} />
                <EmployeeProfileInfo lab="Birthday:" val={DOB} />
                <EmployeeProfileInfo lab="Marital status:" val={maritalStatus} />
              </div>
            </div>
          </div>

          <div className="flex-none w-full bg-[#16191C] text-white lg:text-sm font-semibold
            rounded-b-sm">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={`/dashboard/employees/${id}/projects`}>
                  Projects
                </Link>
              </li>
              <li tabIndex={0}>
                <Link to={`/dashboard/employees/${id}/tasks`}>
                  Tasks
                </Link>
              </li>
            </ul>
          </div>
          <Outlet>

          </Outlet>
        </div>

      </div>
      {promotion && <AddPromotion
        refetch={refetch}
        id={id}
        promote={promotion}
        setPromotion={setPromotion}
      ></AddPromotion>}
    </div>
  );
}

export default EmployeeProfile;
