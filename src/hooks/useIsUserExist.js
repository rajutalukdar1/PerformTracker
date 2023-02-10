import { useState } from "react";

const useIsUserExist = () => {
  const [user, setUser] = useState(null);
  const isUserExist = (id) => {
<<<<<<< HEAD
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
=======
    if(id){
        fetch(`https://perform-tracker-server.vercel.app/users?uid=${id}`)
        .then(res => res.json())
        .then(data => {
          setUser(data);
        })
        .catch(err => console.error(err));
    }
    return user;
>>>>>>> d08a191e965adda61ffb816d45af2a8f95478e6e
  }
  return [isUserExist];
}

export default useIsUserExist;