import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const SelectRole = ({ uid, setUid, savedUserByRole, saveUsersAsRole }) => {
  const navigate = useNavigate();

  const handleRole = e => {
    e.preventDefault();
    const role = e.target.selectedRole.value;

    if (uid && (role === 'Employee' || role === 'Client')) {
      fetch(`https://perform-tracker-server.vercel.app/users?uid=${uid}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ role })
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            savedUserByRole.role = role;
            saveUsersAsRole(savedUserByRole);
            setUid(null);
          }
        })
        .catch(err => console.error(err));
    }
  }

  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-[999] bg-black bg-opacity-50 flex justify-center items-center">
      <div className="card w-full sm:w-[600px] mx-5 sm:mx-0 bg-base-100 shadow-xl overflow-hidden">
        <form onSubmit={handleRole} className="card-body items-center p-0">
          <div className='bg-success w-full py-6'>
            <FaCheckCircle className='mx-auto text-5xl' color='white' />
          </div>
          <h2 className="card-title text-3xl mb-2">Welcome!</h2>
          <div className='flex gap-4'>
            <p className='text-xl leading-4'>I am an</p>
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <input id='employeeRole' type="radio" name="selectedRole" className="radio radio-primary" value="Employee" defaultChecked />
                <label htmlFor="employeeRole">Employee</label>
              </div>
              <div className='flex items-center gap-2'>
                <input id='clientRole' type="radio" name="selectedRole" className="radio radio-primary" value="Client" />
                <label htmlFor="clientRole">Client</label>
              </div>
            </div>
          </div>
          <div className="card-actions mb-4 mt-2">
            <button className="btn btn-primary text-white px-10">Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SelectRole