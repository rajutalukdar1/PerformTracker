import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EditClientModal = ({ client, refetch, setEditingClient }) => {
  const { _id, company, name, email, phone, birthday, address, position, gender } = client;
  console.log(_id, "this is id");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleEditClient = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const client = {
            name: data.name,
            email: data.email,
            company: data.company,
            phone: data.phone,
            clientId: data.clientId,
            position: data.position,
            gender: data.gender,
            address: data.address,
            birthday: moment(new Date(data.birthday)).format("Do MMMM, YYYY"),
            img: imgData.data.url,
          };
          console.log(client, "this is client data");

          // save clients information to the database
          fetch(`https://perform-tracker-server.vercel.app/clients/${_id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(client),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is update successfully`);
              refetch();
              setEditingClient(null);
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
        <input
          type="checkbox"
          id="editPromotionModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box pt-10 ">
            <label
              htmlFor="editPromotionModal"
              className="btn btn-sm btn-circle absolute right-2  top-2"
            >
              ✕
            </label>
            <form onSubmit={handleSubmit(handleEditClient)}>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
                <div>
                  <input
                    type="text"
                    // disabled value={date}
                    placeholder="clientId"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2"
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
                <div>
                  <input
                    name="company"
                    defaultValue={company}
                    type="text"
                    placeholder="Promotion From *"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2 "
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
                  <input
                    name="name"
                    defaultValue={name}
                    type="text"
                    placeholder="Promotion For *"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2 "
                    {...register("name", {
                      required: "name is required",
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
                    name="email"
                    type="email"
                    defaultValue={email}
                    placeholder="Email Address"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2 "
                    {...register("email", {
                      required: "Email address is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600" role="alert">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    name="phone"
                    type="number"
                    defaultValue={phone}
                    placeholder="Phone Number"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2 "
                    {...register("phone", {
                      required: "Phone Number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-600" role="alert">
                      {errors.phone?.message}
                    </p>
                  )}
                </div>
                <div>
                  <select
                    name="position"
                    defaultValue={position}
                    className="select  my-2 w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2 "
                    {...register("position", {
                      required: "Your position is required",
                    })}
                  >
                    <option disabled selected>
                      position
                    </option>
                    <option>Web Developer</option>
                    <option>Web Designer</option>
                    <option>SEO Analyst</option>
                  </select>
                  {errors.position && (
                    <p className="text-red-600" role="alert">
                      {errors.position?.message}
                    </p>
                  )}
                </div>
                <div>
                  <select
                    name="gender"
                    className="select  my-2 w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2 "
                    {...register("gender", {
                      required: "Your Name is required",
                    })}
                  >
                    <option disabled selected>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-600" role="alert">
                      {errors.gender?.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    name="birthday"
                    type="date"
                    defaultValue={birthday}
                    placeholder="Your Birthday"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2 "
                    {...register("birthday", {
                      required: "Your Name is required",
                    })}
                  />
                  {errors.birthday && (
                    <p className="text-red-600" role="alert">
                      {errors.birthday?.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    name="address"
                    type="text"
                    defaultValue={address}
                    placeholder="Your address"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2 "
                    {...register("address", {
                      required: "Your address is required",
                    })}
                  />
                  {errors.address && (
                    <p className="text-red-600" role="alert">
                      {errors.address?.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: "Your Photo is required" })}
                  className="file-input file-input-bordered w-full rounded-lg   text-sm bg-gray-900 placeholder:text-gray-600 mt-2 "
                />
                {errors.img && (
                  <p className="text-red-600" role="alert">
                    {errors.img?.message}
                  </p>
                )}
              </div>
              <br />
                <div className="modal-action justify-center">
                <input
                className="cursor-pointer hover:bg-slate-900 px-3 py-2 rounded-lg bg-orange-600 text-white font-semibold"
                type="submit"
                value="Edit Client"
              />
                </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default EditClientModal;
