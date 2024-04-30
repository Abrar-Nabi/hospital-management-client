import React, { useState } from 'react';
import axios from 'axios';
import '../styles/serviceHourForm.css';


const ServiceForm = () => {


  const Email = localStorage.getItem('userEmail');


  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    phone: '',
    email: Email,
    dob: '',
    diseaseType: '',
    bookingStatus:'Pending'
  });
  const [appointments, setAppointments] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

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
      if (isEditMode) {
        await axios.post(`http://localhost:5000/appointments/update/${newAppointment._id}`, newAppointment);
        // Update the appointment in state if needed
      } else {
        const response = await axios.post('http://localhost:5000/appointments/add', newAppointment);
        setAppointments([...appointments, response.data]);
      }
      setNewAppointment({ patientName: '', doctorName: '', date: '', phone: '', email: '', dob: '', diseaseType: '' });
      setIsEditMode(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="service-hours-form">
      <div className="service-hours">
        <h2>Service Hours</h2>
        <ul>
          <li>
            <span>Monday:</span>
            <span>8:00 AM - 8:00 PM</span>
          </li>
          <li>
            <span>Tuesday:</span>
            <span>8:00 AM - 8:00 PM</span>
          </li>
          <li>
            <span>Wednesday:</span>
            <span>8:00 AM - 8:00 PM</span>
          </li>
          <li>
            <span>Thursday:</span>
            <span>8:00 AM - 8:00 PM</span>
          </li>
          <li>
            <span>Friday:</span>
            <span>8:00 AM - 8:00 PM</span>
          </li>
          <li>
            <span>Saturday:</span>
            <span>9:00 AM - 6:00 PM</span>
          </li>
          <li>
            <span>Sunday:</span>
            <span>Closed</span>
          </li>
        </ul>
      </div>

      <div className="book-appointment">
        <h2>{isEditMode ? 'Edit Appointment' : 'Book an Appointment'}</h2>
        <form onSubmit={handleFormSubmit}>
          <input type="hidden" name="_id" value={newAppointment._id || ''} />
          <input type="text" name="patientName" placeholder="Patient Name" value={newAppointment.patientName} onChange={handleInputChange} required />
          <input type="text" name="doctorName" placeholder="Doctor Name" value={newAppointment.doctorName} onChange={handleInputChange} required />
          <label htmlFor="date">Appointment Date:</label>
          <input type="date" name="date" placeholder="Date" value={newAppointment.date} onChange={handleInputChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={newAppointment.phone} onChange={handleInputChange} required />
          <input  type="email" name="email" placeholder="Email" value={newAppointment.email} onChange={handleInputChange} disabled={true} required/>
          <label htmlFor="date">Date of Birth:</label>
          <input type="date" name="dob" placeholder="Date of Birth" value={newAppointment.dob} onChange={handleInputChange} required />
          <input type="text" name="diseaseType" placeholder="Disease Type" value={newAppointment.diseaseType} onChange={handleInputChange} required />
          <input type="text" name="bookingStatus" placeholder="bookingStatus" value={newAppointment.bookingStatus} onChange={handleInputChange}  style={{ display: 'none' } } />
          <button type="submit">{isEditMode ? 'Update Appointment' : 'Confirm Booking'}</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
