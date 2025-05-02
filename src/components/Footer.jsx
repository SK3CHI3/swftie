import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h3>JOIN OUR NEWSLETTER</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>
        
        <div className="footer-links">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
        
        <div className="social-icons">
          <a href="#facebook" className="social-icon facebook">f</a>
          <a href="#twitter" className="social-icon twitter">t</a>
          <a href="#linkedin" className="social-icon linkedin">in</a>
          <a href="#instagram" className="social-icon instagram">ig</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
