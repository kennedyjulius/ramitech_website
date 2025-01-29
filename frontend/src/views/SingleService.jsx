import React from "react";

const SingleService = () => {
  return (
    <div className="single-service">
      <header className="hero">
        <h1>Single Service</h1>
        <nav>Home / Template / Single Services</nav>
      </header>
      
      <section className="service-details">
        <aside className="services-menu">
          <ul>
            <li>Broadband</li>
            <li>Wifi</li>
            <li>Home Security</li>
            <li>Movie TV</li>
            <li>Mobile Net</li>
            <li>Netflix + Wifi</li>
            <li>Mobile Chip</li>
          </ul>
        </aside>
        
        <div className="service-content">
          <img src="https://source.unsplash.com/random/800x400/?internet" alt="Service" />
          <p>Service details and information...</p>
        </div>
      </section>
      
      <section className="plans-pricing">
        <h2>The best internet at the best prices</h2>
        <div className="plans">
          <div className="plan">
            <h3>400mbps</h3>
            <p>$59.99 /mo</p>
          </div>
          <div className="plan">
            <h3>600mbps</h3>
            <p>$79.99 /mo</p>
          </div>
          <div className="plan">
            <h3>800mbps</h3>
            <p>$99.99 /mo</p>
          </div>
        </div>
      </section>
      
      <footer className="newsletter">
        <h3>Newsletter</h3>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </footer>
    </div>
  );
};