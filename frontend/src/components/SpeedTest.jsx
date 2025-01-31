import { useState } from 'react';
import Newsletter from './Newsletter';

export default function SpeedTest() {
  const [speed, setSpeed] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSpeedTest = () => {
    setIsLoading(true);
    // Simulated speed test
    setTimeout(() => {
      setSpeed(721);
      setIsLoading(false);
    }, 2000);
  };

  const steps = [
    "Connect to your network",
    "Click on Start Test button",
    "Wait for results",
    "View detailed analysis"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-400">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Speed Test</h1>
          <p className="text-white text-center">Home → Template → Speed Test</p>
        </div>
      </div>

      {/* Speed Test Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Test your speed</h2>
            <p className="text-gray-600 mb-8">
              Check your download and upload speeds to ensure you're getting the most out of your broadband
            </p>
            <button
              onClick={handleSpeedTest}
              disabled={isLoading}
              className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors"
            >
              {isLoading ? 'Testing...' : 'Speed Check'}
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-500 mb-2">
                {speed}
                <span className="text-2xl">mbps</span>
              </div>
              <p className="text-gray-600">Your current internet speed</p>
            </div>
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

      {/* Router Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Get to know the Blaster TK router with
              <span className="text-primary-500"> 5G technology</span> by Zortex
            </h2>
            <ul className="space-y-4 mt-8">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Advanced 5G support for ultra-fast speeds
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Dual-band WiFi for optimal performance
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Enhanced security features
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1544428571-c4c4576ef362?w=800&h=600&fit=crop" 
              alt="5G Router" 
              className="rounded-lg shadow-xl w-full h-auto" 
            />
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
