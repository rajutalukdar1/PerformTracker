import { createSlice } from "@reduxjs/toolkit"

const initialTheme = {
  theme: 'dark',
}

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    SET_THEME: (state, {payload}) => {
      state.theme = payload
    }
  }
})

export const { SET_THEME } = themeSlice.actions;

export default themeSlice.reducer;