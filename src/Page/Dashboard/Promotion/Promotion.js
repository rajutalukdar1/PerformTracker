import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEllipsisV } from 'react-icons/fa';
import ConfirmationModal from '../../Share/ConfirmationModal/ConfirmationModal';
import AddPromotion from './AddPromotion/AddPromotion';
import EditPromotion from './EditPromotion/EditPromotion';
import PromotionDetails from './PromotionDetails/PromotionDetails';




import PromotionQuery from './PromotionQuery/PromotionQuery';

const Promotion = () => {
  const [promotions, setPromotions] = useState([]);
  const [promotion, setPromotion] = useState({});
  // const [disabled, setDisabled] = useState(true);
  // const [checkbox, setCheckbox] = useState(task.completed);
  
  

 

  const { data: user = [], refetch } = useQuery({
    queryKey: ["promotion"],
    queryFn: () =>
      fetch(`http://localhost:5000/promotion`).then((res) => res.json()),
  });

  
  
    return (
        <div>
      <div className="mx-4">
      <PromotionQuery
        promotionData={{
          pageName: "Promotion",
          btnOnClick: () => setPromotions([]),
          labelValue: "addPromotionModal",
          btnValue: "Add Promotion",
          hidden: "hidden"
        }}
      />
      </div>
      {/* <div className="grid gap-6 mx-4 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full lg:max-w-xs"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full lg:max-w-xs"
          />
        </div>
        <div>
          <select className="select select-bordered w-full lg:max-w-xs">
            <option value="" hidden>
              Promotion To
            </option>
            <option>Web Developer</option>
            <option>Web Designer</option>
            <option>SEO Analyst</option>
          </select>
        </div>
        <div>
          <button className="btn btn-success w-full lg:max-w-xs text-white">SEARCH</button>
        </div>
      </div> */}
      <div>
            <div className="overflow-x-auto w-full">
             <table className="table w-full">
                
                <thead>
                <tr>
                <th></th>
                <th>Avatar</th>
                <th>Promoted Employee</th>
                <th>Department</th>
                <th>Promotion designation From</th>
                <th>Promotion designation To</th>
                <th>Promotion date</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        user?.map((promotion, i )=>  
                        <PromotionDetails
                        i={i}
                        promotion={promotion}
                        refetch={refetch}
                        ></PromotionDetails>
                        )
                    }
                </tbody>
             </table>
            </div>
           
        </div>
      {promotions && <AddPromotion
        refetch={refetch}
        setPromotion={setPromotions}
      ></AddPromotion>}

       

      
    </div>
    );
};

export default Promotion;