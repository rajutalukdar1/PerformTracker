import { createSelector } from "@reduxjs/toolkit"

const initialTheme = {
  theme: 'dark',
}

export const themeSlice = createSelector({
  name: "theme",
  initialUser: initialTheme,
  reducers: {
    SET_THEME: (state, {payload}) => {
      state.theme = payload
    }
  }
})

export const { SET_THEME } = userSlice.actions;

export default themeSlice.reducer;