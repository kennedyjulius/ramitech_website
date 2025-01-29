import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const features = [
    {
      title: "Ultra fast mobile connection",
      description: "Experience lightning-fast mobile internet speeds",
      icon: "📱"
    },
    {
      title: "Comprehensive coverage",
      description: "Stay connected everywhere with our wide network coverage",
      icon: "🌍"
    },
    {
      title: "Advanced WPA3 security",
      description: "Keep your connection secure with latest security protocols",
      icon: "🔒"
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
                You deserve ultra fast internet for work
              </h1>
              <p className="text-white text-lg mb-8">
                Experience the best internet service with our high-speed connectivity solutions
              </p>
              <Link to="/packages" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
                View Packages
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src="/hero-image.jpg" alt="Fast Internet" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Broadband</h3>
            <p className="text-gray-600 mb-4">High-speed internet for your daily needs</p>
            <Link to="/services/broadband" className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors">
              Learn More
            </Link>
          </div>
          <div className="bg-primary-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">WiFi Plus</h3>
            <p className="text-gray-600 mb-4">Enhanced wireless connectivity solutions</p>
            <Link to="/services/wifi-plus" className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors">
              Learn More
            </Link>
          </div>
          <div className="bg-primary-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Satellite</h3>
            <p className="text-gray-600 mb-4">Wide coverage satellite internet services</p>
            <Link to="/services/satellite" className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Incredible security & features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Netflix Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Watch Netflix with ultra fast internet</h2>
            <p className="text-gray-600 mb-6">Stream your favorite shows and movies without buffering</p>
            <Link to="/packages" className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors">
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="/netflix-watching.jpg" alt="Netflix Streaming" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <Newsletter />
      </div>
    </div>
  );
}