// axios.js

import axios from 'axios';
import authService from './AuthService';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/', 
});

// Add a request interceptor to include the JWT token
instance.interceptors.request.use(
  config => {
    const token = authService.getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default instance;
