import React from 'react';
import '../styles/AppointmentCard.css'; 
const AppointmentCard = ({ appointment, onEdit, onDelete }) => {
  return (
    <div className="appointment-card">
      <p>
        <span>Patient:</span> {appointment.patientName}
      </p>
      <p>
        <span>Doctor:</span> {appointment.doctorName}
      </p>
      <p>
        <span>Date:</span> {new Date(appointment.date).toLocaleDateString()}
      </p>
      <p>
        <span>Phone:</span> {appointment.phone}
      </p>
      <p>
        <span>Email:</span> {appointment.email}
      </p>
      <p>
        <span>Date of Birth:</span> {new Date(appointment.dob).toLocaleDateString()}
      </p>
      <p>
        <span>Disease Type:</span> {appointment.diseaseType}
      </p>
      <p>
        <span>Booking Status:</span> {appointment.bookingStatus}
      </p>
      <div className='btn-container'>
        <button onClick={() => onEdit(appointment)}>Edit</button>
        <button onClick={() => onDelete(appointment._id)}>Delete</button>
      </div>
    </div>
  );
};

export default AppointmentCard;
