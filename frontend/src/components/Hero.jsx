import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const words = ['work', 'entertainment', 'learning', 'gaming', 'programming', 'Social Media'];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, [words.length]);

  return (
    <div className="relative bg-white min-h-[85vh] overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-0 w-32 h-32 bg-emerald-400/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-emerald-400/20 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-emerald-400/10 rotate-12"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 border-2 border-emerald-400/20 rounded-full"></div>
        <div className="absolute left-1/4 bottom-1/3 w-8 h-8 bg-emerald-400/10 rounded-full"></div>
        <div className="absolute right-1/4 top-1/4 w-16 h-16 border border-emerald-400/30 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
          >


            <h1 className="text-6xl font-bold leading-tight text-gray-900">
              You deserve ultra
              <br />
              fast internet for{' '}
              <AnimatePresence mode='wait'>
                <motion.span
                  key={words[wordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-emerald-400 inline-block w-[200px]"
                  style={{ display: 'inline-flex', justifyContent: 'flex-start' }}
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-600 text-lg"
            >
              Join the Network People and get high-speed internet for your home or office powered by Ramitech Networks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/Packages" 
                className="inline-block bg-black text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">See Plans</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <div className="absolute -right-48 -top-48 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
              <div className="relative rounded-l-full overflow-hidden shadow-2xl">
                <img
                  src="https://imgs.search.brave.com/zgV6kgQ-thdCC9JZxYbP2-Z6iNgxmJ17noDtlc5SOw0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ib3Zp/Yy5jby5rZS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOC81/Zy1zbWFydC1ib3gt/MS5wbmc"
                  alt="Happy Couple Using Internet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-emerald-400/20"></div>
              </div>

              {/* Floating Speed Badge */}
              <motion.div 
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
                className="absolute -right-10 bottom-10 bg-emerald-400 text-white rounded-full p-6 shadow-xl"
              >
                <div className="text-center relative">
                  <div className="text-3xl font-bold">800mbps</div>
                  <div className="text-sm whitespace-nowrap">with WiFiPlus</div>
                  <div className="text-2xl font-bold mt-1">$99<span className="text-sm">/mo</span></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
