import moment from "moment";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaEllipsisV } from "react-icons/fa";
import ConfirmationModal from "../../../Share/ConfirmationModal/ConfirmationModal";
import EditPromotion from "../EditPromotion/EditPromotion";

const PromotionDetails = ({ promotion, i, refetch }) => {
  const [deletingPromotion, setDeletingPromotion] = useState(null);
  const [editingPromotion, setEditingPromotion] = useState(null);

  const { name, department, designation, designation_to, date } =
    promotion;

  const closeModal = () => {
    setDeletingPromotion(null);
  };

  const handleDeletePromotion = (promotion) => {
    fetch(`https://perform-tracker-server.vercel.app/promotion/${promotion._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Promotion ${promotion.name} deleted successfully`);
        }
      });
  };
  return (
    <tr key={promotion._id}>
      <th>{i + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={promotion.img} alt="" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{designation}</td>
      <td>{designation_to}</td>
      <td>{moment(date).format("Do MMMM, YYYY")}</td>
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
            >
              Delete
            </label>
            <label
              onClick={() => setEditingPromotion(promotion)}
              htmlFor="editPromotionModal"
              className="cursor-pointer ml-2"
            >
              Edit
            </label>
          </ul>
        </div>
      </td>
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

      {editingPromotion && (
        <EditPromotion
          refetch={refetch}
          promotion={editingPromotion}
          setEditingPromotion={setEditingPromotion}
        ></EditPromotion>
      )}
    </tr>
  );
};

export default PromotionDetails;
