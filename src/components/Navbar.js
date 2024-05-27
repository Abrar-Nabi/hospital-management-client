import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
// import logo from "./assets/images/logo.png";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus) {
      setLoggedIn(true);
      const loggedInUsername = localStorage.getItem("username");
      setUsername(loggedInUsername || "Na");
    }
  }, []);

  const handleLogout = () => {
    setLoading(true); // Set loading to true when logout button is clicked
    setTimeout(() => {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      localStorage.removeItem("userType");
      setLoggedIn(false);
      setLoading(false); // Set loading to false after the delay
      window.location.href = "/";
    }, 500); // 3 seconds delay
  };

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          {/* <img src={logo} alt="Logo" /> */}
          <div className="logo"></div>
        </Link>

        <div className={toggle ? `nav-links-mobile` : `nav-links`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Departments">Departments</Link>
            </li>
            <li>
              <Link to="/Doctor">Doctors</Link>
            </li>

            {loggedIn ? (
              <>
                <li>
                  <Link to="/ShowAppointment">My appointments</Link>
                </li>
                <li>
                  <span>Welcome, {username}!</span>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
                {toggle && <i className="ri-close-line" onClick={handleToggle}></i>}
              </>
            ) : (
              <>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <Link to="/Signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {toggle || <i className="ri-menu-line" onClick={handleToggle}></i>}
      </div>
      {loading && (
        <div className="loading-screen">Logging out...</div> // Conditionally render loading screen
      )}
    </nav>
  );
};

export default Navbar;
