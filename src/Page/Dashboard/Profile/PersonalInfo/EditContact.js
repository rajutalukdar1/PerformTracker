import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditPersonalInfo = ({ refetch, employees, setEditingContact }) => {

  const { primary, primary_relationship, primary_phone, secondary, secondary_relationship, secondary_phone, _id } = employees;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditContact = (data) => {
    const ContactInfo = {
      primary: data.primary,
      primary_relationship: data.primary_relationship,
      primary_phone: data.primary_phone,
      secondary: data.secondary,
      secondary_relationship: data.secondary_relationship,
      secondary_phone: data.secondary_phone
    };

    // Save employee personal information to the database
    fetch(`https://perform-tracker-server.vercel.app/employees/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ContactInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`Emergency Contact is update successfully`);
        setEditingContact(null);
        refetch();
      });
  };

  return (
    <>
      <div>

        <input
          type="checkbox"
          id="editContactModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box relative max-w-screen-md">
            <label
              htmlFor="editContactModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleSubmit(handleEditContact)}>
              <p className='text-center text-2xl font-semibold mb-2'>Emergency Contact</p>

              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">

                <div>
                  <span className="label-text">Primary</span>
                  <input
                    name="primary"
                    defaultValue={primary}
                    type="text"
                    className="input input-bordered my-2 w-full"
                    {...register("primary", {
                      required: "Primary No is required",
                    })}
                  />
                  {errors.primary && (
                    <p className="text-red-600" role="alert">
                      {errors.primary?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Primary Relationship</span>
                  <input
                    defaultValue={primary_relationship}
                    name="primary_relationship"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("primary_relationship", {
                      required: "Primary Relationship is required",
                    })}
                  />
                  {errors.primary_relationship && (
                    <p className="text-red-600" role="alert">
                      {errors.primary_relationship?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Primary Phone</span>
                  <input
                    defaultValue={primary_phone}
                    name="primary_phone"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("primary_phone", {
                      required: "Primary Phone is required",
                    })}
                  />
                  {errors.primary_phone && (
                    <p className="text-red-600" role="alert">
                      {errors.primary_phone?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Secondary</span>
                  <input
                    defaultValue={secondary}
                    name="secondary"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("secondary", {
                      required: "Secondary is required",
                    })}
                  />
                  {errors.secondary && (
                    <p className="text-red-600" role="alert">
                      {errors.secondary?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Secondary Relationship</span>
                  <input
                    defaultValue={secondary_relationship}
                    name="secondary_relationship"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("secondary_relationship", {
                      required: "Secondary Relationship Status is required",
                    })}
                  />
                  {errors.secondary_relationship && (
                    <p className="text-red-600" role="alert">
                      {errors.secondary_relationship?.message}
                    </p>
                  )}
                </div>

                <div>
                  <span className="label-text">Secondary Phone</span>
                  <input
                    defaultValue={secondary_phone}
                    name="secondary_phone"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("secondary_phone", {
                      required: "Secondary Phone is required",
                    })}
                  />
                  {errors.secondary_phone && (
                    <p className="text-red-600" role="alert">
                      {errors.secondary_phone?.message}
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