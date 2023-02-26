import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddPromotion = ({ refetch, setPromotion, promote }) => {
  console.log(promote);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddPromotion = (data) => {
    const promotion = {
      name: data.name,
      department: data.department,
      designation: data.designation,
      designation_to: data.designation_to,
      publishDate: moment().format('Do MMMM, YYYY'),
      img: promote.img,
    };

    // save promotion information to the database
    fetch("https://perform-tracker-server.vercel.app/promotion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(promotion),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(`${data.name} is added successfully`);
        refetch();
        setPromotion(null);
      });
  };

  return (
    <>
      <div className="">
        <input
          type="checkbox"
          id="addPromotionModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box pt-10">
            <label
              htmlFor="addPromotionModal"
              className="btn btn-sm btn-circle absolute right-2 top-0"
            >
              ✕
            </label>
            <form onSubmit={handleSubmit(handleAddPromotion)} >
              <div className="grid grid-cols-1">
                <div>
                  <input
                    type="text"
                    // disabled value={date}
                    placeholder="Promotion For *"
                    defaultValue={promote.name}
                    className="input input-bordered my-2 w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
                    {...register("name", {
                      required: "employee name is required",
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
                    name="designation"
                    type="text"
                    placeholder="Promotion From *"
                    defaultValue={promote.designation}
                    className="input input-bordered my-2 w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
                    {...register("designation", {
                      required: "Phone Number is required",
                    })}
                  />
                  {errors.designation && (
                    <p className="text-red-600" role="alert">
                      {errors.designation?.message}
                    </p>
                  )}
                </div>
                <div>
                  <select
                    name="designation_to"
                    className="select select-bordered w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600 "
                    {...register("designation_to", {
                      required: "Your Name is required",
                    })}
                  >
                    <option disabled selected>
                      Promotion To
                    </option>
                    <option>Web Developer</option>
                    <option>Web Designer</option>
                    <option>SEO Analyst</option>
                  </select>
                  {errors.designation_to && (
                    <p className="text-red-600" role="alert">
                      {errors.designation_to?.message}
                    </p>
                  )}
                </div>
              </div>
              <br />
              <div className="modal-action justify-center">
              <input
                className="cursor-pointer hover:bg-slate-900 px-3 py-2 rounded-lg bg-orange-600 text-white font-semibold"
                type="submit"
                value="Submit"
              />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPromotion;
