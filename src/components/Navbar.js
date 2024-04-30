import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggle, setToggle] = useState(false);
  // const [email, setEmail] = useState('');
  const [Username, setUsername] = useState("");

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus) {
      setLoggedIn(true);
      // const loggedInEmail = localStorage.getItem('userEmail');
      // setEmail(loggedInEmail || ''); // Set the logged-in email or an empty string if not found
      const loggedInUsername = localStorage.getItem("username");
      setUsername(loggedInUsername || "Na"); // Set the logged-in email or an empty string if not found
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    setLoggedIn(false);
    // setEmail('');
    window.location.href = "/";
  };

  function handleToggle() {
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
          <i class="ri-hospital-fill"></i>

          </Link>
        </div>
        <div className={toggle ? `nav-links-mobile` : `nav-links`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/DepartmentsPage">Departments</Link>
            </li>
            <li>
              <Link to="/ShowDoctor">Doctors</Link>
            </li>

            {loggedIn ? (
              <>
                <li>
                  <Link to="/ShowAppointment">My appointments</Link>
                </li>
                <li>
                  <span>Welcome, {Username}!</span>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
                {toggle && <i class="ri-close-line" onClick={handleToggle}></i>}
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
        {toggle || <i class="ri-menu-line" onClick={handleToggle}></i>}
      </div>
    </nav>
  );
};

export default Navbar;
