import { useState } from 'react';

export default function CheckConnectionModal({ onClose }) {
  const [formData, setFormData] = useState({
    city: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Here you would integrate with your email service
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage('Thank you! Our team will check availability in your area and contact you soon.');
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      setMessage('Sorry, there was an error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!onClose) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-primary-500 to-primary-400 p-8 rounded-2xl max-w-md w-full mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Check if there is an internet connection in your region
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="city"
              placeholder="Your City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 rounded-full focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 rounded-full focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>
          {message && (
            <p className="text-white text-center mt-4">{message}</p>
          )}
        </form>

        <p className="text-white text-sm text-center mt-4 opacity-80">
          You will receive our confirmation in your email about our coverage in your region
        </p>
      </div>
    </div>
  );
}
