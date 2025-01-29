import { useState } from 'react';
import Newsletter from './Newsletter';

export default function ReturnEquipments() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    equipmentId: '',
    reason: ''
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
  };

  const steps = [
    {
      number: "01",
      title: "Equipment",
      description: "Prepare your equipment for return"
    },
    {
      number: "02",
      title: "Cancellation",
      description: "Submit your cancellation request"
    },
    {
      number: "03",
      title: "Support",
      description: "Get help from our team"
    }
  ];

  const faqs = [
    {
      question: "How to get 5G technology?",
      answer: "Contact our support team to check 5G availability in your area and upgrade your plan."
    },
    {
      question: "How do I cancel if I have access to the region?",
      answer: "Log into your account and visit the subscription management section or contact support."
    },
    {
      question: "What to get the end out of this connection?",
      answer: "Ensure your devices are compatible and optimize router placement for best performance."
    },
    {
      question: "How to get the best speed?",
      answer: "Use ethernet when possible, keep router updated, and consider our premium plans."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-400">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Return of Equipment</h1>
          <p className="text-white text-center">Home → Template → Return of Equipment</p>
        </div>
      </div>

      {/* Return Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Do you need to return the equipment?</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
              />
            </div>
            <input
              type="text"
              name="equipmentId"
              placeholder="Equipment ID"
              value={formData.equipmentId}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
            />
            <textarea
              name="reason"
              placeholder="Reason for return"
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 h-32"
            />
            <button
              type="submit"
              className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Follow these procedures to cancel your subscription</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <Newsletter />
      </div>
    </div>
  );
}