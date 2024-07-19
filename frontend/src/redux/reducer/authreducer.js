import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null, // Add user field to store user data
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        user: JSON.parse(localStorage.getItem('user')), // Retrieve user data from localStorage
      };
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null, // Clear user data on logout
      };
    default:
      return state;
  }
};

export default authReducer;
