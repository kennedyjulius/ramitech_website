export default function Newsletter() {
    return (
      <div className="bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl p-8">
        <h3 className="text-white text-2xl font-bold mb-4">Newsletter</h3>
        <div className="flex gap-4">
          <input 
            type="email" 
            placeholder="Get news in your e-mail"
            className="flex-1 px-6 py-3 rounded-full focus:outline-none text-gray-700"
          />
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
            Go
          </button>
        </div>
      </div>
    );
  }
  