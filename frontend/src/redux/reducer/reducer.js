import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../action/authActions';

const initialState = {
  token: localStorage.getItem('access_token'),
  isAuthenticated: false,
  loading: true,
  token: null,
    user: null,
};

  

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('access_token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
