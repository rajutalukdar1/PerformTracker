import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auths/AuthSlice";
import themeReducer from "../features/themes/ThemeSlice";

const store = configureStore({
  reducer: {
    userReducer,
    themeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});

export default store;