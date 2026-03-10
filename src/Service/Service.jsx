import React from 'react';
import './service.css';   



function Service() {
  return (
    <section className="services-section">
      <div className="services-container">

        <p className="services-subtitle">Vast Mobile App Development</p>
        <h2 className="services-title">Services We Offer</h2>

        <div className="services-grid">

          <div className="service-card">
            <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773146576/Frame_1000010895_gdly2f.png" alt="iOS" />
            
          </div>

          <div className="service-card">
            <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773146576/Frame_1000010896_c5d5sm.png" alt="Android" />
            
          </div>

          <div className="service-card">
            <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773146576/Frame_1000010897_chlvcn.png" alt="Web" />
            
          </div>

          <div className="service-card">
            <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773146576/Frame_1000010898_pltjpi.png" alt="Hybrid" />
            
          </div>

        </div>

      </div>
    </section>
  );
}

export default Service;