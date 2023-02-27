import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LeadsMemberImg = ({ uid, txt }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (!uid) {
            return;
        }
        fetch(`https://perform-tracker-server.vercel.app/employees/${uid}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.error(err))
    }, [uid]);

    return (
        <Link className="avatar" to={`/dashboard/employees/${uid}`} title={user.name}>
            <div className={`w-10 h-10 rounded-full ${txt ? "justify-center items-center bg-[#ef5200]" : "bg-gray-200"}`} style={{ "display": "flex" }}>
                {
                    !txt ? <img src={user.img} alt=" " /> : <small className='font-bold text-white'>+{txt}</small>
                }
            </div>
        </Link>
    )
}

export default LeadsMemberImg;