import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
    return (
      
      <div className="container mx-auto px-4 py-20 relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div 
            className="bg-[#376B99] rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 group relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated background elements */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#376B99]/70 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-125" />
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#376B99]/70 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-150" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#376B99]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-4 transform transition-all duration-500 group-hover:translate-x-2">Stay Updated</h3>
            <div className="flex gap-2 relative z-10">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300 transform hover:scale-[1.02]" 
              />
              <button 
                className="bg-black text-white px-8 py-3 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-lg relative overflow-hidden group"
                style={{
                  transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
                }}
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
          <div className="bg-black text-white p-8 rounded-2xl flex items-center justify-center text-center transform transition-all duration-500 hover:scale-105 relative overflow-hidden group">
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#376B99] via-[#376B99]/80 to-[#376B99] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="absolute -inset-px bg-black rounded-2xl z-0"></div>
            <div className="relative z-10">
              <p className="text-sm mb-1 transform transition-all duration-500 group-hover:translate-y-[-2px]">NEED HELP? CALL US 24/7</p>
              <p className="text-[#376B99] text-2xl font-bold transform transition-all duration-500 group-hover:translate-y-[-2px] group-hover:scale-110">+254 713 937 538</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  