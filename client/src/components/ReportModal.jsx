import React, { useRef } from 'react';
import Modal from 'react-modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Chart from 'chart.js/auto';

Modal.setAppElement('#root'); // Set the root element

const ReportModal = ({ isOpen, onRequestClose, user }) => {
  const chartContainer = useRef(null);
  let myChart; // Declare myChart outside of the component to store the chart instance

  const initializeChart = () => {
    if (chartContainer.current && user) {
      const chartData = {
        labels: ['Accepted', 'Rejected', 'Pending'],
        datasets: [
          {
            label: 'Tie-up Requests',
            data: [10, 20, 30],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };

      const chartConfig = {
        type: 'pie',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Tie-up Requests',
          },
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      };

      myChart = new Chart(chartContainer.current, chartConfig);
    }
  };

  const destroyChart = () => {
    
    if (myChart) {
      myChart.destroy();
    }
  };


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
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '50%',
      margin: 'auto', // Center the modal
      borderRadius: '12px',
      padding: '30px',
      backgroundColor: '#fff',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Generated Report Modal"
      style={modalStyles}
      onAfterOpen={initializeChart} 
    >
      <div className="text-4xl font-bold mb-6 text-blue-500">Generated Report</div>

      <div className="text-4xl">
        <AccountCircleIcon fontSize="large" />
      </div>

      <div className="mb-4">
        <span className="font-bold text-gray-700">User Activity:</span>
        <div className="ml-2">
          <canvas ref={chartContainer} width={400} height={400}></canvas>
        </div>
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
