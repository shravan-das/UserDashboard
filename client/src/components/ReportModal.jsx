import React from 'react';
import Modal from 'react-modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

Modal.setAppElement('#root'); // Set the root element

const ReportModal = ({ isOpen, onRequestClose, user }) => {
  if (!user) {
    return null;
  }

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(2px)',
      zIndex: 100,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '50%', 
      margin: 'auto', // Center the modal
      borderRadius: '12px',
      padding: '30px',
      backgroundColor: '#fff',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Generated Report Modal"
      style={modalStyles}
    >
      <div className="text-4xl font-bold mb-6 text-blue-500">Generated Report</div>
      
      <div className="text-4xl">
        <AccountCircleIcon fontSize="large" />
      </div>
      
      <div className="mb-4">
        <span className="font-bold text-gray-700">User:</span>
        <span className="ml-2">{user.username}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700">Email:</span>
        <span className="ml-2">{user.email}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700">Phone:</span>
        <span className="ml-2">{user.phone}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700">ID:</span>
        <span className="ml-2">{user.id}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700">Creation Date:</span>
        <span className="ml-2">{user.created_at}</span>
      </div>
      
      <button
        onClick={onRequestClose}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none mt-4"
      >
        Close
      </button>
    </Modal>
  );
};

export default ReportModal;
