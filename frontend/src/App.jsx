// App.jsx
import Admin from './Admin/Admin';
import AdminLogin from './AdminLogin/AdminLogin';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import PrivateRoute from './PrivateRoute';
import AdminPrivateRoute from './AdminPrivateRoute';
import { Provider } from 'react-redux';
import store from './redux/stor';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/register" element={<Register/>} />
           <Route path="/adminlogin" element={<AdminLogin/>} />
           <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>} />
           {/* <Route path="/admin" element={<AdminPrivateRoute><Admin/></AdminPrivateRoute>} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;



