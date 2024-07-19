// actions/authActions.js
import axios from '../axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const login = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('login/', formData);
    const { access } = response.data;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: access,
    });

    // Save token to localStorage
    localStorage.setItem('access_token', access);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
