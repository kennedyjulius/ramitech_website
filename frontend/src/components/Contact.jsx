import { useState } from 'react';
import Newsletter from './Newsletter';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Broadband'
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

  const supportFeatures = [
    {
      title: "Your bill in pdf",
      description: "Download and view your monthly bills easily",
      action: "Download",
    },
    {
      title: "Avoid fines and delays",
      description: "Stay up to date with your payments",
      action: "Activate",
    },
    {
      title: "Common questions",
      description: "Find answers to frequently asked questions",
      action: "Read More",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-400">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Contact</h1>
          <p className="text-white text-center">Home → Template → Contact</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Hi! How can we help you?</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
            >
              <option value="Broadband">Broadband</option>
              <option value="TV">TV</option>
              <option value="Mobile">Mobile</option>
              <option value="Security">Security</option>
            </select>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="col-span-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 h-32"
            />
            <button
              type="submit"
              className="col-span-2 bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>

      {/* Support Features */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">More convenience for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="bg-primary-500 p-8 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="mb-6">{feature.description}</p>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
                  {feature.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <Newsletter />
      </div>
    </div>
  );
}
