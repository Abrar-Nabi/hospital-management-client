import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css'; // Import your CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted
    setError(''); // Reset error state
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { token, username, userType } = response.data; // Include userType in the response
      // console.log(response.data);
      window.localStorage.setItem('loggedIn', true);
      window.localStorage.setItem('userEmail', email);
      window.localStorage.setItem('username', username);
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('userType', userType);

     
      setTimeout(() => {
        if (userType === 'Admin') {
          window.location.href = './AdminHome';
        } else if (userType === 'User') {
          window.location.href = './MainPage';
        } else {
          setError('Unknown user type');
        }
        setLoading(false); // Set loading to false after the delay
      }, 500);
    } catch (error) {
      console.error('Login error:', error.message);
      setError('Login failed! Email or Password is Wrong');
      setLoading(false); // Set loading to false immediately on error
    }
  };

  return (
    <div className="login-container">
      {loading ? (
        <div className="loading-screen">Logging in...</div> // Conditionally render loading screen
      ) : (
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </form>
          {error && <div className="error-message">{error}</div>}
          <div className="signup-link">
            New user? <a href="/signup">Sign up</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
