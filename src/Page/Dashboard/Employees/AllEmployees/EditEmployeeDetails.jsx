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

        <div className="modal-box">

          <form onSubmit={handleEditEmployee} action="" className="space-y-4">
            <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

            <div className="mt-8">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                defaultValue={name}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <select name="gender" className="select  rounded-lg border-gray-200 p-3 w-full max-w-xs">
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>

                </select>
              </div>

              <div>
                <select name="maritalStatus" className="select  rounded-lg border-gray-200 p-3 w-full max-w-xs">
                  <option disabled selected>
                    Select marital Status
                  </option>
                  <option>unmarried</option>
                  <option>married</option>


                </select>
              </div>
            </div>
            <div>
              <input name="employeeImg" type="file" defaultValue={img} placeholder="select your photo" className="file-input file-input-bordered  w-full" />
            </div>
            <div className="modal-action">
              <button className="px-3 py-2 rounded-lg bg-orange-600  text-white font-semibold text-xl" type="submit">Submit</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeDetails;