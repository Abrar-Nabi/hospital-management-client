import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Signup.css"

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType] = useState('User');
    const [error, setError] = useState(''); // State for error message

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setError('Please enter all the details.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/signup', { username, email, password, userType });
            console.log(response.data);
            window.location.href = "./Login";
        } catch (error) {
            console.error('Error adding user:', error);
            if (error.response && error.response.data && error.response.data.error && error.response.data.error.includes('already exists')) {
                setError('User already exists. Please try a different email.');
            } else {
                setError('Signup failed. Please try again.');
            }
        }
    };
    
    

    return (
        <div className="signup-container">
            <div className="Sign-card">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                    <button type="submit">Signup</button>
                </form>
                {error && <div className="error-message">{error}</div>} {/* Render error message if there's an error */}
                <div className="login-link">
                    already a user? <a href="/login">Login up</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;
