import React, { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 23,
    minutes: 58,
    seconds: 25,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds };
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 };
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
        
        const newDays = prev.days - 1;
        if (newDays >= 0) return { days: newDays, hours: 23, minutes: 59, seconds: 59 };
        
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl p-8 shadow-xl overflow-hidden relative">
            {/* Left Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Coming Soon</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.</p>
              
              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-emerald-400 rounded-xl p-4 text-center text-white">
                  <div className="text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm">Days</div>
                </div>
                <div className="bg-emerald-400 rounded-xl p-4 text-center text-white">
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm">Hours</div>
                </div>
                <div className="bg-emerald-400 rounded-xl p-4 text-center text-white">
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm">Minutes</div>
                </div>
                <div className="bg-emerald-400 rounded-xl p-4 text-center text-white">
                  <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm">Seconds</div>
                </div>
              </div>

              {/* Email Input */}
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button className="px-6 py-2 bg-emerald-400 text-white rounded-full hover:bg-emerald-500 transition-colors">
                  Send
                </button>
              </div>

              {/* Dots */}
              
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Coming Soon"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-400/20 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
