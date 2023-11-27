// Logout.js
import React from 'react';
import { useUser } from './UserContext';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
function Logout() {
  const { logoutUser } = useUser();
  const navigate=useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate('/')
    toast.error(`Logged Out`, { position: "top-center" });
  };

  return (
    <a onClick={handleLogout}>Logout</a>
  );
}

export default Logout;