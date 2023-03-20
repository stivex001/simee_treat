import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    message: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false
    },
    loginfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      state.message = true;
      state.currentUser = null;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginfailure, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
