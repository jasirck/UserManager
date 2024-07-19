// AdminPrivateRoute.jsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import authService from './AuthService';

const AdminPrivateRoute = ({ element, ...rest }) => {
  const token = authService.getToken();
  const isAdmin = token ? authService.isAdmin(token) : false;

  return token && isAdmin ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/adminlogin" replace /> // Redirect to admin login if not authenticated as admin
  );
};

export default AdminPrivateRoute;
    