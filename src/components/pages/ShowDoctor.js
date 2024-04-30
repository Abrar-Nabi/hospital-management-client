// Doctor.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowDoctorCard from '../cards/ShowDoctorCard';
import Navbar from '../Navbar';
import Footer from '../footer';
const Doctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:5000/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="doctor-container">
                <h1>Doctors</h1>
                <div className="Showdoctor-list">
                    {doctors.map(doctor => (
                        <ShowDoctorCard key={doctor._id} doctor={doctor} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Doctor;
