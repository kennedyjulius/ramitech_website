import React from 'react';
import PricingCards from '../components/PricingCards';
import Newsletter from '../components/Newsletter';
import Services from '../components/Services';

export default function Packages() {
  return (
    
    <div className="bg-gray-50">
      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">PLANS & PRICING</h2>
          <div className="flex gap-1 justify-center mb-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-emerald-400" />
            ))}
          </div>
          <h3 className="text-3xl font-bold mb-4">The best internet at the best prices</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a plan that fits your needs. High-speed, reliable, and affordable.
          </p>
        </div>

        {/* Pricing Cards */}
        <PricingCards />
      </div>

      {/* Newsletter Section */}
      <div className="py-16">
        <Newsletter />
      </div>
      </div>
      
  );
}
