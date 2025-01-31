import React from "react";
import Footer from "./components/Footer";
import { useParams } from 'react-router-dom';
import Services from '../components/Services';
import Newsletter from '../components/Newsletter';
import Feature from '../components/Feature';

const SingleService = () => {
  const { serviceId } = useParams();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-400 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rotate-45 opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <h1 className="text-5xl font-bold text-white text-center mb-4">Service Details</h1>
          <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
        </div>
      </div>

      {/* Service Details */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Menu */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li className="p-3 bg-primary-500 text-white rounded-lg">Broadband</li>
                <li className="p-3 hover:bg-primary-500 hover:text-white rounded-lg transition-colors">Wifi</li>
                <li className="p-3 hover:bg-primary-500 hover:text-white rounded-lg transition-colors">Home Security</li>
                <li className="p-3 hover:bg-primary-500 hover:text-white rounded-lg transition-colors">Movie TV</li>
                <li className="p-3 hover:bg-primary-500 hover:text-white rounded-lg transition-colors">Mobile Net</li>
                <li className="p-3 hover:bg-primary-500 hover:text-white rounded-lg transition-colors">Netflix + Wifi</li>
                <li className="p-3 hover:bg-primary-500 hover:text-white rounded-lg transition-colors">Mobile Chip</li>
              </ul>
            </div>
          </div>

          {/* Service Content */}
          <div className="md:col-span-2">
            <Feature />
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
          <Services />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20">
        <Newsletter />
      </div>
    </div>
  );
};