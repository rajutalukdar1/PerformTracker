import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditEducationInfo = ({ refetch, employees, setEditingEduInfo }) => {

    const { ug, ug_year, pg, pg_year, _id } = employees;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleEditEduIfo = (data) => {
        const EduInfo = {
            ug: data.ug,
            ug_year: data.ug_year,
            pg: data.pg,
            pg_year: data.pg_year
        };

        // Save employee personal information to the database
        fetch(`http://localhost:5000/employees/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(EduInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success(`Education information's is update successfully`);
                setEditingEduInfo(null);
                refetch();
            });
    };

    return (
        <>
            <div>

                <input
                    type="checkbox"
                    id="editEduInfoModal"
                    className="modal-toggle "
                />
                <div className="modal pt-24">
                    <div className="modal-box relative max-w-screen-md">
                        <label
                            htmlFor="editEduInfoModal"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <form onSubmit={handleSubmit(handleEditEduIfo)}>
                            <p className='text-center text-2xl font-semibold mb-2'>Education information's</p>

                            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">

                                <div>
                                    <span className="label-text">Groups</span>
                                    <input
                                        name="ug"
                                        defaultValue={ug}
                                        type="text"
                                        className="input input-bordered my-2 w-full"
                                        {...register("ug", {
                                            required: "Groups is required",
                                        })}
                                    />
                                    {errors.ug && (
                                        <p className="text-red-600" role="alert">
                                            {errors.ug?.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <span className="label-text">Passing Years</span>
                                    <input
                                        defaultValue={ug_year}
                                        name="ug_year"
                                        type="text"
                                        className="input input-bordered my-2 w-full "
                                        {...register("ug_year", {
                                            required: "Passing Years is required",
                                        })}
                                    />
                                    {errors.ug_year && (
                                        <p className="text-red-600" role="alert">
                                            {errors.ug_year?.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <span className="label-text">Groups</span>
                                    <input
                                        defaultValue={pg}
                                        name="pg"
                                        type="text"
                                        className="input input-bordered my-2 w-full "
                                        {...register("pg", {
                                            required: "Groups is required",
                                        })}
                                    />
                                    {errors.pg && (
                                        <p className="text-red-600" role="alert">
                                            {errors.pg?.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <span className="label-text">Passing Years</span>
                                    <input
                                        defaultValue={pg_year}
                                        name="pg_year"
                                        type="text"
                                        className="input input-bordered my-2 w-full "
                                        {...register("pg_year", {
                                            required: "Passing Years is required",
                                        })}
                                    />
                                    {errors.pg_year && (
                                        <p className="text-red-600" role="alert">
                                            {errors.pg_year?.message}
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

export default EditEducationInfo;