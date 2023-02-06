import { useState } from "react";

const useIsUserExist = () => {
  const [user, setUser] = useState(null);
  const isUserExist = (id) => {
    if(id){
        fetch(`https://perform-tracker-server.vercel.app/users?uid=${id}`)
        .then(res => res.json())
        .then(data => {
          setUser(data);
        })
        .catch(err => console.error(err));
    }
    return user;
  }
  return [isUserExist];
}

export default useIsUserExist;