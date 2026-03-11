import React from 'react';
import './Service.css';   



function Service() {
  return (
    <section className="servicees-section">
      <div className="servicees-container">

        <p className="servicees-subtitle">Vast Mobile App Development</p>
        <h2 className="servicees-title">Services We Offer</h2>

        <div className="servicees-grid">

          <div className="servicee-card">
            <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773146576/Frame_1000010895_gdly2f.png" alt="iOS" />
            
          </div>

          <div className="servicee-card">
            <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773146576/Frame_1000010896_c5d5sm.png" alt="Android" />
            
          </div>

          <div className="servicee-card">
            <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773146576/Frame_1000010897_chlvcn.png" alt="Web" />
            
          </div>

          <div className="servicee-card">
            <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773146576/Frame_1000010898_pltjpi.png" alt="Hybrid" />
            
          </div>

        </div>

      </div>
    </section>
  );
}

export default Service;