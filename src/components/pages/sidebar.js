import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';
import '../styles/Navbar.css';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus) {
      setLoggedIn(true);
    }
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const handleLogout = () => {
    setLoading(true); 
    setTimeout(() => {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      localStorage.removeItem("userType");
      setLoggedIn(false);
      setLoading(false); 
      window.location.href = "/";
    }, 500); 
  };

  return (
    <div className="sidebar">
      <div className={toggle ? `sidebar-links-mobile` : `sidebar-links`}>
        <ul>
          {toggle && <i className="ri-close-line" onClick={handleToggle}></i>}
          <li>
            <NavLink exact to="/adminhome" activeClassName="active">
              <i className="ri-home-smile-line"></i>  Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/patients" activeClassName="active">
              <i className="ri-group-line"></i> Patients
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" activeClassName="active">
              <i className="ri-briefcase-4-line"></i> Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/appointments" activeClassName="active">
              <i className="ri-calendar-line"></i> Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="/Department" activeClassName="active">
              <i className="ri-group-fill"></i> Departments
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
      {toggle || <i className="ri-menu-line" onClick={handleToggle}></i>}
      {loading && (
        <div className="loading-screen">Logging out...</div> // Conditionally render loading screen
      )}
    </div>
  );
};

export default Sidebar;
