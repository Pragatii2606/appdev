import './Features.css';

const features = [
  { icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1773231483/Mask_group_x1h355.png", title: "Multiple Payment" },
  { icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1773231483/Mask_group_1_hpdvug.png", title: "Advanced Analytics" },
  { icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1773231483/Mask_group_2_om6an5.png", title: "Mobile Friendly" },
  { icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1773231483/Mask_group_3_w5dpvw.png ", title: "Multi-Language" },
  { icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1773231483/Mask_group_4_kmr1u5.png", title: "Discount & Promo" },
  { icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1773231483/Mask_group_5_ghvrhp.png", title: "Reviews & Rating" },
  { icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1773231497/Mask_group_6_auqdnk.png", title: "Geo Location" },
  { icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1773231497/notification_1_pkxwvc.png", title: "Push Notification" },
  { icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1773231498/chat_1_rdxvic.png", title: "Integrated Chat System" }
];

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">

        <div className="features-heading">
          <h2>A Complete Feature-Suite to Build Your Custom Mobile Apps</h2>
          <p>
            We offer end-to-end features to drive engagement & revenue for your brand
          </p>
        </div>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <img src={item.icon} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="features-cta">
        <p>Customized Mobile App Development Services For Your Business Goals</p>
        <button>Get Started</button>
      </div>
    </section>
  );
}