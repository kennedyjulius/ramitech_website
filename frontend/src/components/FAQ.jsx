import { useState } from 'react';
import Newsletter from './Newsletter';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "How to get 5G technology?",
      answer: "Our 5G service is available in select areas. Contact our support team to check availability in your location and upgrade your existing plan to 5G-enabled services."
    },
    {
      question: "How do I cancel if I have access to the region?",
      answer: "To cancel your service, log into your account and visit the subscription management section. You can also contact our support team for assistance with the cancellation process."
    },
    {
      question: "What to get the end out of this connection?",
      answer: "To maximize your connection, ensure your devices are 5G compatible, position your router in an optimal location, and consider using Wi-Fi extenders for better coverage throughout your space."
    },
    {
      question: "How to get the best speed?",
      answer: "For optimal speed, connect directly via ethernet when possible, keep your router updated, and position it away from interference. Our premium plans offer enhanced speeds for demanding users."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-400">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-4">FAQ</h1>
          <p className="text-white text-center">Find answers to commonly asked questions</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <span className={`transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                {openQuestion === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 5G Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">See how our 5G connection improves your navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">📡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Optical Technology</h3>
              <p className="text-gray-600">Lightning-fast data transmission through advanced fiber optics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Turbine Transmission</h3>
              <p className="text-gray-600">Stable and reliable connection with minimal latency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Faster Downloads</h3>
              <p className="text-gray-600">Download large files in seconds with our 5G network</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Contact our call center</h2>
            <p className="text-gray-600 mb-6">Get expert assistance for any questions or concerns</p>
            <div className="bg-black text-white px-8 py-4 rounded-lg inline-block">
              <p className="font-bold">NEED HELP? CALL US 24/7</p>
              <p className="text-primary-400">+202 4987 8976</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-primary-500 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Hire the best broadband in your region today</h3>
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors">
                Get Started
              </button>
            </div>
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
