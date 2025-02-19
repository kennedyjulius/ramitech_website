export default function Features() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://source.unsplash.com/random/800x600/?family,streaming" 
                alt="Family streaming"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Watch Netflix with ultra<br />
                fast internet
              </h2>
              <p className="text-gray-600 text-lg">
                Experience seamless streaming with our high-speed internet service.
                Perfect for the whole family.
              </p>
              <button className="bg-[#376B99] text-white px-8 py-4 rounded-full text-lg hover:bg-[#2a517a] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }