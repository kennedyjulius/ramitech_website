import { useState } from 'react';

export default function CheckConnectionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    city: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Check if there is an internet connection in your region
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="city"
            placeholder="Your City"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
          />
          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Send Request
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          You will receive our confirmation by email about our connection service in your region
        </p>
      </div>
    </div>
  );
}
