import { useEffect, useState } from "react";

const useIsUserExist = () => {
  let user;
  const isUserExist = (id) => {
    console.log(id);
    // useEffect(() => {
    fetch(`https://perform-tracker-server.vercel.app/users?uid=${id}`)
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