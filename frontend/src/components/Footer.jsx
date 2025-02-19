import { Link } from 'react-router-dom';
import ramitechLogo from '../assets/ramitech.png';

export default function Footer() {
  const services = [
    { name: 'Streaming', path: '/services#mobile' },
    { name: 'Netflix + Wifi', path: '/services#netflix' },
    { name: 'Mobile Wifi', path: '/services#text' },
    { name: 'Bussiness Wifi', path: '/services#movie' },
  ];

  const usefulLinks = [
    { name: 'Coverage Area', path: '/coverage-area' },
    { name: 'Speed Test', path: '/speed-test' },
    { name: 'Dedicated Line', path: '/dedicated-line' },
    { name: 'FAQ', path: '/faq' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Instagram', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
    { name: 'LinkedIn', icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' }
  ];

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={ramitechLogo}
                alt="Ramitech Logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-xl font-bold text-[#376B99]">Ramitech</span>
            </div>
            <p className="text-gray-600 mb-6">
              The internet's high performance internet for your home or your office.
              We have more than 10 years of experience and quality in support.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={`https://${social.name.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#376B99] transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-600 hover:text-[#376B99] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Useful links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-[#376B99] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Get in touch</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Customer service and support</p>
                <p className="text-[#376B99]">+254 713 937 538</p>
              </div>
              <div>
                <p className="font-semibold">Ramitech Networks</p>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500">
            {new Date().getFullYear()} Ramitech Networks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}