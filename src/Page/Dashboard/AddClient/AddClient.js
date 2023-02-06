import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const AddClient = ({ refetch, setClients }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddClient = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
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
                        employee_id: data.employee_id,
                        position: data.position,
                        gender: data.gender,
                        img: imgData.data.url
                    }

                    // save clients information to the database
                    fetch('https://perform-tracker-server.vercel.app/clients', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(client)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            refetch();
                            setClients(null);
                        })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    // if(isLoading){
    //     return <Loading></Loading>
    // }

    return (
        <>
            <div className=''>
                <input type="checkbox" id="addClientModal" className="modal-toggle " />
                <div className="modal pt-24">
                    <div className="modal-box relative ">
                        <label htmlFor="addClientModal" className="btn btn-sm btn-circle absolute right-2  top-2">✕</label>
                        <form
                            onSubmit={handleSubmit(handleAddClient)}
                        >
                            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2'>
                                <div>
                                    <input type="text"
                                        // disabled value={date}
                                        placeholder="Company Name"
                                        className="input input-bordered my-2 w-full " {...register("company", { required: "Company Name is required" })} />
                                    {errors.company && <p className='text-red-600' role="alert">{errors.company?.message}</p>}
                                </div>
                                <div>
                                    <input name='name' type="text"
                                        // defaultValue={user?.displayName}
                                        placeholder="Client Name" className="input input-bordered my-2 w-full " {...register("name", { required: "Client Name is required" })} />
                                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                                </div>
                                <div>
                                    <input name='email' type="email"
                                        // defaultValue={user?.email}
                                        placeholder="Email Address" className="input input-bordered my-2 w-full " {...register("company", { required: "Email address is required" })} />
                                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                                </div>
                                <div>
                                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered my-2 w-full " {...register("phone", { required: "Phone Number is required" })} />
                                    {errors.phone && <p className='text-red-600' role="alert">{errors.phone?.message}</p>}
                                </div>
                                <div>
                                    <input name='position' type="text" placeholder="Your position" className="input input-bordered my-2 w-full " {...register("position", { required: "Your Name is required" })} />
                                    {errors.position && <p className='text-red-600' role="alert">{errors.position?.message}</p>}
                                </div>
                                <div>
                                    <input name='gender' type="text" placeholder="Your Gender" className="input input-bordered my-2 w-full " {...register("gender", { required: "Your Name is required" })} />
                                    {errors.gender && <p className='text-red-600' role="alert">{errors.gender?.message}</p>}
                                </div>
                                <div>
                                    <input name='birthday' type="text" placeholder="Your Birthday" className="input input-bordered my-2 w-full " {...register("birthday", { required: "Your Name is required" })} />
                                    {errors.birthday && <p className='text-red-600' role="alert">{errors.birthday?.message}</p>}
                                </div>
                                {/* <div className="form-control w-full "> */}
                            </div>
                                <div>
                                    <label className="label"><span className="label-text">Photo</span></label>
                                    <input type="file" {...register("image", { required: "Your Photo is required" })} className="file-input file-input-bordered w-full " />
                                    {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}
                                </div>
                            {/* </div> */}
                            <br />
                            <input className='btn btn-accent w-full my-4' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddClient;
