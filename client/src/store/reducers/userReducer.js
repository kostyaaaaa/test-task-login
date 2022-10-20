import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_START,
  REGISTRATION_USER,
  REGISTRATION_USER_ERROR,
  REGISTRATION_USER_START,
} from "../actionTypes/userActionTypes";

const initialState = {
  token: "",
  isLoading: false,
  loginError: null,
  registrationError: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
        loginError: null,
      };
    case REGISTRATION_USER_START:
      return {
        ...state,
        isLoading: true,
        registrationError: null,
      };
    case LOGIN_USER:
    case REGISTRATION_USER:
      return {
        ...state,
        isLoading: false,
        token: payload,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        loginError: payload,
      };
    case REGISTRATION_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        registrationError: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
