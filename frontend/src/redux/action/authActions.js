import axios from '../../axios';
import authService from '../../AuthService';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const login = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('login/', formData);
    const { access, user } = response.data;
    console.log(access, user);
    // Save token and user data to localStorage
    authService.setToken(access);
    localStorage.setItem('user', JSON.stringify(user));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: access,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  authService.removeToken();
  localStorage.removeItem('user'); // Remove user data from localStorage
  dispatch({ type: LOGOUT });
};
