import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Appointment.css';
import { ToastContainer, toast } from 'react-toastify';


const Addappointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        patientName: '',
        doctorName: '',
        date: '',
        phone: '',
        email: '',
        dob: '',
        diseaseType: '',
        bookingStatus: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [addform, setAddform] = useState(false);

    useEffect(() => {
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
            const response = await axios.post('http://localhost:5000/appointments/add', newAppointment);
            setAppointments([...appointments, response.data]);
            toast.success("Doctor added successfully!");
            setAddform(false)
            setNewAppointment({ patientName: '', doctorName: '', date: '', phone: '', email: '', dob: '', diseaseType: '', bookingStatus: '' }); // Reset bookingStatus to default
            setIsEditMode(false);
            refreshAppointments(); // Refresh appointments list after form submission
        } catch (error) {
            console.error('Error:', error);
        }
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
            <ToastContainer />
            {addform ? (

                <div className='add-form'>
                    <form className="appointment-form" onSubmit={handleFormSubmit}>
                        <h4>{'Add New Appointment'}</h4>
                        <input type="hidden" name="_id" value={newAppointment._id || ''} />
                        <input type="text" name="patientName" placeholder="Patient Name" value={newAppointment.patientName} onChange={handleInputChange} required />
                        <input type="text" name="doctorName" placeholder="Doctor Name" value={newAppointment.doctorName} onChange={handleInputChange} required />
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
                null

            )}
            <button className="quick-link-button" onClick={addbtn} type="submit">Add Appointment</button>
        </div>
    );
};

export default Addappointments;
