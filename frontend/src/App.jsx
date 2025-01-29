// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import ReturnEquipment from './components/ReturnEquipments';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center">
                <img src="/logo.png" alt="Zortex" className="h-8" />
                <span className="ml-2 text-xl font-bold text-gray-900">Zortex</span>
              </Link>
              
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-primary-500">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-primary-500">About Us</Link>
                <Link to="/services" className="text-gray-700 hover:text-primary-500">Services</Link>
                <Link to="/packages" className="text-gray-700 hover:text-primary-500">Packages</Link>
                <Link to="/contact" className="text-gray-700 hover:text-primary-500">Contact</Link>
              </nav>

              <div className="flex items-center space-x-4">
                <Link to="/account" className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900">
                  My Account
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/return-equipment" element={<ReturnEquipment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <img src="/logo.png" alt="Zortex" className="h-12 mb-4" />
                <p className="text-gray-600 mb-4">
                  The internet's high performance internet for your home or your office. We have more than 10 years of experience and quality in support.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link to="/services/mobile" className="text-gray-600 hover:text-primary-500">Mobile One</Link></li>
                  <li><Link to="/services/netflix" className="text-gray-600 hover:text-primary-500">Netflix + Wifi</Link></li>
                  <li><Link to="/services/mobile-text" className="text-gray-600 hover:text-primary-500">Mobile Text</Link></li>
                  <li><Link to="/services/movie-tv" className="text-gray-600 hover:text-primary-500">Movie TV</Link></li>
                  <li><Link to="/services/satellite" className="text-gray-600 hover:text-primary-500">Satellite TV</Link></li>
                  <li><Link to="/services/security" className="text-gray-600 hover:text-primary-500">Home Security</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Useful links</h3>
                <ul className="space-y-2">
                  <li><Link to="/broadband" className="text-gray-600 hover:text-primary-500">Broadband</Link></li>
                  <li><Link to="/speed-test" className="text-gray-600 hover:text-primary-500">Speed Test</Link></li>
                  <li><Link to="/additional-service" className="text-gray-600 hover:text-primary-500">Additional Service</Link></li>
                  <li><Link to="/dedicated-line" className="text-gray-600 hover:text-primary-500">Dedicated Line</Link></li>
                  <li><Link to="/faq" className="text-gray-600 hover:text-primary-500">FAQ</Link></li>
                  <li><Link to="/return-equipment" className="text-gray-600 hover:text-primary-500">Return of Equipment</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Get in touch</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <span className="block font-semibold">Customer service and support</span>
                    +202 4987 8976
                  </p>
                  <p className="text-gray-600">
                    <span className="block font-semibold">Virginia Branch</span>
                    2654 Virginia Beach
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <p className="text-center text-gray-500"> Zortex Template V5 by Blinder Online</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;