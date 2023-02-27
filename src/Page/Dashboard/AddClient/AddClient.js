import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import moment from "moment";

const AddClient = ({ refetch, setClients }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddClient = (data) => {
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
            img: imgData.data.url
          };

          // save clients information to the database
          fetch("https://perform-tracker-server.vercel.app/clients", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(client),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`${data.name} is added successfully`);
              refetch();
              setClients(null);
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className="">
        <input type="checkbox" id="addClientModal" className="modal-toggle " />
        <div className="modal pt-24">
          <div className="modal-box pt-12">
            <label
              htmlFor="addClientModal"
              className="btn btn-sm btn-circle absolute right-2  top-2"
            >
              ✕
            </label>
            <form onSubmit={handleSubmit(handleAddClient)}>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="clientId"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
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
                    type="text"
                    placeholder="Company Name"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
                    {...register("company", {
                      required: "Company Name is required",
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
                    type="text"
                    placeholder="Client Name"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
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
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
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
                    placeholder="Phone Number"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
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
                    className="select select-bordered w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
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
                    placeholder="gender"
                    className="select select-bordered w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
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
                    placeholder="Your Birthday"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
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
                    placeholder="Your address"
                    className="w-full rounded-lg  p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
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
                  className="file-input file-input-bordered w-full rounded-lg   text-sm bg-gray-900 placeholder:text-gray-600 "
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
                value="Add Client"
              />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClient;
