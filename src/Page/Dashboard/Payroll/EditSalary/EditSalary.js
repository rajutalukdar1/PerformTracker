import moment from 'moment';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditSalary = ({employee, refetch, setEditingSalary }) => {
    const {_id, name, address, designation, email, gender, img, maritalStatus, nationality, phone, salary, employeeId } = employee;
    console.log(employee, "this edit part salary")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditPromotion = (data) => {
    const salary = {
      name: data.name,
      designation: data.designation,
      date: data.date,
      salary: data.salary,
      employeeId: data.employeeId,
      joiningDate: moment(new Date(data.joiningDate)).format("Do MMMM, YYYY"),



    };

    // save clients information to the database
    fetch(`http://localhost:5000/employees/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(salary),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${data.name} is update successfully`);
        setEditingSalary(null);
        refetch();
      });
  };
    return (
        <>
        <div className="">
          <input
            type="checkbox"
            id="editSalaryModal"
            className="modal-toggle "
          />
          <div className="modal pt-24">
            <div className="modal-box relative ">
              <label
                // onClick={() => setPromotion(null)}
                htmlFor="editSalaryModal"
                className="btn btn-sm btn-circle absolute right-2  top-2"
              >
                ✕
              </label>
              <form onSubmit={handleSubmit(handleEditPromotion)}>
                <div className="grid grid-cols-1">
                  <div>
                    <input
                      name="name"
                      defaultValue={name}
                      type="text"
                      // defaultValue={user?.displayName}
                      className="input input-bordered my-2 w-full "
                      {...register("name", {
                        required: "Client Name is required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-600" role="alert">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      defaultValue={employeeId}
                      name="employeeId"
                      type="text"
                      className="input input-bordered my-2 w-full "
                      {...register("employeeId", {
                        required: "Phone employeeId is required",
                      })}
                    />
                    {errors.employeeId && (
                      <p className="text-red-600" role="alert">
                        {errors.employeeId?.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      defaultValue={email}
                      name="email"
                      type="text"
                      className="input input-bordered my-2 w-full "
                      {...register("email", {
                        required: "Phone email is required",
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-600" role="alert">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <select
                      name="designation"
                      // defaultValue={designation}
                      className="select select-bordered w-full "
                      {...register("designation", {
                        required: "Your designation is required",
                      })}
                    >
                      <option hidden value="">
                        Designation
                      </option>
                      <option>Web Developer</option>
                      <option>Web Designer</option>
                      <option>SEO Analyst</option>
                    </select>
                    {errors.designation && (
                      <p className="text-red-600" role="alert">
                        {errors.designation?.message}
                      </p>
                    )}
                  </div>
  
                  <div>
                    <input
                      name="date"
                    //   defaultValue={date}
                      type="date"
                      placeholder="date"
                      className="input input-bordered my-2 w-full "
                      {...register("joiningDate", {
                        required: "Your joiningDate is required",
                      })}
                    />
                    {errors.joiningDate && (
                      <p className="text-red-600" role="alert">
                        {errors.joiningDate?.message}
                      </p>
                    )}
                  </div>
                </div>
  
                <br />
                <input
                  className="btn btn-accent w-full my-4"
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

export default EditSalary;
