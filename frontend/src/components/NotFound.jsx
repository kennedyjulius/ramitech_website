import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-primary-500 to-primary-400 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-8">Page Not Found</h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL?
            Be sure to check your spelling.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              Go Home
            </Link>
            <Link
              to="/contact"
              className="bg-white text-primary-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}