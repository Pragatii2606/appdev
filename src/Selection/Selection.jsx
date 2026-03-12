import "./Selection.css";

 function Selection() {
  const features = [
    {
      title: "Free Cost-Analysis",
      desc: "Get free cost-analysis & excellent pieces of advice on your mobile app development idea from industry experts",
    },
    {
      title: "Super-skilled Developers",
      desc: "Experienced developers who are technically competent to handle complex app development projects",
    },
    {
      title: "Beautiful App Designs",
      desc: "Our dedicated in-house design studio helps in creating stunning designs for your business apps",
    },
    {
      title: "Superior Quality",
      desc: "Our extensive QA & testing process ensures the apps are of supreme quality and bug-free",
    },
    {
      title: "Easy-to-Use Apps",
      desc: "We create apps that are exceptionally robust and easy-to-use",
    },
    {
      title: "Fully Customized Apps",
      desc: "We design apps according to your business requirements",
    },
    {
      title: "Hand-Holding Approach",
      desc: "Industry experts guide you throughout the process",
    },
    {
      title: "24×7 Customer Support",
      desc: "Our support team ensures assistance whenever necessary",
    },
  ];

  return (
    <section className="whyChooseSection">
      <div className="container">
        
        <div className="header">
          <h2>Why Choose Us?</h2>
          <p1>
            Experience A World-Class Mobile App Development Service from 
           <br /> 
          </p1>
          <p2>Best Mobile App Development Company</p2>
        </div>

        <div className="grid">
          {features.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="ctta">
        <p>
          Get A Fully Customized Mobile App Development Services To Suit Your Business Needs
        </p>
        <button>Book A Free Demo</button>
      </div>

    </section>
  );
}

export default Selection;
