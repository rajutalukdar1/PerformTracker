import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditPersonalInfo = ({refetch, employees, setEditingInfo}) => {

  const { profile, name, _id, gender, phone } = employees;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditInfo = (data) => {
    const personalInfo = {
      name: data.name,
      phone: data.phone,
      passport_no: data.profile?.personalInfo?.passport_no,
      tel: data.profile?.personal_info?.tel,
      nationality: data.profile?.personal_info?.nationality,
      religion: data.profile?.personal_info?.religion,
      marital_status: data.profile?.personal_info?.marital_status,
      spouse: data.profile?.personal_info?.employment_of_spouse,
      children: data.profile?.personal_info?.no_of_children 
    };

    // Save employee personal information to the database
    fetch(`http://localhost:5000/employees/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(personalInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${profile?.personal_info?.name} is update successfully`);
        setEditingInfo(null);
        refetch();
      });
  };

    return (
        <>
      <div className="bg-white">
        <input
          type="checkbox"
          id="editPersonalInfoModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box relative max-w-screen-md">
            <label
              // onClick={() => setPromotion(null)}
              htmlFor="editPersonalInfoModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleSubmit(handleEditInfo)}>
            <p className='text-center text-2xl mb-2'>{name}</p>

              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">

                <div>
                <span className="label-text">Passport No</span>
                  <input
                    name="name"
                    defaultValue={name}
                    type="text"
                    className="input input-bordered my-2 w-full"
                    {...register("name", {
                      required: "Passport No is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-600" role="alert">
                      {errors.name?.message}
                    </p>
                  )}
                </div>

                <div>
                <span className="label-text">Tel</span>
                  <input
                    defaultValue={profile?.personal_info?.tel}
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
                    defaultValue={profile?.personal_info?.nationality}
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
                    defaultValue={profile?.personal_info?.religion}
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
                    defaultValue={profile?.personal_info?.marital_status}
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
                    defaultValue={profile?.personal_info?.employment_of_spouse}
                    name="spouse"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("spouse", {
                      required: "Employment of spouse is required",
                    })}
                  />
                  {errors.spouse && (
                    <p className="text-red-600" role="alert">
                      {errors.spouse?.message}
                    </p>
                  )}
                </div>

                <div>
                <span className="label-text">No. of children</span>
                  <input
                    defaultValue={profile?.personal_info?.no_of_children}
                    name="children"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("children", {
                      required: "Children is required",
                    })}
                  />
                  {errors.children && (
                    <p className="text-red-600" role="alert">
                      {errors.children?.message}
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