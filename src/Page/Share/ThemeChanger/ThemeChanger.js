import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_THEME } from '../../../features/themes/ThemeSlice';
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeChanger = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.themeReducer)

  const handleTheme = () => {
    if(theme === "dark"){
      dispatch(SET_THEME("light"));
    }else{
      dispatch(SET_THEME("dark"));
    }
  }

  return (
    <label className="swap swap-rotate mt-1">
      <input type="checkbox" onChange={handleTheme} />
      <BsSun className="swap-on fill-current w-6 h-6" />
      <BsMoon className="swap-off fill-current w-6 h-6" />
    </label>
  )
}

export default ThemeChanger;