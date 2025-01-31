import SpeedTest from '../components/SpeedTest';
import Newsletter from '../components/Newsletter';

export default function SpeedTestView() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-400 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rotate-45 opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <h1 className="text-5xl font-bold text-white text-center mb-4">Speed Test</h1>
          <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
        </div>
      </div>

      {/* Speed Test Component */}
      <SpeedTest />

      {/* Newsletter Section */}
      <div className="py-20">
        <Newsletter />
      </div>
    </div>
  );
}