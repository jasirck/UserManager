import React, { useEffect, useState } from "react";
import axios from "../axios";
import RegisterModal from "./RegisterModal";
import EditModal from "./EditModal"; 
import { useNavigate } from "react-router-dom";
import authService from '../AuthService';


function Admin() {
  const [userData, setUserData] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false); // State for register modal
  const [showEditModal, setShowEditModal] = useState(false); // State for edit modal
  const [selectedUser, setSelectedUser] = useState(null); // State to store selected user data
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/admin/");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [showRegisterModal,showEditModal]);

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };
  const handleLogout = () => {
    authService.clearToken();
    navigate('/adminlogin');
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedUser(null); // Reset selected user after closing edit modal
  };
  
  return (
    <div className="bg-gray-200 h-screen flex flex-col">
      <div className="bg-slate-700 w-full h-16 flex items-center justify-between shadow-md px-6">
        <h1 className="text-white text-2xl">Admin Dashboard</h1>
        <button
          className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="flex-grow flex justify-center items-center p-8">
        <div className=" w-full max-w-5xl rounded-lg shadow-lg p-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3">
                    P.Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData &&
                  userData.map((user) => (
                    <tr
                      key={user.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.is_active ? "Active" : "Inactive"}
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => openEditModal(user)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Conditional Rendering of Modals */}
      {showRegisterModal && (
        <RegisterModal
          showModal={showRegisterModal}
          closeModal={closeRegisterModal}
        />
      )}

      {showEditModal && (
        <EditModal
          showModal={showEditModal}
          closeModal={closeEditModal}
          userData={selectedUser}
        />
      )}

      <div className="fixed bottom-4 right-4">
        <button
          onClick={openRegisterModal}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          ADD NEW
        </button>
      </div>
    </div>
  );
}

export default Admin;
