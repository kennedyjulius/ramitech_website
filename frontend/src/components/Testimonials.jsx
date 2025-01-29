import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";

export default function Testimonials() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What clients say about us</h2>
          <p className="text-gray-600">Discover why our customers love our internet services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img src="/avatar1.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">John Doe</h4>
                <p className="text-gray-600">Business Owner</p>
              </div>
            </div>
            <p className="text-gray-700">"The best internet service I've ever used. Fast, reliable, and great customer support!"</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img src="/avatar2.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">Jane Smith</h4>
                <p className="text-gray-600">Remote Worker</p>
              </div>
            </div>
            <p className="text-gray-700">"Perfect for working from home. Never experienced any downtime!"</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img src="/avatar3.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">Mike Johnson</h4>
                <p className="text-gray-600">Gamer</p>
              </div>
            </div>
            <p className="text-gray-700">"Amazing speeds for gaming and streaming. Couldn't be happier!"</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <Newsletter />
      </div>
    </div>
  );
}