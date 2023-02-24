import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditEmployeeProfile = ({ refetch, employees, setEditingEmployee }) => {

  const { _id, name, phone, employeeId, gender, address, joiningDate, DOB, maritalStatus, nationality, designation } = employees;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditEmployee = (data) => {
    const EmployeeInfo = {
      name: data.name,
      phone: data.phone,
      employeeId: data.employeeId,
      gender: data.gender,
      address: data.address,
      joiningDate: data.joiningDate,
      DOB: data.DOB,
      maritalStatus: data.maritalStatus,
      nationality: data.nationality,
      designation: data.designation
    };

    // Save employee personal information to the database
    fetch(`http://localhost:5000/employees/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(EmployeeInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${name} Profile is update successfully`);
        setEditingEmployee(null);
        refetch();
      });
  };

  return (
    <>
      <div>

        <input
          type="checkbox"
          id="editEmployeeModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box relative max-w-screen-md">
            <label
              htmlFor="editEmployeeModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleSubmit(handleEditEmployee)}>
              <p className='text-center text-2xl font-semibold mb-2'>Employee Profile</p>

              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">

                <div>
                  <span className="label-text">Name</span>
                  <input
                    defaultValue={name}
                    name="name"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-600" role="alert">
                      {errors.name?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Designation</span>
                  <input
                    name="designation"
                    defaultValue={designation}
                    type="text"
                    className="input input-bordered my-2 w-full"
                    {...register("designation", {
                      required: "Designation is required",
                    })}
                  />
                  {errors.designation && (
                    <p className="text-red-600" role="alert">
                      {errors.designation?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Employee Id</span>
                  <input
                    defaultValue={employeeId}
                    name="employeeId"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("employeeId", {
                      required: "Employee Id is required",
                    })}
                  />
                  {errors.employeeId && (
                    <p className="text-red-600" role="alert">
                      {errors.employeeId?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Joining Date</span>
                  <input
                    defaultValue={joiningDate}
                    name="joiningDate"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("joiningDate", {
                      required: "Joining Date is required",
                    })}
                  />
                  {errors.joiningDate && (
                    <p className="text-red-600" role="alert">
                      {errors.joiningDate?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Phone</span>
                  <input
                    defaultValue={phone}
                    name="phone"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("phone", {
                      required: "Phone is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-600" role="alert">
                      {errors.phone?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Address</span>
                  <input
                    defaultValue={address}
                    name="address"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && (
                    <p className="text-red-600" role="alert">
                      {errors.address?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Gender</span>
                  <input
                    defaultValue={gender}
                    name="gender"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                  />
                  {errors.gender && (
                    <p className="text-red-600" role="alert">
                      {errors.gender?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Nationality</span>
                  <input
                    defaultValue={nationality}
                    name="nationality"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("nationality", {
                      required: "Nationality is required",
                    })}
                  />
                  {errors.nationality && (
                    <p className="text-red-600" role="alert">
                      {errors.nationality?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Birthday</span>
                  <input
                    defaultValue={DOB}
                    name="DOB"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("DOB", {
                      required: "DOB is required",
                    })}
                  />
                  {errors.DOB && (
                    <p className="text-red-600" role="alert">
                      {errors.DOB?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Marital status</span>
                  <input
                    defaultValue={maritalStatus}
                    name="maritalStatus"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("maritalStatus", {
                      required: "Marital Status is required",
                    })}
                  />
                  {errors.maritalStatus && (
                    <p className="text-red-600" role="alert">
                      {errors.maritalStatus?.message}
                    </p>
                  )}
                </div>

              </div>

              <br />
              <input
                className="btn btn-hover color-9 w-full "
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEmployeeProfile;
