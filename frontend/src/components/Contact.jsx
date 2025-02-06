import Newsletter from './Newsletter';

export default function Contact() {
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
          <h1 className="text-5xl font-bold text-white text-center mb-4">Contact</h1>
          <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Hi! How can we help you?</h2>
              <p className="text-gray-600 mb-8">
                We're here to help and answer any question you might have.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500"
                />
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500"
                />
                <select
                  className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500"
                >
                  <option value="">Broadband</option>
                  <option value="mobile">Mobile</option>
                  <option value="tv">TV</option>
                  <option value="security">Security</option>
                </select>
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
                >
                  Send Request
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
                alt="Customer Support"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Support Cards */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">BONUS & SUPPORT</h2>
            <p className="text-gray-600">More convenience for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-primary-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Your bill in pdf</h3>
              <p className="mb-8 opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
                Download
              </button>
            </div>
            <div className="bg-primary-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Avoid fines and delays</h3>
              <p className="mb-8 opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
                Activate
              </button>
            </div>
            <div className="bg-primary-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Common questions</h3>
              <p className="mb-8 opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
                Read More
              </button>
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
