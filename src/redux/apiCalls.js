import { publicRequest } from "../requestMethods";
import {
  loginfailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/users/login", user);
    if (res.data) {
      dispatch(loginSuccess(res.data));
    } else {
      dispatch(loginfailure());
    }
  } catch (error) {
    dispatch(loginfailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutSuccess());
};
