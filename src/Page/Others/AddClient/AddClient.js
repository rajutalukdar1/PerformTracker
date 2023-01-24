import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Share/Loading/Loading';

const AddClient = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();
    

    const { isLoading} = useQuery({
        // queryKey: ['specialty'],
        // queryFn: async() =>{
        //     const res = await fetch('https://doctors-portal-server-kazirofiq.vercel.app/appointmentSpecialty');
        //     const data = await res.json();
        //     return data;
        // }
    })

    const handleAddDoctor = data =>{
        
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
                if(imgData.success){
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        company: data.company,
                        
                        image:imgData.data.url
                    }

                    // save doctor information to the database
                    fetch('https://perform-tracker-server.vercel.app/clients', {
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                    .then(res => res.json())
                    .then(result =>{
                        console.log(result);
                        toast.success(`${data.name} is added successfully`);
                        navigate('/dashboard/clients');
                    })

                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })

    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
      <>
           
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
      <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          
          <form 
          onSubmit={handleSubmit(handleAddDoctor)}
          >
          <input type="text" 
          // disabled value={date}
           className="input input-bordered my-2 w-full " {...register("company", {required: "Your Name is required" })}/>
            {errors.company && <p className='text-red-600' role="alert">{errors.company?.message}</p>}
          <input name='name' type="text" 
          // defaultValue={user?.displayName}
            placeholder="Your Name" className="input input-bordered my-2 w-full " {...register("name", {required: "Your Name is required" })}/>
           {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
          <input name='email' type="email" 
          // defaultValue={user?.email}
            readOnly placeholder="Email Address" className="input input-bordered my-2 w-full " {...register("company", {required: "Your Name is required" })} />
             {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
          <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered my-2
           w-full " />
           <br />
           <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {required: "Your Photo is required" })} className="file-input file-input-bordered w-full " />
                    {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}
                </div>
           <input className='btn btn-accent w-full' type="submit" value="Submit" />
          </form>
           
      </div>
   </div> 
</>
    );
};

export default AddClient;
