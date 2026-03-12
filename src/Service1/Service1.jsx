import React from "react";
import './Service1.css';  

const features = [
  {
    
    img: "https://res.cloudinary.com/daup99ghe/image/upload/v1773209012/Frame_1000010904_xyw5rg.png"
  },
  {
    
    img: "https://res.cloudinary.com/daup99ghe/image/upload/v1773209012/Frame_1000010901_z54gsp.png"
  },
  {
    
    img: "https://res.cloudinary.com/daup99ghe/image/upload/v1773209012/Frame_1000010902_krz2mv.png"
  }
];

function FeaturesCTA() {
  return (
    <div className="featurees-wrapper">

      
      <div className="featuree-grid">
        {features.map((item, index) => (
          <div className="featuree-card" key={index}>
            <img src={item.img} alt={item.title} />

            
          </div>
        ))}
      </div>

      

      <div className="ctaa-section">

        <p>
          Take Your Business to Next Level With Our Mobile App Development Service
        </p>

        <button className="ctaa-btn">
          Get Started
        </button>

      </div>

    </div>
  );
}

export default FeaturesCTA;