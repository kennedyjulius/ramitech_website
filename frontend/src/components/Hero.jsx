import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "STRUCTURED NETWORKS",
      subtitle: "FOR YOUR BUSINESS",
      description: "We deliver structured cabling solutions that enhance efficiency, minimize downtime, and provide a scalable foundation for your evolving connectivity requirements.",
      image: "https://media.istockphoto.com/id/1756500551/photo/glass-fibre-cable-on-a-drum.webp?a=1&b=1&s=612x612&w=0&k=20&c=P5sCKNHA467DhNvFJAARTH47toloLanrHmSz-Lcc7DU="
    },
    {
      title: "FIBER INTERNET",
      subtitle: "FOR YOUR HOME",
      description: "Experience lightning-fast connectivity with our state-of-the-art fiber network, delivering reliable speeds for all your digital needs.",
      image: "https://plus.unsplash.com/premium_photo-1661715955019-89f39802cd4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmliZXIlMjBjYWJsZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Top Hero Section */}
      <div className="relative h-[60vh] overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slides[currentSlide].image})`,
                filter: 'brightness(0.3)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#376B99]/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {slides[currentSlide].title}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#376B99] mb-6">
                {slides[currentSlide].subtitle}
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                {slides[currentSlide].description}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#376B99] text-white px-8 py-3 rounded-md hover:bg-[#2a517a] transition-colors"
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom White Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Experience the Magic of
              </h2>
              <h3 className="text-4xl font-bold text-[#376B99]">
                Ramitech Networks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experience streaming, video calls, online gaming, and seamless remote work with Ramitech
                Networks Fiber Internet. At Ramitech Networks, we understand the modern pulse, providing
                lightning-fast internet for thriving businesses and households alike.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Plug into Ramitech Networks where innovation meets accessibility, and experience a digital
                era where unparalleled connectivity and innovation is a reality for everyone.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#376B99] text-white px-8 py-3 rounded-md hover:bg-[#2a517a] transition-colors"
              >
                GET STARTED
              </motion.button>
            </div>

            {/* Right Content - Special Offer */}
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Badges Container */}
                <div className="absolute -right-4 top-0 z-10 flex flex-col gap-4">
                  {/* Special Offer Badge */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="bg-black text-white rounded-full p-4 cursor-pointer"
                  >
                    <div className="text-center text-sm font-bold">
                      <div>SPECIAL</div>
                      <div>OFFER</div>
                    </div>
                  </motion.div>

                  {/* Speed Badge */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    className="bg-[#376B99] text-white rounded-full p-6 cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-sm font-bold">UP TO</div>
                      <div className="text-3xl font-bold">100MB</div>
                      <div className="text-xs font-bold">PER SECOND</div>
                    </div>
                  </motion.div>
                </div>

                {/* Main Image */}
                <div className="relative rounded-full overflow-hidden w-[400px] h-[400px] mx-auto">
                  <img
                    src="https://media.istockphoto.com/id/2157490067/photo/young-couple-looking-at-smartphone-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=IsxOECEbAX66XCivgQhR9BL9lVoIyAF2uQqyVHULSjM="
                    alt="Happy couple enjoying internet"
                    className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;