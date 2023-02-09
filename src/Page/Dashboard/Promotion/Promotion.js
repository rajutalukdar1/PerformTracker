import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import AddPromotion from './AddPromotion/AddPromotion';
import PromotionDetails from './PromotionDetails/PromotionDetails';
import PromotionQuery from './PromotionQuery/PromotionQuery';

const Promotion = () => {
  const [promotions, setPromotions] = useState([]);
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
          hidden: ""
        }}
      />
      </div>
      <div className="grid gap-6 mx-4 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div>
          <button className="btn btn-success w-full lg:max-w-xs text-white">SEARCH</button>
        </div>
      </div>
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
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={promotion.img} alt='' />
                                </div>
                            </div></td>
                            <td>{promotion.name}</td>
                            <td>{promotion.department}</td>
                            <td>{promotion.designation}</td>
                            <td>{promotion.designation_to}</td>
                            <td>{promotion.date}</td>
                            <td>
                            <div className="dropdown dropdown-end ">
                            <label tabIndex={0}>
                              <FaEllipsisV className="px-2 py-1 mr-2 border rounded-lg text-4xl cursor-pointer text-slate-400"></FaEllipsisV>
                            </label>
                            <ul
                              tabIndex={0}
                              className="menu menu-compact dropdown-content  p-2 shadow bg-gray-900 rounded-box w-52  fixed"
                            >
                              <li>
                                <a>Delete</a>
                              </li>
                              <li>
                                <a>Edit</a>
                              </li>
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
    </div>
    );
};

export default Promotion;