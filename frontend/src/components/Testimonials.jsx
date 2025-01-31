import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

export default function Testimonials() {
  return (
    <div className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-5">What clients say about us</h2>
          <p className="text-gray-600 text-lg">Discover why our customers love our internet services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Testimonial Cards */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-5">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" 
                   alt="Client" className="w-16 h-16 rounded-full mr-5 object-cover" />
              <div>
                <h4 className="text-xl font-bold">John Doe</h4>
                <p className="text-gray-500">Business Owner</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg">"The best internet service I've ever used. Fast, reliable, and great customer support!"</p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-5">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
                   alt="Client" className="w-16 h-16 rounded-full mr-5 object-cover" />
              <div>
                <h4 className="text-xl font-bold">Jane Smith</h4>
                <p className="text-gray-500">Remote Worker</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg">"Perfect for working from home. Never experienced any downtime!"</p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-5">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" 
                   alt="Client" className="w-16 h-16 rounded-full mr-5 object-cover" />
              <div>
                <h4 className="text-xl font-bold">Mike Johnson</h4>
                <p className="text-gray-500">Gamer</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg">"Amazing speeds for gaming and streaming. Couldn't be happier!"</p>
          </div>
        </div>

        {/* Newsletter Section
        <Newsletter /> */}
      </div>
    </div>
  );
}
