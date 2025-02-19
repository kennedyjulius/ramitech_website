// src/components/Snackbar.jsx
import React from 'react';

export default function Snackbar({ message, open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white py-3 px-6 rounded-lg shadow-md flex justify-between items-center w-72 z-50">
      <span>{message}</span>
      <div className="flex space-x-4">
        <button
          onClick={onClose}
          className="text-sm text-white font-bold bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="text-sm text-white font-bold bg-[#376B99] px-3 py-1 rounded hover:bg-[#376B99]/90 transition-colors"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
