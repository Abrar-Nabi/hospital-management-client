import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { token, username, userType } = response.data; // Include userType in the response
      // console.log( response.data);
      window.localStorage.setItem('loggedIn', true);
      window.localStorage.setItem('userEmail', email);
      window.localStorage.setItem('username', username);
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('userType', userType);

      if (userType === 'Admin') {
        window.location.href = './AdminHome';
        // alert("admin")
      } else if (userType === 'User') {
        window.location.href = './MainPage';
      } else {
        setError('Unknown user type'); // Set an error message for unknown user types
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setError('Login failed'); // Set an error message for login failure
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      {error && <div>{error}</div>} {/* Display error message if there's an error */}
    </div>
  );
};

export default Login;
