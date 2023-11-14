import React, { useState, useEffect } from 'react';
import userData from './userData.json';
import ReportModal from './ReportModal';
import { AiOutlineSearch, AiOutlineFileText } from 'react-icons/ai';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.toString().includes(searchTerm.toLowerCase()) ||
    user.created_at.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-8">
      <div className="overflow-x-auto w-full max-w-screen-lg">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 pl-10 pr-10 rounded-full"
            />
            <span className="absolute left-3 top-2">
              <AiOutlineSearch size={20} />
            </span>
          </div>
        </div>
        <table className="table-auto bg-white border rounded-lg shadow-md">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="px-10 py-4 border">ID</th>
              <th className="px-10 py-4 border">Username</th>
              <th className="px-10 py-4 border">Email</th>
              <th className="px-10 py-4 border">Phone</th>
              <th className="px-10 py-4 border">Creation Date</th>
              <th className="px-10 py-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-200">
                <td className="px-10 py-4 border">{user.id}</td>
                <td className="px-10 py-4 border">{user.username}</td>
                <td className="px-10 py-4 border">{user.email}</td>
                <td className="px-10 py-4 border">{user.phone}</td>
                <td className="px-10 py-4 border">{user.created_at}</td>
                <td className="px-10 py-4 border">
                  <button onClick={() => openModal(user)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <AiOutlineFileText size={20} className="mr-2" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReportModal isOpen={isModalOpen} onRequestClose={closeModal} user={selectedUser} />
      </div>
    </div>
  );
};

export default UserDetails;
