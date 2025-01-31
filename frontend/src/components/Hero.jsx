import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-primary-500 py-20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Live all the connections with our services
            </h1>
            <p className="text-xl opacity-90">
              Experience high-quality internet and entertainment services
            </p>
            <Link 
              to="/services" 
              className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop"
              alt="High Speed Internet"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}