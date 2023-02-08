import { useState, useEffect } from "react";

const useIsUserExist = () => {
  const [user, setUser] = useState(null);
  const isUserExist = (id, callBack) => {
    // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
      if (id) {
        fetch(`https://perform-tracker-server.vercel.app/users?uid=${id}`)
          .then(res => res.json())
          .then(data => {
            setUser(data);
            callBack(data)
            // setIsLoading(false);
          })
          .catch(err => console.error(err));
      }
    // }, [id]);
    return [user];
  }
  return [isUserExist];
}

export default useIsUserExist;