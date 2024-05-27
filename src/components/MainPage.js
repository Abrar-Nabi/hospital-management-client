import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Services from './pages/services';
import './styles/MainPage.css';
import Footer from './footer';
import StatsCard from './pages/statsSection'
import ServiceForm from './pages/serviceHourForm'
import DoctorsSection from './pages/doctorSection';

const MainPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus) {
      setLoggedIn(true);
    }
    },
 []);



  return (
    <div className="main-page">
      <Navbar />
      <div className="main-content">
        <div className="main-text">
          <h1>We Care for Your Health Every Moment</h1>
          <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $2 each.</p>
          <Link
            to={loggedIn ? "/Bookyourappointment" : "/login"}
            className="appointment-button-mainpage"
          >
           Book you Appointment
          </Link>

        </div>
      </div>
      <StatsCard />
      <Services />
      <DoctorsSection />
      <ServiceForm />

      <Footer />
    </div>
  );
};

export default MainPage;
