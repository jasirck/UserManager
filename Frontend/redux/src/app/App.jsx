import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'
import Admin from '../components/Admin/Admin'
import AdminLogin from '../components/AdminLogin/AdminLogin'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;