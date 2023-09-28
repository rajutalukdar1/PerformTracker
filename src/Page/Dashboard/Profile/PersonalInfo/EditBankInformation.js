import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditBankInformation = ({ refetch, employees, setEditingBankInformation }) => {

    const { bank_name, bank_account_no, phone, secondary, secondary_relationship, secondary_phone, _id } = employees;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleEditContact = (data) => {
        const ContactInfo = {
            bank_name: data.bank_name,
            bank_account_no: data.bank_account_no,
            phone: data.phone,
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
                toast.success(`Bank Information is update successfully`);
                setEditingBankInformation(null);
                refetch();
            });
    };

    return (
        <>
            <div>

                <input
                    type="checkbox"
                    id="editBankInfoModal"
                    className="modal-toggle "
                />
                <div className="modal pt-24">
                    <div className="modal-box relative max-w-screen-md">
                        <label
                            htmlFor="editBankInfoModal"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <form onSubmit={handleSubmit(handleEditContact)}>
                            <p className='text-center text-2xl font-semibold mb-2'>Bank Information</p>

                            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">

                                <div>
                                    <span className="label-text">Bank Name</span>
                                    <input
                                        name="bank_name"
                                        defaultValue={bank_name}
                                        type="text"
                                        className="input input-bordered my-2 w-full"
                                        {...register("bank_name", {
                                            required: "Bank Name is required",
                                        })}
                                    />
                                    {errors.bank_name && (
                                        <p className="text-red-600" role="alert">
                                            {errors.bank_name?.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <span className="label-text">Bank Account No</span>
                                    <input
                                        defaultValue={bank_account_no}
                                        name="bank_account_no"
                                        type="text"
                                        className="input input-bordered my-2 w-full "
                                        {...register("bank_account_no", {
                                            required: "Bank account no is required",
                                        })}
                                    />
                                    {errors.bank_account_no && (
                                        <p className="text-red-600" role="alert">
                                            {errors.bank_account_no?.message}
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

export default EditBankInformation;