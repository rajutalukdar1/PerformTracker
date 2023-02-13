import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEllipsisV } from 'react-icons/fa';
import ConfirmationModal from '../../Share/ConfirmationModal/ConfirmationModal';
import AddPromotion from './AddPromotion/AddPromotion';
import EditPromotion from './EditPromotion/EditPromotion';




import PromotionQuery from './PromotionQuery/PromotionQuery';

const Promotion = () => {
  const [promotions, setPromotions] = useState([]);
  const [promotion, setPromotion] = useState({});
  // const [disabled, setDisabled] = useState(true);
  // const [checkbox, setCheckbox] = useState(task.completed);
  const [deletingPromotion, setDeletingPromotion] = useState(null);
  const [editingPromotion, setEditingPromotion] = useState(null);

 

  const { data: user = [], refetch } = useQuery({
    queryKey: ["promotion"],
    queryFn: () =>
      fetch(`http://localhost:5000/promotion`).then((res) => res.json()),
  });

  const closeModal = () => {
    setDeletingPromotion(null);
  };
  const handleDeletePromotion = (promotion) => {
    fetch(`http://localhost:5000/promotion/${promotion._id}`, {
      method: "DELETE",
      // headers: {
      //     authorization: `bearer ${localStorage.getItem('accessToken')}`
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${promotion.name} deleted successfully`);
        }
      });
  };
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
                        user?.map((promotion, i )=>  <tr key={promotion._id} 
                        
                        >
                            <th>{i+1}</th>
                            <td><div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={promotion.img} alt='' />
                                </div>
                            </div></td>
                            <td>{promotion.name}</td>
                            <td>{promotion.department}</td>
                            <td>{promotion.designation}</td>
                            <td>{promotion.designation_to}</td>
                            <td>{moment(promotion.date).format('Do MMMM, YYYY')}</td>
                            <td>
                            <div className="dropdown dropdown-end ">
                            <label tabIndex={0}>
                              <FaEllipsisV className="  mr-2  rounded-lg text-xl cursor-pointer text-slate-400"></FaEllipsisV>
                            </label>
                            <ul
                              tabIndex={0}
                              className="menu menu-compact dropdown-content  p-2 shadow bg-gray-900 rounded-box w-52  fixed"
                            >
                               <label
                              onClick={() => setDeletingPromotion(promotion)}
                              htmlFor="confirmation-modal"
                              className="cursor-pointer ml-2 my-2"
                            >Delete</label>
                               <label
                              onClick={() => setEditingPromotion(promotion)}
                              htmlFor="editPromotionModal"
                              className="cursor-pointer ml-2"
                            >Edit</label>
                            </ul>
                          </div>
                                </td>
                        </tr>)
                    }
                </tbody>
             </table>
            </div>
            {/* {
                deletingDoctor && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`if you delete ${deletingDoctor.name}. It cannot be undone`}
                successAction={handleDeleteDoctor}
                modalData = {deletingDoctor}
                successButtonName="Delete"
                closeModal={closeModal}
                ></ConfirmationModal>
            } */}
        </div>
      {promotions && <AddPromotion
        refetch={refetch}
        setPromotion={setPromotions}
      ></AddPromotion>}

        {deletingPromotion && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`if you delete ${deletingPromotion.name}. It cannot be undone`}
          successAction={handleDeletePromotion}
          modalData={deletingPromotion}
          successButtonName="Delete"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}

      {editingPromotion && <EditPromotion
        refetch={refetch}
        setPromotion={setPromotions}
        promotion={editingPromotion}
      ></EditPromotion>}
    </div>
    );
};

export default Promotion;