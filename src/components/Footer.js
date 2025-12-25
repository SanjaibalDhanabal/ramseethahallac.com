import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col logo-col">
          <div className="footer-logo">
            <img src="/assets/logo/ramseethahalllogo.png" alt="Ramseetha Hall Logo" className="footer-logo-img" />
          </div>
          <p className="footer-desc">Where every celebration finds its perfect place</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <img src="/assets/icons/instagram.png" alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/assets/icons/facebook.png" alt="Facebook" className="footer-social-icon" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/assets/icons/youtube.png" alt="YouTube" className="footer-social-icon" />
            </a>
            <a href="#" aria-label="X">
              <img src="/assets/icons/twitter.png" alt="X" className="footer-social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-col links-col footer-col-center">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
            <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
            <li><Link to="/facilities" onClick={() => window.scrollTo(0, 0)}>Facilities</Link></li>
            <li><Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>Gallery</Link></li>
            <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col contact-col">
          <h4>Contact Info</h4>
          <ul>
            <li>
              <span className="footer-icon">
                <img src="/assets/icons/map.png" alt="Location" className="footer-contact-icon" />
              </span>
              3, SBI Colony 2nd St, Ranga Colony,<br />
              Sembakkam, Rajakilpakkam, Chennai.
            </li>
            <li>
              <span className="footer-icon">
                <img src="/assets/icons/cell.png" alt="Phone" className="footer-contact-icon" />
              </span>
              +91 8870888779
            </li>
            <li>
              <span className="footer-icon">
                <img src="/assets/icons/mail.png" alt="Email" className="footer-contact-icon" />
              </span>
              ramseethahall@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © 2025 Ram Seetha Hall. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;