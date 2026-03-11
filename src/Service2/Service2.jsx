import React from "react";
import "./Service2.css";

const services = [ 
"https://res.cloudinary.com/daup99ghe/image/upload/v1773215773/Group_58_ne9uwj.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773215773/Group_59_hpw731.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773215774/Group_60_dr6a9c.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773215961/Group_61_f5nyvi.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773215960/Group_62_agkolm.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773215961/Group_63_wyorwg.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773216314/Group_64_e8h6yk.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773216314/Group_65_sgxx95.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773216318/Group_67_wbqx2m.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773216315/Group_68_poyns5.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773216316/Group_69_sat3pr.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773216314/Group_70_lhvz8y.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773216331/Group_71_ra4gl7.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773216331/Group_72_figu0w.png",
"https://res.cloudinary.com/daup99ghe/image/upload/v1773216332/Group_73_thcznz.png"



    
 ];
  

export default function ServicesSection() {
  return (
    <section className="services-section">

   <div className="service-heading">
    <h2>
      Fully Customized <span>Mobile App Development</span> Services
      <br />
      For Your Business
    </h2>
  </div>

      <div className="services-grid">
  {services.map((img, index) => (
    <div key={index}  className={`service-card ${
        [2,3,8, 9, 14].includes(index) ? "span-2" : ""
      }`}>
      <img src={img} alt="" />
    </div>
  ))}
</div>

      

      <div className="bottom-cta">
        <h3>Didn't find your industry solution?</h3>

        <p>
          Discuss your mobile app development requirements with our team
          & get the finest fit for your business
        </p>

        <button>Get Started</button>
      </div>

    </section>
  );
}