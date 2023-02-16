import { createSlice } from "@reduxjs/toolkit"
import { localTheme, setLocalTheme } from "./localTheme";

const initialTheme = {
  theme: localTheme,
}

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    SET_THEME: (state, {payload}) => {
      state.theme = payload;
      setLocalTheme(payload);
    }
  }
})

export const { SET_THEME } = themeSlice.actions;

export default themeSlice.reducer;