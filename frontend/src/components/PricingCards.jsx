import React from 'react';

const PricingCard = ({ speed, price, features }) => {
  return (
    <div className="bg-emerald-400 rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden
    hover:transform hover:scale-105 transition-all duration-300">
      {/* Background decorative elements */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-300 rounded-full opacity-50" />
      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-emerald-300 rounded-full opacity-30" />
      
      {/* Speed */}
      <div className="text-4xl font-bold text-white mb-2">{speed}</div>
      
      {/* Price */}
      <div className="text-3xl font-bold text-white mb-6">{price}</div>
      
      {/* Features */}
      <ul className="flex-1 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-white">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Button */}
      <button className="mt-8 bg-black text-white px-6 py-3 rounded-full font-bold 
      hover:bg-gray-800 transition-colors w-full">
        Connect
      </button>
    </div>
  );
};

export default function PricingCards() {
  const pricingPlans = [
    {
      speed: '8mbps',
      price: 'Kshs 2,000/mo',
      features: [
        'Ultra Speed',
        'Mobile WiFi',
        'No Data Caps',
        'Free Installation',
        'Call Support'
      ]
    },
    {
      speed: '15mbps',
      price: 'Kshs 2,500/mo',
      features: [
        'Ultra Speed',
        'Mobile WiFi',
        'No Data Caps',
        'Free Installation',
        'Call Support'
      ]
    },
    {
      speed: '20mbps',
      price: 'Kshs 3,000/mo',
      features: [
        'Ultra Speed',
        'Mobile WiFi',
        'No Data Caps',
        'Free Installation',
        'Call Support'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricingPlans.map((plan, index) => (
        <PricingCard
          key={index}
          speed={plan.speed}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
}
