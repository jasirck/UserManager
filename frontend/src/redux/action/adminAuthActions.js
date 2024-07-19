// actions/adminAuthActions.js

import axios from '../../axios';

export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS';
export const ADMIN_LOGIN_FAIL = 'ADMIN_LOGIN_FAIL';
export const ADMIN_LOGOUT = 'ADMIN_LOGOUT';

export const adminLogin = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/adminlogin/', { email, password });
    const { access } = response.data;

    // Store token in localStorage
    localStorage.setItem('admin_access_token', access);

    // Dispatch admin login success action
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: access,
    });
  } catch (error) {
    console.error('Admin login error:', error);
    dispatch({
      type: ADMIN_LOGIN_FAIL,
    });
  }
};

export const adminLogout = () => {
  // Clear token from localStorage
  localStorage.removeItem('admin_access_token');

  return {
    type: ADMIN_LOGOUT,
  };
};
