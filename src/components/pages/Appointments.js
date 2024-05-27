import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentCard from '../cards/AppointmentCard';

import '../styles/Appointment.css';
import Sidebar from '../pages/sidebar';
import { ToastContainer, toast } from 'react-toastify';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    phone: '',
    email: '',
    dob: '',
    diseaseType: '',
    bookingStatus: 'pending',
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [addform, setAddform] = useState(false);
  const [doctors, setDoctors] = useState([]); 
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
          const response = await axios.get('http://localhost:5000/doctors');
          setDoctors(response.data);
      } catch (error) {
          console.error('Error fetching doctors:', error);
      }
      
  };
  const fetchDepartments = async () => {
    try {
        const response = await axios.get('http://localhost:5000/departments');
        setDepartments(response.data);
    } catch (error) {
        console.error('Error fetching departments:', error);
    }
};

fetchDepartments();
  fetchDoctors();
    refreshAppointments();
  }, []);

  const refreshAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: name === 'dob' ? value.slice(0, 10) : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await axios.post(`http://localhost:5000/appointments/update/${newAppointment._id}`, newAppointment);
        toast.info("Appointment updated Successfully",{autoClose: 2000,})
      } else {
        const response = await axios.post('http://localhost:5000/appointments/add', newAppointment);
        setAppointments([...appointments, response.data]);
        toast.success("Appointment added Successfully",{autoClose: 2000,})
      }
      setNewAppointment({ patientName: '', doctorName: '', date: '', phone: '', email: '', dob: '', diseaseType: '', bookingStatus: '' }); // Reset bookingStatus to default
      setIsEditMode(false);
      refreshAppointments(); 
      setAddform(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditAppointment = (appointment) => {
    setIsEditMode(true);
    setNewAppointment({
      ...appointment,
      date: appointment.date ? appointment.date.slice(0, 10) : '',
      dob: appointment.dob ? appointment.dob.slice(0, 10) : '',
    });
  };

  const handleDeleteAppointment = (id) => {
    axios.delete(`http://localhost:5000/appointments/delete/${id}`)
      .then(response => {
        console.log(response.data);
        setAppointments(appointments.filter(appointment => appointment._id !== id));
        refreshAppointments(); // Refresh appointments list after deletion
        toast.error("Appointment deleted Successfully",{autoClose: 2000,})
      })
      .catch(error => console.error('Error deleting appointment:', error));
  };

  const cancelbtn = () => {
    setIsEditMode(false);
    setAddform(false)
  };

  const addbtn = () => {
    setAddform(true)
  }
  return (
    <div className='patient-main'>
    <ToastContainer/>
      <Sidebar />



      {isEditMode || addform ? (
       
          <div className='add-form'>
            <form className="appointment-form" onSubmit={handleFormSubmit}>
              <h4>{isEditMode ? 'Edit Appointment' : 'Add New Appointment'}</h4>
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
              <label>Appointment Date</label>
              <input type="date" name="date" placeholder="Date" value={newAppointment.date} onChange={handleInputChange} required />
              <input type="tel" name="phone" placeholder="Phone" value={newAppointment.phone} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Email" value={newAppointment.email} onChange={handleInputChange} required />
              <label>Date of Birth</label>
              <input type="date" name="dob" placeholder="Date of Birth" value={newAppointment.dob} onChange={handleInputChange} required />
              <input type="text" name="diseaseType" placeholder="Disease Type" value={newAppointment.diseaseType} onChange={handleInputChange} required />
              <select name="bookingStatus" onChange={handleInputChange}>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Confirmed">Confirmed</option>
              </select>
              <div className='editformBtns'>
                <button onClick={cancelbtn}>{'Cancel'}</button>
                <button type="submit">{isEditMode ? 'Update Appointment' : 'Add Appointment'}</button>
              </div>
            </form>
          </div>
      
      ) : (
        <div className=''>
          <div className='appointments'>

            <div className='adminHeader'>

              <h3>Appointments </h3>
              <div className='btncontainer'>
                <button onClick={addbtn} type="submit">Add Appointment</button>
              </div>
            </div>
            <div className="appointment-list">
              {appointments.map(appointment => (
                <AppointmentCard key={appointment.id} appointment={appointment} onEdit={handleEditAppointment} onDelete={handleDeleteAppointment} />
              ))}
            </div>
          </div>
        </div>

      )}

    </div>
  );
};

export default Appointments;
