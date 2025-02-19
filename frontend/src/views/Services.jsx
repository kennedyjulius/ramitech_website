import React from 'react';
import Services from '../components/Services';


export default function ServicesView() {
  return (
    <div className="bg-white">
    {/* Hero Section with Wavy Background */}
    <div className="relative bg-[#376B99] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 w-full h-20">
          <svg viewBox="0 0 1440 120" className="w-full h-full">
            <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-20 pb-32 relative">
        <h1 className="text-5xl font-bold text-white text-center mb-4">Services</h1>
        <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
      </div>
    </div>
      
      
      
      {/* Services Section */}
      <Services />
    </div>
  );
}