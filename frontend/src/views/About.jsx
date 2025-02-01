import { useState } from 'react';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import Packages from '../components/PricingCards';
import CheckConnectionModal from '../components/CheckConnectionModal';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section with Wavy Background */}
      <div className="relative bg-gradient-to-r from-emerald-400 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 w-full h-20">
            <svg viewBox="0 0 1440 120" className="w-full h-full">
              <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-20 pb-32 relative">
          <h1 className="text-5xl font-bold text-white text-center mb-4">About Us</h1>
          <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 -mt-20">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">We want to revolutionize the quality of your internet</h2>
              <p className="text-gray-600 mb-8">
                With over 5 years of experience in providing high-quality internet services, 
                we're committed to delivering the best possible connection for your home or office.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Happy Family Using Internet"
                className="rounded-3xl shadow-lg w-full h-auto"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-400 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Ultra fast stable connection</h3>
              <p className="text-gray-600">Experience lightning-fast internet speeds with our stable and reliable connection.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-4">Comprehensive coverage area</h3>
              <p className="text-gray-600">Enjoy wide network coverage ensuring connectivity wherever you go.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4">Security & advanced technology</h3>
              <p className="text-gray-600">Stay protected with our advanced security features and cutting-edge technology.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The best internet at the best prices</h2>
            <p className="text-gray-600">Choose the perfect plan for your needs</p>
          </div>
          <Packages />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What clients say about us</h2>
            <p className="text-gray-600">Discover why our customers love our internet services</p>
          </div>
          <Testimonials />
        </div>
      </div>

      {/* Newsletter Section */}

      <div className="py-21">
        <Newsletter />
        </div>

      {/* Connection Check Modal */}
      <div>
        <CheckConnectionModal />
      </div>
    </div>
  );
}
