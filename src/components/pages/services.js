import React from 'react';

import '../styles/services.css';






const Services = () => {
  return (
    <div className="services">
      <h2>Services We Offer</h2>
      <div className="service-row">
        <div className="service-column">
        <i class="ri-heart-pulse-fill serviceIcon"></i>
          <h3>Emergency Care
          </h3>
          <p>Our emergency department is equipped to handle any medical emergency, 24/7.</p>
        </div>
        <div className="service-column">
        <i class="ri-stethoscope-line serviceIcon"></i>
          <h3>Outpatient Clinics</h3>
          <p>We offer a wide range of outpatient services, from primary care to specialty clinics.</p>
        </div>
        <div className="service-column">
        <i class="ri-microscope-line serviceIcon"></i>
          <h3>Diagnostic Services </h3>
          <p>Our state-of-the-art diagnostic facilities provide accurate and timely results.</p>
        </div>
        <div className="service-column">
        <i class="ri-hotel-bed-fill serviceIcon"></i>
          <h3>Inpatient Care</h3>
          <p>Our inpatient care team provides comprehensive and personalized care for our patients.</p>
        </div>

        

        <div className="service-column">
        <i class="ri-virus-line serviceIcon"></i>
          <h3>Rehabilitation</h3>
          <p>Our rehabilitation services help patients regain their independence and improve their quality of life.</p>
        </div>

        <div className="service-column">
        <i class="ri-capsule-fill" serviceIcon></i>
          <h3>Pharmacy</h3>
          <p>Our on-site pharmacy provides convenient access to medications and personalized care.</p>
        </div>

      </div>
    </div>
  );
}
export default Services;
