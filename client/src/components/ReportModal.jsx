import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const ReportModal = ({ isOpen, onRequestClose, user }) => {
  if (!user) {
    // If user is null, do not render the modal
    return null;
  }

  const modalStyle = {
    content: {
      width: '50%', // Adjust the width as needed
      margin: 'auto', // Center the modal
      borderRadius: '8px',
      padding: '20px',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Generated Report Modal"
      style={modalStyle}
    >
      <div className="text-lg font-bold mb-2">Generated Report</div>
      <div className="mb-2">User: {user.username}</div>
      <div className="mb-2">Email: {user.email}</div>
      <button onClick={onRequestClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
        Close
      </button>
    </Modal>
  );
};

export default ReportModal
