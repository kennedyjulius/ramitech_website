export default function Hero() {
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold leading-tight">
                You deserve ultra<br />
                fast internet for<br />
                <span className="text-primary-500">work</span>
              </h1>
              <div className="bg-primary-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">Unlimited apps, lots of</h3>
                <p className="text-gray-600">biggest 5G coverage</p>
              </div>
              <button className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg hover:bg-primary-600 transition-colors">
                Get Started
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://source.unsplash.com/random/800x600/?internet,router" 
                alt="5G Router"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary-500 text-white px-8 py-3 rounded-full whitespace-nowrap">
                  The 5G provider has arrived at Zortex
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }