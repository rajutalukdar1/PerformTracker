
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
const imgbbKey = process.env.REACT_APP_imgbb_key;

const AddTrainingModal = () => {
  
  const { data: allTrainerType = [], refetch } = useQuery({
    queryKey: ['allTrainerType'],
    queryFn: () =>
      fetch(`http://localhost:5000/trainingtype`).then(res => res.json()),
      
  });
  const { data: allTrainer = [], } = useQuery({
    queryKey: ['allTrainer'],
    queryFn: () =>
      fetch(`http://localhost:5000/trainer`).then(res => res.json()),
      
  });
  const { data: allEmployees = [], } = useQuery({
    queryKey: ['allEmployees'],
    queryFn: () =>
      fetch(`http://localhost:5000/employees`).then(res => res.json()),
      
  });

  
  const handleAddTrainingForm = (e) =>{
    e.preventDefault()
    const triningtype = e.target.triningtype.value;
    const trainer = e.target.trainer.value;
    const employee = e.target.employee.value;
    const cost = e.target.cost.value;
    const startdate = e.target.cost.value;
    const enddate = e.target.enddate.value;
    const status = e.target.status.value
    const description = e.target.description.value;
    const post = {
      triningtype: triningtype,
      trainer: trainer,
      employee: employee,
      cost: cost,
      startdate: startdate,
      enddate: enddate,
      description: description,
      status: status,
    };
   
    fetch(`http://localhost:5000/training`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("trainig list  is successfully added!");
      });
     
    e.target.reset();
}
  return (
    <div>
      <input type="checkbox" id="trainig-modal" className="modal-toggle" />
     
      <div className="modal">
       
        <div className="modal-box">
          <form onSubmit={handleAddTrainingForm} action="" class="space-y-4">
          <label htmlFor="trainig-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label>
                  Trainig Type
                </label>
                <select name="triningtype" className="select  rounded-lg border-gray-200 p-3 w-full max-w-xs">
                  <option  selected>
                    Select Training Type
                  </option>
                  {
                    allTrainerType.map(trainigType =>
                      <option value={trainigType.techtype}>{trainigType.techtype}</option> )
                  }
                  
                


                </select>
              </div>

              <div>
                <label>Trainer</label>
                <select name="trainer" className="select  rounded-lg border-gray-200 p-3 w-full max-w-xs">
                  <option  disabled selected>
                    Select Trainer
                  </option>

                  
                  {
                    allTrainer.map(trainer => <option value={trainer.name}>{trainer.name}</option>)
                  }
                  


                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <select name="employee" className="select  rounded-lg border-gray-200 p-3 w-full max-w-xs">
                  <option  disabled selected>
                    Select Employee
                  </option>
                  {
                    allEmployees.map(employee => <option value={employee.name}>{employee.name } </option>)
                  }
                  
                 


                </select>
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Cost
                </label>
                <input
                  name="cost"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Trainig Cost"
                  type="number"
                 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <label className="" htmlFor="phone">
                  Start Date
                </label>
                <input
                  name="startdate"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  
                  type="date"
                 
                />
              </div>

              <div>
                <label className="" htmlFor="phone">
                  End Date
                </label>
                <input
                  name="enddate"
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  
                  type="date"
                 
                />
              </div>
            </div>
           
            <div className="mt-8">
            <label className="" htmlFor="phone">
                  Description
                </label>
              <textarea
                name="description"
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="description"
                type="text"
                
              />
            </div>
            <div>
                <select name="status" className="select  rounded-lg border-gray-200 p-3 w-full ">
                  <option  disabled selected>
                    Select Status
                  </option>
                  <option>active</option>
                  <option>inactive</option>


                </select>
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

export default AddTrainingModal;