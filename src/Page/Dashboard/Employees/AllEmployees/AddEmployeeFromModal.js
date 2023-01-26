import React from "react";

const AddEmployeeFromModal = () => {
  return (
    <div>
      <input type="checkbox" id="add-employee-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label htmlFor="add-employee-modal" className="btn btn-sm btn-circle bg-white hover:bg-gray-50 border-transparent hover:border-transparent text-gray-600 absolute right-2 top-2">✕</label>
          <form action="" className="space-y-4 mt-6">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                name="name"
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
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="designation"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="name">
                Address
              </label>
              <input
                name="address"
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Address"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Salary
                </label>
                <input
                  name="salary"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Salary"
                  type="text"

                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Nationality
                </label>
                <input

                  name="nationality"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="nationality"
                  type="tel"
                  id="phone"
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
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <select className="select  rounded-lg border-gray-200 p-3 w-full max-w-xs">
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>

                </select>
              </div>

              <div>
                <select className="select  rounded-lg border-gray-200 p-3 w-full max-w-xs">
                  <option disabled selected>
                    Select marital Status
                  </option>
                  <option>unmarried</option>
                  <option>married</option>


                </select>
              </div>
            </div>
            <div className="modal-action">
              <label
                htmlFor="add-employee-modal"
                className="px-3 py-2 rounded-lg bg-orange-600  text-white font-semibold text-xl"
              >
                <button type="submit">Submit</button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeFromModal;
