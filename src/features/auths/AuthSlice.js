import { createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";

const auth = getAuth(app)

const initialUser = {
  loading: true,
  user: null
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    SET_LOADING: (state, {payload}) => {
      state.loading = payload
    },
    SET_USER: (state, {payload}) => {
      state.user = payload.user
    },
  }
});

export const { SET_LOADING, SET_USER } = userSlice.actions;

export const setAuthListener = () => (dispatch, state) => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    dispatch(SET_USER({user: currentUser}))
    dispatch(SET_LOADING(false))
    console.log('Logged in');
  })
  return () => unsubscribe();
}

export const createUser = (email, password) => (dispatch, state) => {
  dispatch(SET_LOADING(true))
  return createUserWithEmailAndPassword(auth, email, password);
}

export const userLogin = (email, password) => (dispatch, state) => {
  dispatch(SET_LOADING(true))
  return signInWithEmailAndPassword(auth, email, password)
}

export const providerLogin = (provider) => (dispatch, state) => {
  dispatch(SET_LOADING(true))
  return signInWithPopup(auth, provider);
}

export const updateUser = (userInfo) => (dispatch, state) => {
  return updateProfile(auth.currentUser, userInfo);
}

export const logOut = () => async (dispatch, state) => {
  dispatch(SET_LOADING(true))
  return signOut(auth)
}

export default userSlice.reducer;