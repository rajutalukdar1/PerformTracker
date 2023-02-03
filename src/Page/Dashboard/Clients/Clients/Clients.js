import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaBars, FaPlus, FaTh } from "react-icons/fa";
import QueryBar from "../../../Share/QueryBar/QueryBar";
import AddClient from "../../AddClient/AddClient";

import Client from "./Client";

const Clients = () => {
  // const user = useLoaderData();
  const [clients, setClients] = useState([]);
  const { data: user = [], refetch } = useQuery({
    queryKey: ["clients"],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/clients`).then((res) => res.json()),
  });
  
  return (
    <div className="bg-slate-100 px-8">
      <QueryBar
        barData={{
          pageName: "Clients",
          btnOnClick: () => setClients([]),
          labelValue: "addClientModal",
          hidden: ""
        }}
      />
      <div className="grid gap-6 mx-4  my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <select className="select select-bordered w-full max-w-xs">
            <option value="" hidden>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div>
          <button className="btn btn-success w-full max-w-xs">SEARCH</button>
        </div>
      </div>
      <div className="grid gap-6 mx-4  my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {user?.map((client) => (
          <Client key={client._id} client={client}></Client>
        ))}
      </div>
      {clients && <AddClient
        refetch={refetch}
        setClients={setClients}
      ></AddClient>}
    </div>
  );
};

export default Clients;
