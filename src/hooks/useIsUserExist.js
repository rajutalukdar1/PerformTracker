const useIsUserExist = () => {
  const isUserExist = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(err => console.error(err));
  }
  return [isUserExist];
}

export default useIsUserExist;