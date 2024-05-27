import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
const AddDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [addform, setAddform] = useState(false);
    const [newDoctor, setNewDoctor] = useState({
        name: '',
        specialty: '',
        phone: '',
        email: '',

    });
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [refreshFlag, setRefreshFlag] = useState(false); // Add refresh flag

    useEffect(() => {
        axios.get('http://localhost:5000/doctors')
            .then(response => setDoctors(response.data))
            .catch(error => console.error('Error fetching doctors:', error));
    }, [refreshFlag]); // Refresh when refreshFlag changes

    const handleAddDoctor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/doctors/add', newDoctor)
            .then(response => {
                console.log('Doctor added:', response.data);
                setRefreshFlag(!refreshFlag); // Toggle refresh flag
                setNewDoctor({
                    name: '', specialty: '', phone: '',
                    email: '',
                });
                setAddform(false)
                toast.success("Doctor added successfully!");
            })
            .catch(error => console.error('Error adding doctor:', error));
    };

    const cancelbtn = () => {
        setIsEditMode(false);
        setAddform(false)
    };
    const addbtn = () => {
        setAddform(true)
    }
    return (
        <div className='doctorsMain'>
            <ToastContainer />


            {addform ? (
                <div className='doctor-form-sections'>
                    <form onSubmit={handleAddDoctor}>
                        <h4>Add New Doctor</h4>
                        <label>Name: </label>
                        <input type="text" value={isEditMode ? selectedDoctor.name : newDoctor.name} onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, name: e.target.value }) : setNewDoctor({ ...newDoctor, name: e.target.value })} />
                        <label>Specialty: </label>
                        <input type="text" value={isEditMode ? selectedDoctor.specialty : newDoctor.specialty} onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, specialty: e.target.value }) : setNewDoctor({ ...newDoctor, specialty: e.target.value })} />
                        <label>Phone: </label>
                        <input type="text" value={isEditMode ? selectedDoctor.phone : newDoctor.phone} onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, phone: e.target.value }) : setNewDoctor({ ...newDoctor, phone: e.target.value })} />
                        <label>Email: </label>
                        <input type="text" value={isEditMode ? selectedDoctor.email : newDoctor.email} onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, email: e.target.value }) : setNewDoctor({ ...newDoctor, email: e.target.value })} />
                        <div className='editformBtns'>
                            <button onClick={cancelbtn}>{'Cancel'}</button>
                            <button type="submit">{isEditMode ? 'Update Patient' : 'Add Patient'}</button>
                        </div>
                    </form>
                </div>) : (null)}
            <button className="quick-link-button"  onClick={addbtn} type="submit">Add Doctor</button>
        </div>



    );
};

export default AddDoctors;