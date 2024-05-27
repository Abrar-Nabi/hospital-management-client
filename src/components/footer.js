import React from "react";
import "./styles/Footer.css"; // Import your CSS file for footer styles
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="adress-contact-container">
          <div className="footer-hospitalAdress">
            <h4>Acme Hospital</h4>
            <p>123 Main st</p>
            <p>Anytwon,USA 1234</p>
          </div>
          <div className="footer-section" id="footer-contact">
            <h4>Contact Information</h4>
            <p>123 Hospital Street, City</p>
            <p>Phone: +1 221 509 811</p>
            <p>Email: info@hospital.com</p>
          </div>
        </div>

        <div className="aboutUs-socailMedia-container">
          <div className="footer-section" id="footer-sec-about-us">
            <h4>Follow us</h4>
            <ul className="footer-ul">
              <li>
                <i class="ri-instagram-line" id="socailMedialIcons"></i>
              </li>
              <li>
                <i class="ri-facebook-circle-fill" id="socailMedialIcons"></i>
              </li>
              <li>
                <i class="ri-twitter-x-line" id="socailMedialIcons"></i>
              </li>
            </ul>
          </div>

          <div className="footer-section" id="footer-sec-links">
            <h4>Quick Links</h4>

            <ul>
              <li>
                {/* <a href="/">Home</a> */}
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                {/* <a href="/departments">Departments</a> */}
                <Link to="/DepartmentsPage">Departments</Link>
              </li>
              <li>
                {/* <a href="/doctors">Doctors</a> */}
                <Link to="/showdoctor">Doctors</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Hospital Management System. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
