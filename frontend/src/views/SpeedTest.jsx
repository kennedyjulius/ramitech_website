import { useState } from 'react';
import Popup from '../components/Popup';

export default function SpeedTest() {
  const [showPopup, setShowPopup] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState('72mbps');

  const startTest = () => {
    setTimeout(() => {
      setDownloadSpeed('95mbps');
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">
        <h1 className="text-5xl font-bold mb-8">Speed Test</h1>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 shadow-xl">
          <div className="text-6xl font-mono mb-6">{downloadSpeed}</div>
          <button
            onClick={startTest}
            className="bg-green-400 text-gray-900 px-8 py-3 rounded-full font-bold 
            hover:scale-105 transition-transform duration-300"
          >
            CHECK SPEED
          </button>
        </div>

        <p className="text-gray-400 text-lg mb-16">
          Test your internet speed with Zortex Series 1 advanced diagnostics
        </p>

        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">5G Technology by Zortex</h2>
          <div className="flex items-center justify-center gap-6">
            <div className="w-32 h-32 bg-gray-700 rounded-lg" /> {/* Router image placeholder */}
            <p className="text-gray-300 max-w-md">
              TK router with advanced 5G technology providing ultra-fast connectivity
            </p>
          </div>
        </div>
      </div>

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}