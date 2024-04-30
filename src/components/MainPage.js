import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Services from './pages/services';
import './styles/MainPage.css';
import Footer from './footer';

import ServiceForm from './pages/serviceHourForm'

const MainPage = () => {
  

  // const handleEditClick = (appointment) => {
  //   setNewAppointment(appointment);
  //   setIsEditMode(true);
  // };

  return (
    <div className="main-page">
      <Navbar />
      <div className="main-content">
        <div className="main-text">
          <h1>We Care for Your Health Every Moment</h1>
          <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $2 each.</p>
          <Link to="/" className="appointment-button-mainpage">
            Book an Appointment
          </Link>
        </div>
      </div>
      <Services/>
      <ServiceForm/>
   
      <Footer /> 
    </div>
  );
};

export default MainPage;
