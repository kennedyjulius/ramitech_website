import Newsletter from './Newsletter';

export default function Services() {
  const services = [
    {
      name: 'Broadband',
      description: 'High-speed internet for your home',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop'
    },
    {
      name: 'Wifi Plus',
      description: 'Enhanced wireless connectivity',
      image: 'https://images.unsplash.com/photo-1562907550-096d3bf9b25c?w=800&h=600&fit=crop'
    },
    {
      name: 'Movie TV',
      description: 'Premium entertainment channels',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop'
    },
    {
      name: 'Mobile',
      description: 'Flexible mobile plans',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop'
    },
    {
      name: 'Satellite',
      description: 'Wide coverage satellite services',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=600&fit=crop'
    }
  ];

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
          <h1 className="text-5xl font-bold text-white text-center mb-4">Services</h1>
          <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
        </div>
      </div>

 {/* Services Grid */}
<div className="container mx-auto px-4 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="mb-12">
      <p className="text-primary-500 font-semibold mb-4">OUR SERVICES</p>
      <h2 className="text-4xl font-bold mb-6">Live all the connections with our services</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden bg-cover bg-center h-80 md:h-96 flex flex-col justify-end p-6"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Card Content */}
          <div className="relative z-10 text-white">
            <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
            <p className="text-sm opacity-90">{service.description}</p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>






    <div className="bg-gradient-to-br from-primary-500 to-primary-400 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="md:w-1/2 text-white">
              <h2 className="text-4xl font-bold mb-4">High Signal Quality</h2>
              <p className="text-lg opacity-90 mb-6">
                Experience ultra-fast speeds with our advanced 5G routers, ensuring the best connectivity.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
                Read More
              </button>
            </div>

            {/* Right Content - Router Image with Shape */}
            <div className="md:w-1/2 relative flex justify-center">
              <div className="relative">
                {/* Router Image in Circular Shape */}
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src="https://unsplash.com/photos/a-close-up-of-a-router-connected-to-a-computer-7sfAKSSlEpw"
                    alt="Router"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Price Badge */}
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow-md">
                  800Mbps - $99/mo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );






      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-primary-500 font-semibold mb-4">FREE STREAMING</p>
              <h2 className="text-4xl font-bold mb-6">Celebrating with friends on an ultra fast internet is priceless</h2>
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop"
                alt="Friends Streaming"
                className="w-full h-auto rounded-2xl shadow-lg mb-8"
              />
            </div>
            <div className="bg-primary-500 rounded-2xl p-8 text-white self-center">
              <h3 className="text-2xl font-bold mb-4">Hire the best broadband in your region today</h3>
              <p className="mb-8 opacity-90">
                Get connected with high-speed internet that suits your needs.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Other questions about our services</h2>
              <p className="text-gray-600 mb-8">
                Find answers to commonly asked questions about our services and features.
              </p>
              <button className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors">
                Read More
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&h=600&fit=crop"
                alt="Customer Support"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
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
              <p className="text-primary-500 text-2xl">+202 4987 8976</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}