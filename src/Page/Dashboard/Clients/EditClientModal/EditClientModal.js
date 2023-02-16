import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditClientModal = ({client, refetch, setClient}) => {
    const { _id, img, company, name, position } = client;
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const imageHostKey = process.env.REACT_APP_imgbb_key;
    
      const handleEditPromotion = (data) => {
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
              const promotion = {
                name: data.name,
                // email: data.email,
                department: data.department,
                designation: data.designation,
                designation_to: data.designation_to,
                date: data.date,
                img: imgData.data.url,
              };
    
              // save clients information to the database
              fetch(`http://localhost:5000/clients/${client?._id}`, {
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
                  refetch();
                  setClient(null);
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
        <input
          type="checkbox"
          id="editPromotionModal"
          className="modal-toggle "
        />
        <div className="modal pt-24">
          <div className="modal-box relative ">
            <label
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
                    defaultValue={company}
                    type="text"
                    // defaultValue={user?.displayName}
                    placeholder="Promotion From *"
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
                  defaultValue={name}
                    type="text"
                    // disabled value={date}
                    placeholder="Promotion For *"
                    className="input input-bordered my-2 w-full "
                    {...register("department", {
                      required: "department is required",
                    })}
                  />
                  {errors.department && (
                    <p className="text-red-600" role="alert">
                      {errors.department?.message}
                    </p>
                  )}
                </div>
                

                <div>
                  <input
                  defaultValue={position}
                    name="designation"
                    type="text"
                    placeholder="Promotion From *"
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
                    // defaultValue={}
                    className="select select-bordered w-full "
                    {...register("designation_to", {
                      required: "Your Name is required",
                    })}
                  >
                    <option disabled selected>
                      Gender
                    </option>
                    <option>Mail</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  {errors.designation_to && (
                    <p className="text-red-600" role="alert">
                      {errors.designation_to?.message}
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
                  className="file-input file-input-bordered w-full "
                />
                {errors.img && (
                  <p className="text-red-600" role="alert">
                    {errors.img?.message}
                  </p>
                )}
              </div>
              {/* </div> */}
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

export default EditClientModal;