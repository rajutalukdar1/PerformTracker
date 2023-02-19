import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EditPromotion = ({ refetch, setEditingPromotion, promotion }) => {
  const { _id, name, designation, designation_to, date } = promotion;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditPromotion = (data) => {
    const promotion = {
      name: data.name,
      department: data.department,
      designation: data.designation,
      designation_to: data.designation_to,
      date: data.date,
    };

    // save clients information to the database
    fetch(`https://perform-tracker-server.vercel.app/promotion/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(promotion),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${data.name} is update successfully`);
        setEditingPromotion(null);
        refetch();
      });
  };
  return (
    <>
      <div className="">
        <input
          type="checkbox"
          id="editPromotionModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box relative ">
            <label
              // onClick={() => setPromotion(null)}
              htmlFor="editPromotionModal"
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
                    defaultValue={designation}
                    name="designation"
                    type="text"
                    className="input input-bordered my-2 w-full "
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
                    defaultValue={designation_to}
                    className="select select-bordered w-full "
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

                <div>
                  <input
                    name="date"
                    defaultValue={date}
                    type="date"
                    placeholder="date"
                    className="input input-bordered my-2 w-full "
                    {...register("date", {
                      required: "Your date is required",
                    })}
                  />
                  {errors.date && (
                    <p className="text-red-600" role="alert">
                      {errors.date?.message}
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

export default EditPromotion;
