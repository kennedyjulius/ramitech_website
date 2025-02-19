import React from 'react';

export default function CoverageArea() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-gradient-to-br from-[#376B99] to-[#2a517a] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 w-full h-20">
            <svg viewBox="0 0 1440 120" className="w-full h-full">
              <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-20 pb-32 relative">
          <h1 className="text-5xl font-bold text-white text-center mb-4">Coverage Area</h1>
          <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
          <p className="text-white text-center mt-4 opacity-80">Find our coverage in your area</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8 border border-[#376B99]/10 hover:border-[#376B99]/30 transition-colors">
          <div className="aspect-video w-full">
            {/* Replace with your actual map embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d36.70730744863281!3d-1.3028617999999908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1643911146000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
