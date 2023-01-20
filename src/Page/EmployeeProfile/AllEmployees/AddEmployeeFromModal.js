import React from "react";

const AddEmployeeFromModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form action="" class="space-y-4">
            <div>
              <label class="sr-only" for="name">
                Name
              </label>
              <input
                name="name"
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label class="sr-only" for="name">
                designation
              </label>
              <input
                name="designation"
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="designation"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label class="sr-only" for="name">
                Address
              </label>
              <input
                name="address"
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Address"
                type="text"
                id="name"
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">
                  Salary
                </label>
                <input
                  name="salary"
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Salary"
                  type="text"
               
                />
              </div>

              <div>
                <label class="sr-only" for="phone">
                  Nationality
                </label>
                <input
            
                  name="nationality"
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="nationality"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">
                  Email
                </label>
                <input
                  name="email"
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label class="sr-only" for="phone">
                  Phone
                </label>
                <input
                  name="phone"
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                htmlFor="my-modal"
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
