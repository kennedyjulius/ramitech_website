import { useState } from 'react';
import CheckConnectionModal from '../components/CheckConnectionModal';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Packages from '../components/PricingCards';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import CoverageArea from '../components/CoverageArea';
import FAQ from '../components/FAQ';
import SpeedTest from '../components/SpeedTest';
// import { useState, useEffect } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const activities = [
  //   'Work',
  //   'Entertainment',
  //   'Learning',
  //   'Browsing',
  //   'Streaming',
  //   'Gaming',
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % activities.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Services Section
      <Services /> */}

      {/* Coverage Area
      <CoverageArea /> */}

      {/* Packages Section
      <Packages /> */}
      {/* {/Packages/} */}
      <SpeedTest/>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section
      <FAQ /> */}

      {/* Newsletter Section */}
      <div className="py-20">
        <Newsletter />
      </div>

      {/* Connection Check Modal */}
      {showModal && <CheckConnectionModal onClose={() => setShowModal(false)} />}
    </div>
  );
}