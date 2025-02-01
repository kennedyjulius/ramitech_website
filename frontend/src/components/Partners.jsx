import React, { useState, useEffect } from 'react';

const partners = [
  {
    name: 'Partner 1',
    logo: 'https://via.placeholder.com/150x80',
  },
  {
    name: 'Partner 2',
    logo: 'https://via.placeholder.com/150x80',
  },
  {
    name: 'Partner 3',
    logo: 'https://via.placeholder.com/150x80',
  },
  {
    name: 'Partner 4',
    logo: 'https://via.placeholder.com/150x80',
  },
  {
    name: 'Partner 5',
    logo: 'https://via.placeholder.com/150x80',
  }
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Our Partners</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="h-20 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-emerald-400' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
