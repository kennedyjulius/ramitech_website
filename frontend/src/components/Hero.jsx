import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-40 w-8 h-8 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-emerald-400 rotate-45 opacity-20"></div>
      <div className="absolute top-40 right-[45%] w-6 h-6 border-2 border-emerald-400 rounded-full opacity-30"></div>
      <div className="absolute -right-10 top-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"></div>
      
      {/* Diagonal Line */}
      <div className="absolute bottom-0 right-[30%] w-[2px] h-[200px] bg-emerald-400/30 rotate-[30deg]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
            <h1 className="text-6xl font-bold leading-tight">
              You deserve ultra fast internet for{' '}
              <span className="text-emerald-400">work</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Join the Network People and get high-speed internet for your home or office powered by Ramitech Networks.
            </p>
            <Link 
              to="/Packages" 
              className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              See Plans
            </Link>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop"
                alt="Happy Couple Using Internet"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Speed Badge */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 bg-emerald-400 text-white rounded-full p-8 shadow-lg transform rotate-12">
              <div className="text-center">
                <div className="text-3xl font-bold">10mbps</div>
                <div className="text-sm">with Airtel 5G</div>
                <div className="font-bold mt-1">Kshs 3500<span className="text-sm">/mo</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-emerald-400 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-300 rounded-full opacity-30"></div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-300 rounded-full opacity-50"></div>
            
            <h2 className="text-2xl font-bold mb-6">The best broadband<br />in your home</h2>
            <p className="text-lg mb-2">from Kshs 2,000/mo</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>Latest tech in fiber speed with optical fiber</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>Boost your internet with Ramitech Wi-Fi</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>8+ years speed test more range</span>
              </li>
            </ul>

            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors">
              Get Connected
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src="https://cdn-webportal.airtelstream.net/website/kenya/assets/images/5g-smart-connect-device.jpg"
                alt="Family enjoying internet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Unlimited apps, lots of internet and the{' '}
              <span className="text-emerald-400">biggest 5G coverage</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Nam tortor ut blandit lectus porttitor nisi condimentum ut. At augue eget sed ultrices dui at convallis dui.
            </p>
            <button className="text-emerald-400 font-semibold hover:text-emerald-500 transition-colors">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}