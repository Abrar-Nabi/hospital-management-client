import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import ShowAppointmentCard from '../cards/ShowAppointmentCard'; // Import the appointment card component
import '../styles/Appointment.css'; // Import the CSS file for appointments component

const Appointments = () => {
  // const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const userEmail = localStorage.getItem('userEmail'); // Get the logged-in user's email
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all appointments from the API
    axios.get('http://localhost:5000/appointments')
      .then(response => {
        const allAppointments = response.data;
        // setAppointments(allAppointments);
        
        // Filter appointments by the logged-in user's email
        const userAppointments = allAppointments.filter(appointment => appointment.email === userEmail);
        
        // Sort filtered appointments by email
        const sortedAppointments = userAppointments.sort((a, b) => (a.email > b.email) ? 1 : -1);

        setFilteredAppointments(sortedAppointments);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching appointments:', error.message);
        setError('Error fetching appointments. Please try again later.');
        setLoading(false); // Set loading to false on error
      });
  }, [userEmail]); // Include userEmail in the dependencies array to fetch appointments when it changes

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an error
  }

  return (
    <div>

<Navbar />
    <div className="appointments-container">
      <h1>Appointments</h1>
      {filteredAppointments.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        <div className="appointment-cards">
          {filteredAppointments.map(appointment => (
            <ShowAppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Appointments;
