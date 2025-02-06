export default function Newsletter() {
    return (
      
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
    );
  }
  