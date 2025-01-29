export default function PricingCard({ speed, price, features }) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 flex flex-col gap-4 
      hover:transform hover:scale-105 transition-all duration-300">
        <div className="text-4xl font-bold text-green-400">{speed}</div>
        <div className="text-3xl font-semibold">{price}</div>
        <ul className="flex-1 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-green-400 text-gray-900 px-6 py-3 rounded-full font-bold 
        hover:bg-green-300 transition-colors">
          Choose Plan
        </button>
      </div>
    );
  }