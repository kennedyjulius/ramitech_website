import { useState, useEffect } from 'react';
import CheckConnectionModal from '../components/CheckConnectionModal';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import SpeedTest from '../components/SpeedTest';
import Partners from '../components/Partners';
import ComingSoon from '../components/ComingSoon';
import PricingCards from '../components/PricingCards';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Packages Section */}
      <div className="mt-4 animate-[slideUp_1s_ease-out] opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.3s' }}>
        <PricingCards />
      </div>

      {/* Speed Test Section */}
      <div className="mt-4 animate-[slideUp_1s_ease-out] opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.6s' }}>
        <SpeedTest/>
      </div>

      {/* Coming Soon Section */}
      <div className="mt-4 animate-[slideUp_1s_ease-out] opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.9s' }}>
        <ComingSoon />
      </div>

      {/* Partners Section */}
      <div className="mt-4 animate-[slideUp_1s_ease-out] opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '1.2s' }}>
        <Partners />
      </div>

      {/* Testimonials Section */}
      <div className="mt-4 animate-[slideUp_1s_ease-out] opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '1.5s' }}>
        <Testimonials />
      </div>

      {/* Newsletter Section */}
      <div className="mt-4 pb-8 animate-[slideUp_1s_ease-out] opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '1.8s' }}>
        <Newsletter />
      </div>

      {/* Connection Check Modal */}
      {showModal && <CheckConnectionModal onClose={() => setShowModal(false)} />}
    </div>
  );
}