import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEllipsisV, FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../../../Share/ConfirmationModal/ConfirmationModal';
import EditClientModal from '../EditClientModal/EditClientModal';
// import img1 from '../../../Assets/success_img/Vicky.jpg'

const Client = ({ client, refetch }) => {
  const { _id, img, company, name, position } = client;
  const [deletingClient, setDeletingClient] = useState(null);
  const [editingClient, setEditingClient] = useState(null);

  const closeModal = () => {
    setDeletingClient(null);
  };

  const handleDeleteClient = (client) => {
    fetch(`https://perform-tracker-server.vercel.app/clients/${client._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${client.name} deleted successfully.`);
        }
      });
  };
  return (
    <div className=''>
      <div className="card w-full rounded text-neutral-content shadow-2xl">
        <div className="card-body bg-gray-900 rounded-xl text-center">
          <div className="dropdown dropdown-start ">
            <label tabIndex={0}>
              <FaEllipsisV className="mr-2 rounded-lg text-xl cursor-pointer text-slate-400"></FaEllipsisV>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 bg-slate-800 text-white rounded-box w-40"
            >
              <label
                onClick={() => setDeletingClient(client)}
                htmlFor="confirmation-modal"
                className="cursor-pointer ml-2 my-2 hover:bg-slate-900 py-1 rounded-md"
              >
                Delete
              </label>
              <label
                onClick={() => setEditingClient(client)}
                htmlFor="editPromotionModal"
                className="cursor-pointer ml-2 hover:bg-slate-900 py-1 rounded-md"
              >
                Edit
              </label>
            </ul>
          </div>
          <div className=''>
            <div className="avatar">
              <div className="w-20 rounded-full">
                <Link to={`/dashboard/client/${_id}`}>
                  <img src={img} alt="img" />
                </Link>
              </div>
            </div>
            <h2 className=" whitespace-nowrap text-center text-xl font-bold">{company}</h2>
            <p className='text-[#BBC4CC]' >{name}</p>
            <p><span className='text-[#BBC4CC]'>{position}</span></p>
            <div className='flex justify-evenly w-full'>
              <div>
                <button className='text-[#BBC4CC]'>Message</button>
              </div>
              <div>
                <Link to={`/dashboard/client/${_id}`}>
                  <button className='text-[#BBC4CC]'>View Profile</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {deletingClient && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingClient.name}. It can not be undone.`}
          successAction={handleDeleteClient}
          modalData={deletingClient}
          successButtonName="Delete"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}

      {editingClient && (
        <EditClientModal
          refetch={refetch}
          client={editingClient}
          setEditingClient={setEditingClient}
        ></EditClientModal>
      )}
    </div>
  );
};

export default Client;