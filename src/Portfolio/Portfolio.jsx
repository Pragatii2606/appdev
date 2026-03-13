

import "./Portfolio.css";

const Portfolio = () => {
  return (

    <section className="portfolio-wrapper">

<div className="portfolio-title">
  <h2>Portfolio</h2>
</div>
      
      <div className="portfolio-block dark">
        <div className="portfolio-image">
          <div className="circle"></div>
          <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773221764/Group_1_z1ykf0.png" alt="app" />
        </div>

        <div className="portfolio-text">
          <h3>Web Application</h3>
          <p>
           Crypto apps are mobile or web applications designed to facilitate various activities related to cryptocurrencies. These apps allow users to buy, sell, trade, and manage their digital assets securely. Features often include real-time price tracking.
          </p>
          <span>View Our Project →</span>
        </div>
      </div>


      
      <div className="portfolio-block purple reverse">
        <div className="portfolio-text">
          <h3>Dealing Application</h3>
          <p>
            A dealing application is a software platform designed to facilitate trading and transactions in financial markets. It provides users with tools for executing buy and sell orders, monitoring market conditions, analyzing financial data, and managing portfolios.
          </p>
          <span>View Our Project →</span>
        </div>

        <div className="portfolio-image">
     
          <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773221764/Group_7_yyiogq.png" alt="app" />
        </div>
      </div>


      
      <div className="award-section">

        <h2>An Award-Winning Mobile App Development Company</h2>
        <p>
          Leverage Our Industry Expertise To Create Delivery Mobile Apps For Your Business
        </p>

        <div className="award-cards">

          <div className="award-card">
                     <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773225881/Group_16_ahnnok.png" alt="app" />

          </div>

          <div className="award-card">
           <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1773225837/Group_19_1_tm8qj5.png" alt="app"/>
          </div>

          <div className="award-card">
         <img src=" https://res.cloudinary.com/daup99ghe/image/upload/v1773225837/Group_26_1_afcc4s.png" alt="app"/>
          </div>

        </div>

      </div>


     
      <div className="cta-section">

        <h3>Trust the global leaders in mobile solution for transforming your ideas</h3>

        <button>Get Started</button>

      </div>

    </section>
  );
};

export default Portfolio;