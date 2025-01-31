import { useState } from 'react';
import Newsletter from '../components/Newsletter';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'Wifi'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Wavy Background */}
      <div className="relative bg-gradient-to-r from-emerald-400 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 w-full h-20">
            <svg viewBox="0 0 1440 120" className="w-full h-full">
              <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-20 pb-32 relative">
          <h1 className="text-5xl font-bold text-white text-center mb-4">Contact</h1>
          <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 -mt-20">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Hi! How can we help you?</h2>
              <p className="text-gray-600 mb-8">
                We're here to help and answer any question you might have.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-500"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-500"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Broadband">Broadband</option>
                  <option value="Mobile">Mobile</option>
                  <option value="TV">TV</option>
                  <option value="Security">Security</option>
                </select>
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
                >
                  Send Request
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560438718-eb61ede255eb?w=800&auto=format&fit=crop&q=60"
                alt="Customer Support"
                className="rounded-3xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bonus & Support Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">BONUS & SUPPORT</h2>
          <p className="text-gray-600">More convenience for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-white rounded-full"></div>
            </div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-4">Your bill in pdf</h3>
              <p className="mb-8 opacity-90">
                Download and view your bills anytime, anywhere.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
                Download
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-white rounded-full"></div>
            </div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-4">Avoid fines and delays</h3>
              <p className="mb-8 opacity-90">
                Set up automatic payments to never miss a due date.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
                Activate
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-white rounded-full"></div>
            </div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-4">Common questions</h3>
              <p className="mb-8 opacity-90">
                Find answers to frequently asked questions.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      
      {/* Newsletter Section */}
      <div className="py-20">
        <Newsletter />
      </div>
        </div>
        
  );
}