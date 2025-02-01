import { useState } from 'react';
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
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      

      {/* Coverage Area */}
      {/* <CoverageArea /> */}

      {/* Packages Section */}
      <PricingCards />
      {/* {/Packages/} */}
      <SpeedTest/>

      {/* Coming Soon Section */}
      <ComingSoon />

      <Partners />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      

      {/* Newsletter Section */}
      <div className="py-20">
        <Newsletter />
      </div>

      {/* Connection Check Modal */}
      {showModal && <CheckConnectionModal onClose={() => setShowModal(false)} />}
    </div>
  );
}