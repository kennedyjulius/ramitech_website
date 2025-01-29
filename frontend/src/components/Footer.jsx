export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h4 className="text-xl font-bold mb-2">MED HELP? CALL US 24/7</h4>
            <p className="text-green-400 text-lg">+202.49878976</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-bold mb-4">Services</h5>
              {['Mobile One', 'Broadband', 'Home Security'].map((service) => (
                <p key={service} className="text-gray-400 mb-2">{service}</p>
              ))}
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Useful links</h5>
              {['Network', 'Safety', 'Return of Equipment'].map((link) => (
                <p key={link} className="text-gray-400 mb-2">{link}</p>
              ))}
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Get in touch</h5>
              <p className="text-gray-400">400x 4800 x 99%</p>
              <p className="text-gray-400 mt-2">Series Test</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }