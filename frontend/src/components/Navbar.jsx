import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ramitechLogo from '../assets/ramitech.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={ramitechLogo}
              alt="Ramitech Logo"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-xl font-bold text-primary-500">Ramitech Networks</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium ${
                  isActivePath(link.path)
                    ? 'text-primary-500'
                    : 'text-gray-500 hover:text-primary-500'
                } transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* My Account Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors"
            >
              My Account
            </Link>
            <Link
              to="/coverage-area"
              className="p-2 rounded-full text-gray-500 hover:text-primary-500 hover:bg-gray-100"
              title="Coverage Area"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-primary-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium ${
                    isActivePath(link.path)
                      ? 'text-primary-500'
                      : 'text-gray-500 hover:text-primary-500'
                  } transition-colors`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Account
              </Link>
              <Link
                to="/coverage-area"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Coverage Area
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}