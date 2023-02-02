import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddTaskModal = ({refetch, setTask}) => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
   
    return (
        <>
        <div className=''>    
       <input type="checkbox" id="my-modal-3" className="modal-toggle " />
       <div className="modal pt-24">
       <div className="modal-box relative ">
           <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2  top-2">✕</label>
           
           <form 
        //    onSubmit={handleSubmit(handleAddDoctor)}
           >
           <div className='grid grid-cols-1'>
           <div>
           <input type="text" 
           // disabled value={date}
            className="input input-bordered my-2 w-full " {...register("name", {required: "Your Name is required" })}/>
             {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
           </div>
            {/* <div className="form-control w-full "> */}
                    
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

export default AddTaskModal;