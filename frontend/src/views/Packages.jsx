export default function Packages() {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* Pricing Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">PLANS & PRICING</h1>
            <p className="text-gray-400 text-xl">The best internet at the best prices</p>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit laiut, lacinia nec ultramuripen mattis.
            </p>
          </div>
  
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { speed: '400mbps', price: '$59.99/mo', features: ['Ultra General', 'Modere Vita*', 'XXXXXXXXX*', 'Nettum venit bound*', 'Exitif Packages'] },
              { speed: '600mbps', price: '$79.99/mo', features: ['Ultra General', 'Modere Vita*', 'XXXXXXXXX*', 'Nettum venit bound*', 'Exitif Packages'] },
              { speed: '800mbps', price: '$99.99/mo', features: ['Ultra General', 'Modere Vita*', 'XXXXXXXXX*', 'Nettum venit bound*', 'Exitif Packages'] }
            ].map((plan, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                <div className="text-4xl font-bold text-green-400 mb-4">{plan.speed}</div>
                <div className="text-3xl font-semibold mb-6">{plan.price}</div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <span className="text-green-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-green-400 text-gray-900 py-3 rounded-full font-bold hover:bg-green-300">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
  
          {/* Newsletter Section */}
          <div className="bg-gray-800/50 p-8 rounded-xl mb-16">
            <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Gattengroep voor e-mail"
                className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 flex-1"
              />
              <button className="bg-green-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-green-300">
                Subscribe
              </button>
            </div>
          </div>
  
          {/* Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 text-gray-400">
            <div>
              <h4 className="text-white font-bold mb-4">NETD HELP? CALL US 24/7</h4>
              <p className="text-green-400">+202 4987 8976</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              {['Mobile Chip', 'NetTue + Wifi', 'Mode-Net', 'Move TV', 'Saddle TV', 'Home Security'].map((service) => (
                <p key={service} className="mb-2">{service}</p>
              ))}
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Useful links</h4>
              {['Broadband', 'Speed Test', 'Additional Service', 'Delectated Link', 'PUG', 'Return of Equipment'].map((link) => (
                <p key={link} className="mb-2">{link}</p>
              ))}
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Get in touch</h4>
              <p className="mb-2">&lt;200 4800 KB/m&gt;</p>
              <p className="mb-2">Customer service list content</p>
              <p>Sales Termite Vrijeveldenaars</p>
            </div>
          </div>
  
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p>© 2019: Translate Sci Software Online</p>
          </div>
        </div>
      </div>
    );
  }