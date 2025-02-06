import Newsletter from './Newsletter';

export default function DedicatedLink() {
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
          <h1 className="text-5xl font-bold text-white text-center mb-4">Dedicated Link</h1>
          <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-500 font-semibold mb-4">GET HIGH PERFORMANCE</p>
              <h2 className="text-4xl font-bold mb-6">Get speed with a dedicated link to your company</h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors">
                Read More
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8f?w=800&h=600&fit=crop"
                alt="Dedicated Internet Connection"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-400 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10"></div>
          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Talk to a Consultant</h2>
            <p className="text-white opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
                <select
                  className="w-full px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white focus:outline-none focus:border-white appearance-none"
                >
                  <option value="" className="text-gray-900">Broadband</option>
                  <option value="mobile" className="text-gray-900">Mobile</option>
                  <option value="tv" className="text-gray-900">TV</option>
                  <option value="security" className="text-gray-900">Security</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Incredible security & features</h2>
          <p className="text-gray-600">Experience our advanced security features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Ultra fast mobile connection</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Comprehensive coverage area</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Advanced WPA4 2.0 security</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
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
