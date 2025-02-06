import Newsletter from './Newsletter';

export default function CoverageArea() {
  const features = [
    {
      title: 'Security',
      description: 'Advanced security features to protect your connection',
      icon: '🔒'
    },
    {
      title: 'Protection',
      description: 'Comprehensive protection against cyber threats',
      icon: '🛡️'
    },
    {
      title: 'Technology',
      description: 'Latest technology for optimal performance',
      icon: '⚡'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-400 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rotate-45 opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <h1 className="text-5xl font-bold text-white text-center mb-4">Coverage Area</h1>
          <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
        </div>
      </div>

      {/* Coverage Area Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Consult our coverage area and check the quality of your signal</h2>
            <p className="text-gray-600">
              We cover 65% of the entire BRAZIL service area, with 750 cities already in our fiber optic.
            </p>
          </div>

          <div className="mb-20">
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop"
              alt="Coverage Map"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How do I know if I have the Ultranet signal?</h2>
            <p className="text-gray-600">Check your area coverage and signal quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-primary-500 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Router Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Get to know the Blaster TK router with
                  <span className="text-primary-500"> 3G technology by Zortex</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Experience blazing-fast internet speeds with our latest router technology. Perfect for gaming,
                  streaming, and all your online activities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Wi-Fi 6 technology for optimal performance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced security features
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Easy setup and management
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1544428571-c4c4576ef362?w=800&h=600&fit=crop"
                  alt="5G Router"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter and Help Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-primary-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Get news in your e-mail" 
                className="flex-1 px-6 py-3 rounded-full focus:outline-none" 
              />
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
                Go
              </button>
            </div>
          </div>
          <div className="bg-black text-white p-8 rounded-2xl flex items-center justify-center text-center">
            <div>
              <p className="text-sm mb-1">NEED HELP? CALL US 24/7</p>
              <p className="text-primary-500 text-2xl">+254 713 937 538</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
