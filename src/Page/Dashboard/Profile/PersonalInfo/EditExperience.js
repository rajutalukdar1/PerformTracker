import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditExperience = ({ refetch, employees, setEditingExperience }) => {

    const { experience_1, experience_1_join, experience_2, experience_2_join, experience_3, experience_3_join, _id } = employees;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleEditExperience = (data) => {
        const ExperienceInfo = {
            experience_1: data.experience_1,
            experience_1_join: data.experience_1_join,
            experience_2: data.experience_2,
            experience_2_join: data.experience_2_join,
            experience_3: data.experience_3,
            experience_3_join: data.experience_3_join,
        };

        // Save employee personal information to the database
        fetch(`https://perform-tracker-server.vercel.app/employees/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(ExperienceInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success(`Experience is update successfully`);
                setEditingExperience(null);
                refetch();
            });
    };

    return (
        <>
            <div>

                <input
                    type="checkbox"
                    id="editExperienceModal"
                    className="modal-toggle "
                />
                <div className="modal pt-24">
                    <div className="modal-box relative max-w-screen-md">
                        <label
                            htmlFor="editExperienceModal"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <form onSubmit={handleSubmit(handleEditExperience)}>
                            <p className='text-center text-2xl font-semibold mb-2'>Experience</p>

                            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">

                                <div>
                                    <span className="label-text">Experience 1</span>
                                    <input
                                        name="experience_1"
                                        defaultValue={experience_1}
                                        type="text"
                                        className="input input-bordered my-2 w-full"
                                        {...register("experience_1", {
                                            required: "Experience is required",
                                        })}
                                    />
                                    {errors.experience_1 && (
                                        <p className="text-red-600" role="alert">
                                            {errors.experience_1?.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <span className="label-text">Passing Years</span>
                                    <input
                                        defaultValue={experience_1_join}
                                        name="experience_1_join"
                                        type="text"
                                        className="input input-bordered my-2 w-full "
                                        {...register("experience_1_join", {
                                            required: "Passing Years is required",
                                        })}
                                    />
                                    {errors.experience_1_join && (
                                        <p className="text-red-600" role="alert">
                                            {errors.experience_1_join?.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <span className="label-text">Experience 2</span>
                                    <input
                                        defaultValue={experience_2}
                                        name="experience_2"
                                        type="text"
                                        className="input input-bordered my-2 w-full "
                                        {...register("experience_2", {
                                            required: "Experience is required",
                                        })}
                                    />
                                    {errors.experience_2 && (
                                        <p className="text-red-600" role="alert">
                                            {errors.experience_2?.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <span className="label-text">Passing Years</span>
                                    <input
                                        defaultValue={experience_2_join}
                                        name="experience_2_join"
                                        type="text"
                                        className="input input-bordered my-2 w-full "
                                        {...register("experience_2_join", {
                                            required: "Passing Years is required",
                                        })}
                                    />
                                    {errors.experience_2_join && (
                                        <p className="text-red-600" role="alert">
                                            {errors.experience_2_join?.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <span className="label-text">Experience 3</span>
                                    <input
                                        defaultValue={experience_3}
                                        name="experience_3"
                                        type="text"
                                        className="input input-bordered my-2 w-full "
                                        {...register("experience_3", {
                                            required: "Experience is required",
                                        })}
                                    />
                                    {errors.experience_3 && (
                                        <p className="text-red-600" role="alert">
                                            {errors.experience_3?.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <span className="label-text">Passing Years</span>
                                    <input
                                        defaultValue={experience_3_join}
                                        name="experience_3_join"
                                        type="text"
                                        className="input input-bordered my-2 w-full "
                                        {...register("experience_3_join", {
                                            required: "Passing Years is required",
                                        })}
                                    />
                                    {errors.experience_3_join && (
                                        <p className="text-red-600" role="alert">
                                            {errors.experience_3_join?.message}
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

export default EditExperience;