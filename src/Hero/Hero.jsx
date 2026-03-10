import React from 'react'
import './hero.css';


const Hero = () => {
  return ( 
    <div className="hero-section">
  <div  className="hero-container">
    

    
    <div className="hero-content">
      <h1 className="hero-title">
        Experience A World-Class <br />
        <span className="bold-text">Mobile App Development Service</span>
      </h1>
      <p className="hero-subtitle">
        Build Affordable, Easy-to-use & Feature <br />
        Rich Mobile Apps For Your Business
      </p>
      <button className="demo-btn">Book a Demo</button>
    </div>
    
<div className="hero-form">
          <h3>Let's Build Your <strong>Dream App!</strong></h3>
          <form>
            <input type="text" placeholder="First Name" required />
            <input type="email" placeholder="Email" required />
            <div className="phone-input">
              <span>🇮🇳</span>
              <input type="tel" placeholder="Phone" required />
            </div>
            <textarea placeholder="What's your Project about?"></textarea>
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
    
    <div className="hero-form-placeholder"></div>
   </div> 

  </div>

    

  )
}

export default Hero