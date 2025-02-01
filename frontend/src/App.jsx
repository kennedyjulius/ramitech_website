import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar'; // Added import
import Footer from './components/Footer'; // Added import

import Home from './views/Home';
import ServicesView from './views/Services';
import Packages from './views/Packages';
import Contact from './views/Contact';
import NotFound from './components/NotFound';
import SpeedTest from './views/SpeedTest';
import FAQ from './components/FAQ';
import CoverageArea from './components/CoverageArea';
import DedicatedLink from './components/DedicatedLink'; // Check this name
import EquipmentReturns from './components/ReturnEquipments';
import ComingSoon from './components/ComingSoon';
import CheckConnectionModal from './components/CheckConnectionModal';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesView />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/equipment-returns" element={<EquipmentReturns />} />
            <Route path="/speed-test" element={<SpeedTest />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/coverage-area" element={<CoverageArea />} />
            <Route path="/dedicated-line" element={<DedicatedLink />} /> {/* Fixed name */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
        <CheckConnectionModal />
      </div>
    </Router>
  );
}
