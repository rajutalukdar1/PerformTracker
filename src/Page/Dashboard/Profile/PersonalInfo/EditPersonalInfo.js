import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditPersonalInfo = ({ refetch, employees, setEditingInfo }) => {

  const { passport_no, tel, nationality, religion, marital_status, employment_of_spouse, no_of_children, _id } = employees;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditEmployee = (data) => {
    const PersonalInfo = {
      passport_no: data.passport_no,
      tel: data.tel,
      nationality: data.nationality,
      religion: data.religion,
      marital_status: data.marital_status,
      employment_of_spouse: data.employment_of_spouse,
      no_of_children: data.no_of_children
    };

    // Save employee personal information to the database
    fetch(`https://perform-tracker-server.vercel.app/employees/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(PersonalInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`Personal Information's is update successfully`);
        setEditingInfo(null);
        refetch();
      });
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="editPersonalInfoModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box relative max-w-screen-md">
            <label
              htmlFor="editPersonalInfoModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleSubmit(handleEditEmployee)}>
              <p className='text-center text-2xl font-semibold mb-2'>Personal Information's</p>

              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">

                <div>
                  <span className="label-text">Passport No</span>
                  <input
                    name="passport_no"
                    defaultValue={passport_no}
                    type="text"
                    className="input input-bordered my-2 w-full"
                    {...register("passport_no", {
                      required: "Passport No is required",
                    })}

                  />
                  {errors.passport_no && (
                    <p className="text-red-600" role="alert">
                      {errors.passport_no.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Tel</span>
                  <input
                    defaultValue={tel}
                    name="tel"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("tel", {
                      required: "Tel is required",
                    })}
                  />
                  {errors.tel && (
                    <p className="text-red-600" role="alert">
                      {errors.tel?.message}
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
                  <span className="label-text">Religion</span>
                  <input
                    defaultValue={religion}
                    name="religion"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("religion", {
                      required: "Religion is required",
                    })}
                  />
                  {errors.religion && (
                    <p className="text-red-600" role="alert">
                      {errors.religion?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Marital status</span>
                  <input
                    defaultValue={marital_status}
                    name="marital_status"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("marital_status", {
                      required: "Marital Status is required",
                    })}
                  />
                  {errors.marital_status && (
                    <p className="text-red-600" role="alert">
                      {errors.marital_status?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Employment of spouse</span>
                  <input
                    defaultValue={employment_of_spouse}
                    name="employment_of_spouse"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("employment_of_spouse", {
                      required: "Employment of spouse is required",
                    })}
                  />
                  {errors.employment_of_spouse && (
                    <p className="text-red-600" role="alert">
                      {errors.employment_of_spouse?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">No. of children</span>
                  <input
                    defaultValue={no_of_children}
                    name="no_of_children"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("no_of_children", {
                      required: "Children is required",
                    })}
                  />
                  {errors.no_of_children && (
                    <p className="text-red-600" role="alert">
                      {errors.no_of_children?.message}
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

export default EditPersonalInfo;