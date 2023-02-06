import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const EditEmployeeDetails = ({ id }) => {


  const { data: { name, address, designation, email, gender, img, maritalStatus, nationality, phone, salary } = {}, refetch } = useQuery({
    queryKey: ['employee', id],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/employees/${id}`).then(res => res.json()),
  });

  const handleEditEmployee = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const designation = e.target.designation.value
    const address = e.target.address.value
    const phone = e.target.phone.value
    const salary = e.target.salary.value
    const nationality = e.target.nationality.value
    const gender = e.target.gender.value
    const maritalStatus = e.target.maritalStatus.value

    const image = e.target.employeeImg.files[0]
    const formData = new FormData()
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=dac9951f9d4ccd78dfaec90fb6367a69`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {

        if (imgData.success) {
          const update = {
            name: name,
            email: email,
            designation: designation,
            address: address,
            phone: phone,
            salary: salary,
            nationality: nationality,
            gender: gender,
            maritalStatus: maritalStatus,
            img: imgData.data.url,
            postTime: new Date().toLocaleString()

          }
          fetch(`https://perform-tracker-server.vercel.app/employees/${id}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(update)

          })
            .then(res => res.json())
            .then(result => {
              console.log(result);
              toast.success('Employee is successfully Updated!')
            })
        }
      })
    e.target.reset()
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-0 mt-[88px]">
          <form onSubmit={handleEditEmployee} action="" className="space-y-4 bg-slate-900 p-6">
            <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute bg-slate-700 right-2 top-2">✕</label>
            <div className="pt-2">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                defaultValue={name}
                className="w-full rounded-lg p-3 text-sm bg-slate-800"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="name">
                designation
              </label>
              <input
                name="designation"
                defaultValue={designation}
                className="w-full rounded-lg p-3 text-sm bg-slate-800"
                placeholder="designation"
                type="text"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="name">
                Address
              </label>
              <input
                name="address"
                defaultValue={address}
                className="w-full rounded-lg p-3 text-sm bg-slate-800"
                placeholder="Address"
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Salary
                </label>
                <input
                  name="salary"
                  defaultValue={salary}
                  className="w-full rounded-lg p-3 text-sm bg-slate-800"
                  placeholder="Salary"
                  type="text"
                />
              </div>
              <div>
                <label className="sr-only">
                  Nationality
                </label>
                <input
                  defaultValue={nationality}
                  name="nationality"
                  className="w-full rounded-lg p-3 text-sm bg-slate-800"
                  placeholder="nationality"
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  name="email"
                  defaultValue={email}
                  className="w-full rounded-lg p-3 text-sm bg-slate-800"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  name="phone"
                  defaultValue={phone}
                  className="w-full rounded-lg p-3 text-sm bg-slate-800"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <select name="gender" className="select rounded-lg p-3 w-full max-w-xs bg-slate-800">
                  <option hidden value="">
                    Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div>
                <select name="maritalStatus" className="select bg-slate-800 rounded-lg p-3 w-full max-w-xs">
                  <option hidden value="">
                    Select marital Status
                  </option>
                  <option>unmarried</option>
                  <option>married</option>
                </select>
              </div>
            </div>
            <div>
              <input name="employeeImg" type="file" defaultValue={img} placeholder="select your photo" className="file-input bg-slate-800 w-full" />
            </div>
            <div className="modal-action justify-center">
              <button className="px-3 py-2 rounded-lg bg-primary  text-white font-semibold text-xl" type="submit">Submit</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeDetails;