import "./footer.css";

 function Footer() {
  const logoUrl = "https://res.cloudinary.com/daup99ghe/image/upload/v1773281305/Kds_logo_white_1_dljerq.png";

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <img src={logoUrl} alt="Company Logo" />

          
        </div>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Services</a>
        </div>

      </div>
    </footer>
  );
}
export default Footer;