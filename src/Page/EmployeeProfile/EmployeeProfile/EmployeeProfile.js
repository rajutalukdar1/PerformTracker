import React from 'react';

const EmployeeProfile = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto mb-20'>
      <div className="mx-5 md:mx-10">
        <h3 className='text-2xl font-semibold'>Profile</h3>
        <div className="card w-full bg-slate-200 rounded-lg">
          <div className="card-body grid grid-cols-2 gap-6">
            <div className='flex gap-4 border-r-2 border-black border-dashed'>
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt='img' />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">John Doe</h3>
                <p>Web Developer</p>
              </div>
            </div>
            <div>
              <div className='flex'>
                <span className='w-32 font-bold'>Phone:</span>
                <a className='link text-blue-600' href='tel:+8801700112233'>01700112233</a>
              </div>
              <div className='flex'>
                <span className='w-32 font-bold'>Email:</span>
                <a className='link text-blue-600' href='mailto:johndoe@example.com'>johndoe@example.com</a>
              </div>
              <div className='flex'>
                <span className='w-32 font-bold'>Address:</span>
                <span>Panchdona, Narsingdi</span>
              </div>
              <div className='flex'>
                <span className='w-32 font-bold'>Gender:</span>
                <span>Male</span>
              </div>
              <div className='flex'>
                <span className='w-32 font-bold'>Nationality:</span>
                <span>Bangladeshi</span>
              </div>
              <div className='flex'>
                <span className='w-32 font-bold'>Religion:</span>
                <span>Islam</span>
              </div>
              <div className='flex'>
                <span className='w-32 font-bold'>Marital status:</span>
                <span>Unmarried</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
