import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import ShowAppointmentCard from '../cards/userAppointmentCard'; // Import the appointment card component
import '../styles/Appointment.css'; // Import the CSS file for appointments component
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const userEmail = localStorage.getItem('userEmail'); // Get the logged-in user's email
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus) {
      setLoggedIn(true);
    }
    // Fetch all appointments from the API
    fetchAppointments();
  }, [userEmail]); // Include userEmail in the dependencies array to fetch appointments when it changes

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/appointments');
      const allAppointments = response.data;
      setAppointments(allAppointments);
      filterAndSortAppointments(allAppointments);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching appointments:', error.message);
      setError('Error fetching appointments. Please try again later.');
      setLoading(false); // Set loading to false on error
    }
  };

  const filterAndSortAppointments = (appointments) => {
    // Filter appointments by the logged-in user's email
    const userAppointments = appointments.filter(appointment => appointment.email === userEmail);

    // Sort filtered appointments by email
    const sortedAppointments = userAppointments.sort((a, b) => (a.email > b.email) ? 1 : -1);

    setFilteredAppointments(sortedAppointments);
  };

  const refreshAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/appointments');
      setAppointments(response.data);
      filterAndSortAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleDeleteAppointment = (id) => {
    axios.delete(`http://localhost:5000/appointments/delete/${id}`)
      .then(response => {
        console.log(response.data);
        setAppointments(appointments.filter(appointment => appointment._id !== id));
        refreshAppointments(); 
        toast.error("Appointment deleted successfully", { autoClose: 1000 });
      })
      .catch(error => console.error('Error deleting appointment:', error));
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an error
  }

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="appointments-container">
        <div className='bookappointmentheader'>
          <h1>Appointments</h1>
          <Link to={loggedIn ? "/Bookyourappointment" : "/login"}
            className="appointment-button-mainpage"
          >
            Book your Appointment
          </Link>
        </div>
        {filteredAppointments.length === 0 ? (
          <h6>No appointments found</h6>
        ) : (
          <div className="appointment-cards">
            {filteredAppointments.map(appointment => (
              <ShowAppointmentCard key={appointment.id} appointment={appointment} onDelete={handleDeleteAppointment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
