import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_START,
  REGISTRATION_USER_ERROR,
  REGISTRATION_USER,
  REGISTRATION_USER_START,
} from "../actionTypes/userActionTypes";
import { loginUser, registerUser } from "../../api/userApi";

export const loginUserAction = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_START });
    const token = await loginUser(userData);
    dispatch({ type: LOGIN_USER, payload: token });
  } catch (err) {
    dispatch({ type: LOGIN_USER_ERROR, payload: err.response?.data?.message });
  }
};

export const registerUserAction = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTRATION_USER_START });
    const token = await registerUser(userData);
    dispatch({ type: REGISTRATION_USER, payload: token });
  } catch (err) {
    dispatch({
      type: REGISTRATION_USER_ERROR,
      payload: err.response?.data?.message,
    });
  }
};
