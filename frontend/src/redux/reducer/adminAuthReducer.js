// reducers/adminAuthReducer.js

import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL, ADMIN_LOGOUT } from '../actions/adminAuthActions';

const initialState = {
  isAuthenticated: false,
  token: null,
};

const adminAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case ADMIN_LOGIN_FAIL:
    case ADMIN_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export default adminAuthReducer;
