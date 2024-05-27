import React, { useState, useEffect } from 'react';
import '../styles/serviceHourForm.css';



const ServiceForm = () => {


  return (
    <div className="service-hours-form">
      <div className="service-hours">
        <h2>Hospital Hours</h2>
        <p> Check our operating hours for Monday through Sunday.

          Day	Hours</p>
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

      {/* <div className="book-appointment">
        <h2>{isEditMode ? 'Edit Appointment' : 'Book an Appointment'}</h2>
        <form onSubmit={handleFormSubmit}>
          <input type="hidden" name="_id" value={newAppointment._id || ''} />
          <input type="text" name="patientName" placeholder="Patient Name" value={newAppointment.patientName} onChange={handleInputChange} required />
          <input type="text" name="doctorName" placeholder="Doctor Name" value={newAppointment.doctorName} onChange={handleInputChange} required />
          <label htmlFor="date">Appointment Date:</label>
          <input type="date" name="date" placeholder="Date" value={newAppointment.date} onChange={handleInputChange}  />
          <input type="tel" name="phone" placeholder="Phone" value={newAppointment.phone} onChange={handleInputChange} required />
          <input  type="email" name="email" placeholder="Email" value={newAppointment.email} onChange={handleInputChange} disabled={true} required/>
          <label htmlFor="date">Date of Birth:</label>
          <input type="date" name="dob" placeholder="Date of Birth" value={newAppointment.dob} onChange={handleInputChange} required />
          <input type="text" name="diseaseType" placeholder="Disease Type" value={newAppointment.diseaseType} onChange={handleInputChange} required />
          <input type="text" name="bookingStatus" placeholder="bookingStatus" value={newAppointment.bookingStatus} onChange={handleInputChange}  style={{ display: 'none' } } />
       {loggedIn ?    <button type="submit">{isEditMode ? 'Update Appointment' : 'Confirm Booking'}</button> :  <Link to="/Login">Login</Link>}
        </form>

      </div>
       */}
    </div>
  );
};

export default ServiceForm;
