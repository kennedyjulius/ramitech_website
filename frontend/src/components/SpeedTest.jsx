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
    <div className="bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#376B99]/10 to-transparent mix-blend-overlay" />
        <div className="grid grid-cols-12 gap-4 rotate-12 scale-150 opacity-20">
          {Array(144).fill(0).map((_, i) => (
            <div key={i} className="h-8 bg-[#376B99]/20 rounded-full animate-pulse" 
              style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      {/* Speed Test Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 animate-[slideUp_1s_ease-out]">Test your speed</h2>
            <p className="text-gray-600 mb-8 animate-[slideUp_1s_ease-out] delay-100">
              Check your download and upload speeds to ensure you're getting the most out of your broadband.
            </p>
            <button
              onClick={handleSpeedTest}
              disabled={isLoading}
              className="bg-[#376B99] text-white px-8 py-3 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-lg relative overflow-hidden group animate-[slideUp_1s_ease-out] delay-200"
            >
              {isLoading ? 'Testing...' : 'Speed Check'}
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-500 hover:scale-105 group relative overflow-hidden animate-[slideIn_1s_ease-out]">
            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#376B99]/30 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-125" />
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#376B99]/20 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-150" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#376B99]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-gray-600 relative z-10 transform transition-all duration-500 group-hover:translate-y-[-2px]">Click the button to test your speed on Fast.com</p>
            {/* Speed indicator animation */}
            <div className="mt-6 flex justify-center">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 border-4 border-[#376B99]/30 rounded-full animate-[spin_3s_linear_infinite]"></div>
                <div className="absolute inset-2 border-4 border-[#376B99]/40 rounded-full animate-[spin_2s_linear_infinite]"></div>
                <div className="absolute inset-4 border-4 border-[#376B99]/50 rounded-full animate-[spin_1s_linear_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Measure Section */}
      <div className="bg-gray-50 py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-b from-[#376B99]/10 to-transparent mix-blend-overlay" />
          <div className="grid grid-cols-8 gap-4 -rotate-12 scale-150 opacity-20">
            {Array(64).fill(0).map((_, i) => (
              <div key={i} className="h-8 bg-[#376B99]/20 rounded-full animate-pulse" 
                style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 animate-[slideUp_1s_ease-out]">How to measure internet speed</h2>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center mb-6">
                <div 
                  className="w-12 h-12 bg-[#376B99] rounded-full flex items-center justify-center text-white font-bold mr-4 transform transition-all duration-500 hover:scale-110 group-hover:rotate-[360deg]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {index + 1}
                </div>
                <p className="text-lg transform transition-all duration-500 group-hover:translate-x-2" style={{ animationDelay: `${index * 0.2}s` }}>{step}</p>
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
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-xl border border-gray-300 w-96 z-50 animate-[slideUp_0.3s_ease-out] backdrop-blur-sm bg-white/90">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#376B99]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          <div className="flex justify-between items-center">
            <span className="text-gray-800 font-medium">
              You are about to visit an external site (Fast.com) to test your internet speed.
            </span>
            <div className="flex space-x-4">
              <button
                onClick={handleCloseSnackbar}
                className="text-sm text-gray-600 font-bold bg-transparent hover:bg-gray-100 px-4 py-2 rounded transition-all duration-300 hover:shadow-md transform hover:scale-105"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSnackbar}
                className="text-sm text-white font-bold bg-[#376B99] hover:bg-[#2a517a] px-4 py-2 rounded transition-all duration-300 hover:shadow-md transform hover:scale-105"
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
