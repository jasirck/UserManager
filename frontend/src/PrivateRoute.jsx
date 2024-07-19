// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from './AuthService';

const PrivateRoute = ({ children }) => {
  const token = authService.getToken();

  // Assuming a function to check if the user is authenticated
  const isAuthenticated = () => {
    const token = authService.getToken();
    // Check if the token is valid or exists
    return token !== null && token !== undefined && token !== '';
  };

  return isAuthenticated() ? (
    children
  ) : (
    <Navigate to="/login" replace /> // Redirect to login page
  );
};

export default PrivateRoute;
