import React, { useState, useEffect } from 'react';
import { DataComponent } from './DataComponent';

export default function ComingSoon() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentData, setCurrentData] = useState(null);

  // Function to calculate time left
  const calculateTimeLeft = (targetDate) => {
    if (!targetDate) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const now = new Date().getTime();
    const eventDate = new Date(targetDate).getTime();
    const difference = eventDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Timer effect
  useEffect(() => {
    if (!currentData?.activeTimer) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(currentData.activeTimer));
    }, 1000);

    return () => clearInterval(timer);
  }, [currentData]);

  return (
    <DataComponent endpoint="/coming-soon">
      {(comingSoonData) => {
        console.log('ComingSoon: Rendering with data:', comingSoonData);

        // Update current data when new data arrives
        if (comingSoonData && comingSoonData !== currentData) {
          setCurrentData(comingSoonData);
        }

        // Default values for defensive rendering
        const imageUrl = comingSoonData?.image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d';
        const displayText = comingSoonData?.text || 'Loading...';

        return (
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl p-8 shadow-xl overflow-hidden relative">
                  {/* Left Section */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">Coming Soon {comingSoonData ? '' : '(No Data)'}</h2>
                    <p className="text-gray-600">{displayText}</p>
                    
                    {/* Countdown Timer */}
                    <div className="grid grid-cols-4 gap-4">
                      {["days", "hours", "minutes", "seconds"].map((unit) => (
                        <div key={unit} className="bg-[#376B99] rounded-xl p-4 text-center text-white">
                          <div className="text-3xl font-bold">{timeLeft[unit]}</div>
                          <div className="text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                        </div>
                      ))}
                    </div>

                    {/* Email Input */}
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#376B99]"
                      />
                      <button className="px-6 py-2 bg-[#376B99] text-white rounded-full hover:bg-[#2a517a] transition-colors">
                        Send
                      </button>
                    </div>
                  </div>

                  {/* Right Section - Image */}
                  <div className="w-full md:w-1/2 relative">
                    <img
                      src={imageUrl}
                      alt="Coming Soon"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#376B99]/20 rounded-full" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#376B99]/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </DataComponent>
  );
}
