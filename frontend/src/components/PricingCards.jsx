import React, { useState, useEffect } from 'react';

const PricingCard = ({ speed, price, features, index }) => {
  return (
    <div 
      className="bg-emerald-400 rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden hover:transform hover:scale-105 transition-all duration-500 group animate-[slideUp_1s_ease-out] opacity-0"
      style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
    >
      {/* Background decorative elements */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-300 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-125" />
      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-emerald-300 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-150" />
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Speed */}
      <div className="text-4xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2">{speed}</div>
      
      {/* Price */}
      <div className="text-3xl font-bold text-white mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2">{price}</div>
      
      {/* Features */}
      <ul className="flex-1 space-y-4">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-center gap-3 text-white transform transition-all duration-500 hover:translate-x-2"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Button */}
      <button className="mt-8 bg-black text-white px-6 py-3 rounded-full font-bold 
      hover:bg-gray-800 transition-all duration-500 w-full transform hover:scale-105 hover:shadow-lg group-hover:bg-gray-900">
        Connect
      </button>
    </div>
  );
};

export default function PricingCards() {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        console.log('Fetching packages...');
        const response = await fetch('http://localhost:5000/api/internet-packages', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        });
        
        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Received data:', data);
        
        if (!Array.isArray(data)) {
          console.error('Unexpected data format:', data);
          throw new Error('Invalid data format received from server');
        }
        
        // Transform the data to match our component's format
        const formattedData = data.map(pkg => {
          console.log('Processing package:', pkg);
          return {
            speed: `${pkg.speed}mbps`,
            price: `Kshs ${pkg.price}/mo`,
            features: [
              'Ultra Speed',
              'Mobile WiFi',
              'No Data Caps',
              'Free Installation',
              'Call Support'
            ]
          };
        });
        
        console.log('Formatted data:', formattedData);
        setPricingPlans(formattedData);
      } catch (err) {
        console.error('Error fetching packages:', err);
        setError(err.message || 'Failed to fetch packages');
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-lg animate-pulse">Loading packages...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 bg-red-50 px-6 py-4 rounded-lg shadow-sm border border-red-100 animate-[slideUp_1s_ease-out]">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>Error: {error}</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback data if no packages are available
  const defaultPlans = [
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/10 to-transparent mix-blend-overlay" />
        <div className="grid grid-cols-8 gap-4 -rotate-12 scale-150 opacity-20">
          {Array(64).fill(0).map((_, i) => (
            <div key={i} className="h-8 bg-emerald-400/20 rounded-full animate-pulse" 
              style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      {(pricingPlans.length > 0 ? pricingPlans : defaultPlans).map((plan, index) => (
        <PricingCard
          key={index}
          index={index}
          speed={plan.speed}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
}
