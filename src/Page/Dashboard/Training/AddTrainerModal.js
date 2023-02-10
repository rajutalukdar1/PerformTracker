
import React from "react";
import { toast } from "react-hot-toast";
const imgbbKey = process.env.REACT_APP_imgbb_key;

const AddTrainerModal = () => {
  
  

  
  const handleAddTrainerForm = (e) =>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const status = e.target.status.value
    const role = e.target.role.value
    const description = e.target.description.value
    const image =  e.target.employeeImg.files[0]
    const formData = new FormData()
    formData.append('image',image )
   
    const url = `https://api.imgbb.com/1/upload?key=dac9951f9d4ccd78dfaec90fb6367a69`
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgData => {
       
        if(imgData.success){
            const post = {
                name: name,
                email: email,
                phone: phone,
                status: status,
                description:description,
                role: role,
                img: imgData.data.url,
                postTime: new Date().toLocaleString()
                
            }
            fetch(`http://localhost:5000/trainer`, {
                method:'POST',
                headers: {
                    'content-type' : 'application/json'

                },
                body: JSON.stringify(post)
                
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result);
                toast.success('Trainer is successfully added!')
                
               
            })
        }
        
    })
    e.target.reset()
}
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
     
      <div className="modal">
       
        <div className="modal-box">
          <form onSubmit={handleAddTrainerForm} action="" class="space-y-4">
          <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className="mt-8">
              <label class="sr-only" for="name">
                Name
              </label>
              <input
                name="name"
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
           
          

            

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  name="email"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  name="phone"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <label className="sr-only" htmlFor="phone">
                  Role
                </label>
                <input
                  name="role"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Role"
                  type="text"
                  id="role"
                />
              </div>

              <div>
                <select name="status" className="select  rounded-lg border-gray-200 p-3 w-full max-w-xs">
                  <option  disabled selected>
                    Select Status
                  </option>
                  <option>active</option>
                  <option>inactive</option>


                </select>
              </div>
            </div>
            <div className="mt-8">
             
              <textarea
                name="description"
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="description"
                type="text"
                
              />
            </div>
            <div>
                    <input name="employeeImg" type="file" placeholder="select your photo"  className="file-input file-input-bordered  w-full" />
                    </div>
            <div className="modal-action">
                <button className="px-3 py-2 rounded-lg bg-orange-600  text-white font-semibold text-xl" type="submit">Submit</button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrainerModal;