import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">🍔 FoodShood</h2>
          <p>Your favorite food, delivered fast at your doorstep.</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h4>Follow us</h4>
          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} FoodShood. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
