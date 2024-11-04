import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img src="path/to/logo.png" alt="Logo" />
      </div>
      <div className="footer-content">
        <p>&copy; 2024 The Weaver's Gift. All rights reserved.</p>
        <p>Designed with love and dedication.</p>
      </div>
      <div className="footer-social">
        <a href="#" className="social-icon">Facebook</a>
        <a href="#" className="social-icon">Twitter</a>
        <a href="#" className="social-icon">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer;
