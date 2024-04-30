import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './usercard';
 // Assuming you have a UserCard component for displaying user details
import Navbar from '../Navbar';
import Footer from '../footer'; // Assuming it's 'Footer', not 'footer'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        refreshUsers();
    }, []);

    const refreshUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/showallusers');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='users'>
                <h3>Users ({users.length})</h3>
                <div className="user-list">
                    {users.map(user => (
                        <UserCard key={user._id} user={user} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Users;
