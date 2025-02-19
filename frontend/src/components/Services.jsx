import Newsletter from './Newsletter';
import Hero5G from './Hero5G';

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
      

 {/* Services Grid */}
<div className="container mx-auto px-4 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="mb-12">
      <p className="text-[#376B99] font-semibold mb-4">OUR SERVICES</p>
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






    {/* {<Hero5G />} */}
    
  






      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#376B99] font-semibold mb-4">FREE STREAMING</p>
              <h2 className="text-4xl font-bold mb-6">Celebrating with friends on an ultra fast internet is priceless</h2>
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop"
                alt="Friends Streaming"
                className="w-full h-auto rounded-2xl shadow-lg mb-8"
              />
            </div>
            <div className="bg-[#376B99] rounded-2xl p-8 text-white self-center">
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
              <button className="bg-[#376B99] text-white px-8 py-3 rounded-full hover:bg-[#2a517a] transition-colors">
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
      
        
      </div>
    
  );
}