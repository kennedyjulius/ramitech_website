import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";

export default function Services() {
  const services = [
    {
      title: "Broadband",
      description: "High-speed internet for your daily needs",
      icon: "🌐",
    },
    {
      title: "Wifi Plus",
      description: "Enhanced wireless connectivity",
      icon: "📡",
    },
    {
      title: "Movie TV",
      description: "Stream your favorite content",
      icon: "🎬",
    },
    {
      title: "Mobile",
      description: "Stay connected on the go",
      icon: "📱",
    },
    {
      title: "Satellite",
      description: "Wide coverage solutions",
      icon: "🛰️",
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-400">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Live all the connections with our services
              </h1>
              <p className="text-white text-lg mb-8">
                Experience high-quality internet and entertainment services
              </p>
              <Link to="/contact" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
                Get Started
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src="/high-speed-internet.jpg" alt="High Speed Internet" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={`/services/${service.title.toLowerCase()}`} className="text-primary-500 font-semibold hover:text-primary-600">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Celebrating with friends on an ultra fast internet is priceless</h2>
              <p className="text-gray-600 mb-6">Stream, game, and connect without interruption</p>
              <Link to="/packages" className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors">
                View Packages
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src="/friends-gaming.jpg" alt="Friends Gaming" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <Newsletter />
      </div>
    </div>
  );
}