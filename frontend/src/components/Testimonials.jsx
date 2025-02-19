import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'The best internet service I\'ve ever used. Fast, reliable, and great customer support!'
    },
    {
      name: 'Jane Smith',
      role: 'Remote Worker',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      quote: 'Perfect for working from home. Never experienced any downtime!'
    },
    {
      name: 'Mike Johnson',
      role: 'Gamer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      quote: 'Amazing speeds for gaming and streaming. Couldn\'t be happier!'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#376B99]/10 to-transparent mix-blend-overlay" />
        <div className="grid grid-cols-12 gap-4 rotate-12 scale-150 opacity-20">
          {Array(144).fill(0).map((_, i) => (
            <div key={i} className="h-8 bg-[#376B99]/20 rounded-full animate-pulse" 
              style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-5 animate-[slideUp_1s_ease-out]">What clients say about us</h2>
          <p className="text-gray-600 text-lg animate-[slideUp_1s_ease-out] delay-100">Discover why our customers love our internet services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 group relative overflow-hidden
                ${index === activeIndex ? 'animate-[slideUp_1s_ease-out] scale-105' : 'scale-95 opacity-70'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#376B99]/30 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-125" />
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#376B99]/20 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-150" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#376B99]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center mb-5 relative z-10">
              <div className="relative">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-5 object-cover transition-transform duration-500 group-hover:scale-110 ring-2 ring-[#376B99]/30" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#376B99]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="transform transition-all duration-500 group-hover:translate-x-2">
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg relative z-10 transform transition-all duration-500 group-hover:translate-y-[-2px]">
              "{testimonial.quote}"
            </p>
          </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-150
                ${index === activeIndex ? 'bg-[#376B99] scale-125' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        {/* Newsletter Section
        <Newsletter /> */}
      </div>
    </div>
  );
}
