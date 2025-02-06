import { useState } from 'react';
import Newsletter from './Newsletter';
import Hero from './Hero';

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqQuestions = [
    {
      id: 1,
      question: 'How to do my technology?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: 2,
      question: 'How do I speed if I have access to the signal?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: 3,
      question: 'How to get the copy of the invoice?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: 4,
      question: 'Are there plans for companies?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: 5,
      question: 'How to increase my WiFi speed?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ];

  const features = [
    {
      title: 'Optical Technology',
      description: 'Advanced fiber optic technology for faster speeds',
      icon: '📡'
    },
    {
      title: 'Turbine Transmission',
      description: 'Efficient data transmission with minimal latency',
      icon: '⚡'
    },
    {
      title: 'Faster Downloads',
      description: 'Lightning-fast download speeds for all your needs',
      icon: '🚀'
    }
  ];

  return (
    <div className="bg-white">
      {/* {Hero Section} */}
      

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Clear your doubts</p>
          </div>

          <div className="space-y-6">
            {faqQuestions.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200 pb-6">
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => setActiveQuestion(activeQuestion === faq.id ? null : faq.id)}
                >
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      activeQuestion === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeQuestion === faq.id && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5G Connection Section */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-400 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rotate-45 opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">HOW IT WORKS IN 5G CONNECTION</h2>
            <p className="text-white opacity-90">See how our 5G connection improves your navigation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact our call center</h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop"
                alt="Call Center Support"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="bg-primary-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Hire the best broadband in your region today</h3>
              <p className="mb-8 opacity-90">
                Get connected with high-speed internet that suits your needs.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter and Help Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-primary-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Get news in your e-mail" 
                className="flex-1 px-6 py-3 rounded-full focus:outline-none" 
              />
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
                Go
              </button>
            </div>
          </div>
          <div className="bg-black text-white p-8 rounded-2xl flex items-center justify-center text-center">
            <div>
              <p className="text-sm mb-1">NEED HELP? CALL US 24/7</p>
              <p className="text-primary-500 text-2xl">+254 713 937 538</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
