import { useState } from 'react';
import React from 'react';
import Newsletter from './Newsletter';

export default function SpeedTest() {
  const [isSnackbarOpen, setSnackbarOpen] = useState(false); // State to control Snackbar visibility
  const [isLoading] = useState(false);

  const handleSpeedTest = () => {
    setSnackbarOpen(true); // Show Snackbar when button is clicked
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); // Close Snackbar without redirect
  };

  const handleConfirmSnackbar = () => {
    setSnackbarOpen(false); // Close Snackbar
    window.open('https://fast.com', '_blank'); // Open Fast.com in a new window
  };

  const steps = [
    "Connect to your network",
    "Click on Speed Check button",
    "Wait for results",
    "View detailed analysis"
  ];

  return (
    <div className="bg-white">
      {/* Speed Test Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Test your speed</h2>
            <p className="text-gray-600 mb-8">
              Check your download and upload speeds to ensure you're getting the most out of your broadband.
            </p>
            <button
              onClick={handleSpeedTest}
              disabled={isLoading}
              className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors"
            >
              {isLoading ? 'Testing...' : 'Speed Check'}
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <p className="text-gray-600">Click the button to test your speed on Fast.com</p>
          </div>
        </div>
      </div>

      {/* How to Measure Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">How to measure internet speed</h2>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <Newsletter />
      </div> */}

      {/* Snackbar for External Link Warning */}
      {isSnackbarOpen && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-xl border border-gray-300 w-96 z-50">
          <div className="flex justify-between items-center">
            <span className="text-gray-800 font-medium">
              You are about to visit an external site (Fast.com) to test your internet speed.
            </span>
            <div className="flex space-x-4">
              <button
                onClick={handleCloseSnackbar}
                className="text-sm text-gray-600 font-bold bg-transparent hover:bg-gray-100 px-3 py-1 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSnackbar}
                className="text-sm text-white font-bold bg-primary-500 hover:bg-primary-600 px-3 py-1 rounded"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
