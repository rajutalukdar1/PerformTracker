import React from 'react';
<<<<<<< HEAD

const EditProfile = () => {
    return (
        <div>
            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <form action="" className="space-y-4">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div>
                                <input
                                    name="name"
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div>
                                <input
                                    name="progressed"
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                    placeholder="Progressed"
                                    type="text"
                                />
                            </div>
                            <div>
                                <input
                                    name="cost"
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                    placeholder="Cost"
                                    type="text"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <input
                                        name="createdby"
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                        placeholder="Created By"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <input
                                        name="status"
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                        placeholder="Status"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <input
                                        name="created"
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                        placeholder="Created On (Ex: 3rd Feb, 2023)"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <input
                                        name="deadline"
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                        placeholder="Deadline (Ex: 8th Feb, 2023)"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    name="details"
                                    className="textarea w-full rounded-lg border-transparent p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                    placeholder="Details"
                                ></textarea>
                            </div>
                            <div className="modal-action justify-center">
                                <button className="px-3 py-2 rounded-lg bg-orange-600 text-white font-semibold" type="submit">Add Project</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
=======
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditProfile = ({ refetch, client, setEditingClient }) => {

  const { _id, company, name, phone, birthday, address, position, gender, clientId } = client;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditClient = (data) => {

    const clientInfo = {
      company: data.company,
      name: data.name,
      phone: data.phone,
      birthday: data.birthday,
      address: data.address,
      position: data.position,
      gender: data.gender,
      clientId: data.clientId
    };

    console.log(clientInfo);

    // Save employee personal information to the database
    fetch(`http://localhost:5000/client/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(clientInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${name} Profile is update successfully`);
        setEditingClient(null);
        refetch();
      });
  };

  return (
    <>
      <div>

        <input
          type="checkbox"
          id="editClientModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box relative max-w-screen-md">
            <label
              htmlFor="editClientModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleSubmit(handleEditClient)}>
              <p className='text-center text-2xl font-semibold mb-2'>Client Profile</p>

              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">

                <div>
                  <span className="label-text">Company Name</span>
                  <input
                    name="company"
                    defaultValue={company}
                    type="text"
                    className="input input-bordered my-2 w-full"
                    {...register("company", {
                      required: "Company is required",
                    })}
                  />
                  {errors.company && (
                    <p className="text-red-600" role="alert">
                      {errors.company?.message}
                    </p>
                  )}
                </div>

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
                  <span className="label-text">Birthday</span>
                  <input
                    defaultValue={birthday}
                    name="birthday"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("birthday", {
                      required: "Birthday is required",
                    })}
                  />
                  {errors.birthday && (
                    <p className="text-red-600" role="alert">
                      {errors.birthday?.message}
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
                  <span className="label-text">Position</span>
                  <input
                    defaultValue={position}
                    name="position"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("position", {
                      required: "Position is required",
                    })}
                  />
                  {errors.position && (
                    <p className="text-red-600" role="alert">
                      {errors.position?.message}
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
                  <span className="label-text">Client Id</span>
                  <input
                    defaultValue={clientId}
                    name="clientId"
                    type="text"
                    className="input input-bordered my-2 w-full "
                    {...register("clientId", {
                      required: "Client Id is required",
                    })}
                  />
                  {errors.clientId && (
                    <p className="text-red-600" role="alert">
                      {errors.clientId?.message}
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

export default EditProfile;
>>>>>>> 5e02e5a0e914fe72d1ecdfee98e01c7d46b4cf2e
