import React, { useState, useEffect } from 'react';

const defaultPartners = [
  {
    name: 'Partner 1',
    imageUrl: 'https://via.placeholder.com/150x80',
  },
  {
    name: 'Partner 2',
    imageUrl: 'https://via.placeholder.com/150x80',
  },
  {
    name: 'Partner 3',
    imageUrl: 'https://via.placeholder.com/150x80',
  }
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch partners from backend
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/partners');
        if (!response.ok) {
          throw new Error('Failed to fetch partners');
        }
        const data = await response.json();
        setPartners(data.length > 0 ? data : defaultPartners);
      } catch (err) {
        console.error('Error fetching partners:', err);
        setError(err.message);
        setPartners(defaultPartners);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (partners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <div className="bg-gray-50 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#376B99]/10 to-transparent mix-blend-overlay" />
        <div className="grid grid-cols-10 gap-4 rotate-12 scale-150 opacity-20">
          {Array(100).fill(0).map((_, i) => (
            <div key={i} className="h-8 bg-[#376B99]/20 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 animate-[slideUp_1s_ease-out]">Our Partners</h2>
          <div className="w-20 h-1 bg-[#376B99] mx-auto animate-[slideUp_1s_ease-out] delay-200"></div>
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
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="absolute inset-0 bg-[#376B99]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="h-20 flex items-center justify-center">
                      <img
                        src={partner.imageUrl || partner.localImage}
                        alt={partner.name}
                        className="max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#376B99]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
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
                className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-150 ${
                  currentIndex === index ? 'bg-[#376B99]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
