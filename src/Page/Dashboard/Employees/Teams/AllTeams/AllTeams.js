import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import QueryBar from '../../../../Share/QueryBar/QueryBar'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBinLine } from 'react-icons/ri';
import AddTeamModal from '../AddTeamModal/AddTeamModal';
import MemberImg from './MemberImg';
import "./AllTeams.css";
import useTitle from '../../../../../hooks/useTitle';

const AllTeams = () => {
  useTitle("Teams");

  const [shown, setShown] = useState(true);

  const { data: teams = [], refetch } = useQuery({
    queryKey: ['teams'],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/teams`).then(res => res.json()),
  });

  const handleTeamDelete = id => {

  }

  return (
    <div className='h-full'>
      <QueryBar
        barData={{
          pageName: "All Teams",
          labelValue: "addTeamModal",
          btnValue: "Add Team",
          btnOnClick: () => !shown && setShown(true),
          hidden: "hidden"
        }}
      />
      <div className="overflow-x-auto pb-5 h-full">
        <table className="teams-table table table-zebra w-full">
          <thead>
            <tr className='bg-gray-900'>
              <th className='bg-gray-900'>Team Name</th>
              <th className='bg-gray-900'>Team ID</th>
              <th className='bg-gray-900'>Leader</th>
              <th className='bg-gray-900'>Members</th>
              <th className='bg-gray-900'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              teams.map(team => <tr
                key={team._id}
              >

                <td>{team.name}</td>
                <td>{team.teamId}</td>
                <td>
                  {
                    team.leaders.map(leader => <MemberImg
                      key={leader.uid}
                      uid={leader.uid}
                    />)
                  }
                </td>
                <td className='flex'>
                  {
                    team.members.length > 4 ? <>
                      {
                        team.members.slice(0, 3).map(member => <MemberImg
                          key={member.uid}
                          uid={member.uid}
                        />)
                      }
                      <MemberImg
                        uid={null}
                        txt={team.members.slice(3, team.members.length - 1).length}
                      />
                    </> :
                      team.members.map(member => <MemberImg
                        key={member.uid}
                        uid={member.uid}
                      />)
                  }
                </td>
                <td>
                  <div className="dropdown relative">
                    <div tabIndex={0}>
                      <h2 className="text-center mt-3 ml-4 font-semibold text-gray-500 text-xl cursor-pointer"><BsThreeDotsVertical /> </h2>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 bg-gray-800 rounded-box w-40 absolute right-0"
                    >
                      <li className='bg-transparent'>
                        <label onClick={() => { }} htmlFor="editTeamModal"><a href=' ' className="flex items-center text-bold"> <FaPencilAlt className=" mr-3" />Edit</a> </label>
                      </li>
                      <li>
                        <span className="text-bold" onClick={() => handleTeamDelete(team._id)} > <RiDeleteBinLine />Delete</span>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        shown && <AddTeamModal
          refetch={refetch}
          setShown={setShown}
        />
      }
    </div>
  )
}

export default AllTeams