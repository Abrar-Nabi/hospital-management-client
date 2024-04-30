import React from 'react';

import '../styles/services.css';






const Services = () => {
return (
<div className="services">
<h2>Services We Offer</h2>
<div className="service-row">
  <div className="service-column">
  <i class="ri-24-hours-fill"></i>
    <h3>24/7 Emergency</h3>
    <p>Our hospital offers round-the-clock emergency services to ensure you get the care you need at any time.</p>
  </div>
  <div className="service-column">
  <i class="ri-heart-pulse-fill"></i>
    <h3>Expert Consultation</h3>
    <p>Consult with our team of experienced doctors and specialists for personalized medical advice and treatment plans.</p>
  </div>
  <div className="service-column">
  <i class="ri-empathize-fill"></i>
    <h3>Intensive Care</h3>
    <p>We provide advanced intensive care services for patients requiring specialized medical attention and monitoring.</p>
  </div>
  <div className="service-column">
  <i class="ri-team-fill"></i>
    <h3>Family Planning</h3>
    <p>Our family planning services help you make informed decisions about contraception and reproductive health.</p>
  </div>
</div>
</div>
  );
}
export default Services;
