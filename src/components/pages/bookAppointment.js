import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/serviceHourForm.css';
import Navbar from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
const ServiceForm = () => {
    const Email = localStorage.getItem('userEmail');
    const [doctors, setDoctors] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [newAppointment, setNewAppointment] = useState({
        patientName: '',
        doctorName: '',
        date: '',
        phone: '',
        email: Email,
        dob: '',
        diseaseType: '',
        bookingStatus: 'Pending'
    });
    const [appointments, setAppointments] = useState([]);


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

        const admin = localStorage.getItem('userType');
        setIsAdmin(admin === 'Admin');
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment((prevAppointment) => ({
            ...prevAppointment,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {

            {
                const response = await axios.post('http://localhost:5000/appointments/add', newAppointment);
                setAppointments([...appointments, response.data]);
            }
            setNewAppointment({ ...newAppointment, patientName: '', doctorName: '', date: '', phone: '', dob: '', diseaseType: '' });
            toast.success("Appointment Booked successfully!");
        } catch (error) {
            console.error('Error:', error);
            toast.error("Booking failed!");
        }
    };

  
    return (
        <>
            <ToastContainer />
            <Navbar />
            <div className="service-hours-form">
                <div className="book-appointment">
                    <h2>Book an Appointment</h2>
                   
                    <form onSubmit={handleFormSubmit}>
                        <input type="hidden" name="_id" value={newAppointment._id || ''} />
                        <input type="text" name="patientName" placeholder="Patient Name" value={newAppointment.patientName} onChange={handleInputChange} required />
                        <select name="doctorName" value={newAppointment.doctorName} onChange={handleInputChange} className="doctor-dropdown" required>
                            <option value="">Select Doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor._id} value={doctor.name}>
                                    {doctor.name} - {doctor.specialty}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="date">Appointment Date:</label>
                        <input type="date" name="date" placeholder="Date" value={newAppointment.date} onChange={handleInputChange} required />
                        <input type="tel" name="phone" placeholder="Phone" value={newAppointment.phone} onChange={handleInputChange} required />
                        <input type="email" name="email" placeholder="Email" value={newAppointment.email} onChange={handleInputChange} required disabled={!isAdmin} />
                        <label htmlFor="date">Date of Birth:</label>
                        <input type="date" name="dob" placeholder="Date of Birth" value={newAppointment.dob} onChange={handleInputChange} required />
                        <input type="text" name="diseaseType" placeholder="Disease Type" value={newAppointment.diseaseType} onChange={handleInputChange} required />
                        <input type="text" name="bookingStatus" placeholder="bookingStatus" value={newAppointment.bookingStatus} onChange={handleInputChange} style={{ display: 'none' }} />
                        <button type="submit"> Confirm Booking </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ServiceForm;
