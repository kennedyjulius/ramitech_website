import React from 'react';

const Hero5G = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Main section with curved top */}
      <div className="relative h-[280px]">
        {/* Blurred background image */}
        

        {/* Curved gradient overlay */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1440 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0C0 0 360 80 720 80C1080 80 1440 0 1440 0V280H0V0Z"
              fill="url(#gradient)"
            />
            <defs>
              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="1440"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#376B99" />
                <stop offset="100%" stopColor="#2a517a" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid md:grid-cols-2 gap-8 h-full items-center">
            {/* Left content */}
            <div className="text-white space-y-4 pt-8">
              <h1 className="text-5xl font-bold leading-tight">
                The 5G revolution has
                <br />
                <span className="text-black">arrived at Zortex</span>
              </h1>
              <p className="text-lg opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-all text-sm">
                Get to know 5G
              </button>
            </div>

            {/* Right content - Image */}
            <div className="relative h-full flex items-center justify-end">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
                alt="Professional with tablet"
                className="max-h-[260px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Light beam effects */}
        <div 
          className="absolute top-0 left-1/4 w-40 h-full transform -rotate-45 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
          }}
        />
        <div 
          className="absolute top-0 right-1/3 w-40 h-full transform rotate-45 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
          }}
        />

        {/* Geometric decorative elements */}
        <div className="absolute top-20 left-[20%] w-3 h-3 bg-white/20 rotate-45"></div>
        <div className="absolute top-40 left-[10%] w-2 h-2 bg-white/20 rotate-45"></div>
        <div className="absolute top-16 left-[30%] w-4 h-4 bg-white/20 rotate-45"></div>
      </div>
    </div>
  );
};

export default Hero5G;