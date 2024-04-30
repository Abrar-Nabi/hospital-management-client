import React from 'react';
import '../styles/AppointmentCard.css';

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="appointment-card">
      <div className="card-header">
        <h3>Appointment Details</h3>
      </div>
      <div className="card-body">
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
        {/* Add more details here as needed */}
      </div>
    </div>
  );
};

export default AppointmentCard;
