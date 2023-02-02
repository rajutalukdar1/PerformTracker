const useIsUserExist = () => {
  const isUserExist = (id) => {
    console.log(id);
    fetch(`https://perform-tracker-server.vercel.app/users/${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(err => console.error(err));
  }
  return [isUserExist];
}

export default useIsUserExist;