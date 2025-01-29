import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Text */}
          <div className="relative mb-12">
            <h1 className="text-[150px] font-bold text-primary-500 opacity-20">404!</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-6xl font-bold text-primary-500">404!</h2>
            </div>
          </div>

          {/* Error Message */}
          <h3 className="text-3xl font-bold mb-4">Oops! This page could not be found!</h3>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
          >
            Back to Homepage
          </Link>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <Newsletter />
      </div>
    </div>
  );
}