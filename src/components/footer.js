import React from 'react';
import './styles/Footer.css'; // Import your CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>123 Hospital Street, City</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: info@hospital.com</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/departments">Departments</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Hospital Management System. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
