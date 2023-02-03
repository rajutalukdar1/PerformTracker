import { useEffect, useState } from "react";

const useIsUserExist = () => {
  let user;
  const isUserExist = (id) => {
    console.log(id);
<<<<<<< HEAD
    fetch(`https://perform-tracker-server.vercel.app/users/${id}`)
=======
    // useEffect(() => {
      fetch(`http://localhost:5000/users?uid=${id}`)
>>>>>>> 40da9e88cd45fbef5335e684df746652caba8b53
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // setUser(data)
        return data;
        user = data;
      })
      .catch(err => console.error(err))
    // }, [id]);
  }
  return [isUserExist];
}

export default useIsUserExist;