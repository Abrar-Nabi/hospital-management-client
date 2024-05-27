import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

const Addpatients = () => {
    const [patients, setPatients] = useState([]);
    const [newPatient, setNewPatient] = useState({ name: '', age: '', gender: '' });
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedGender, setSelectedGender] = useState('');
    const [addform, setAddform] = useState(false);
    
    useEffect(() => {
        // Fetch patients from the server on component mount
        axios.get('http://localhost:5000/patients')
            .then(response => setPatients(response.data))
            .catch(error => console.error('Error fetching patients:', error));
    }, []);
  
    const handleAddPatient = (e) => {
        // Handle adding a new patient
        e.preventDefault();
        const patientData = { ...newPatient, gender: selectedGender };
        axios.post('http://localhost:5000/patients/add', patientData)
            .then(response => {
                setPatients([...patients, response.data]);
                setNewPatient({ name: '', age: '', gender: '' });
                setSelectedGender('');
                setAddform(false)
                toast.success("Patient Added Successfully")
            })
            .catch(error => console.error('Error adding patient:', error));
    };
  

  

  


    const cancelbtn = () => {
        setIsEditMode(false);
        setAddform(false)
    };
    
    const addbtn = () => {
        setAddform(true)
    };    return (
        <div>
    <ToastContainer />

        {addform ? (

            <div>
            <form className='patient-form' onSubmit={handleAddPatient}>
			<h4>{isEditMode ? 'Edit Patient' : 'Add New Patient'}</h4>
			  <label>Name:</label>
			  <input type="text" value={isEditMode ? selectedPatient.name : newPatient.name} onChange={(e) => isEditMode ? setSelectedPatient({ ...selectedPatient, name: e.target.value }) : setNewPatient({ ...newPatient, name: e.target.value })} />
  
			  <label>Age:</label>
			  <input type="text" value={isEditMode ? selectedPatient.age : newPatient.age} onChange={(e) => isEditMode ? setSelectedPatient({ ...selectedPatient, age: e.target.value }) : setNewPatient({ ...newPatient, age: e.target.value })} />
  
			  <label>Gender:</label>
			  <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
				<option value="">Select Gender</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Other">Other</option>
			  </select>
  
			  <div className='editformBtns'>
				<button onClick={cancelbtn}>{'Cancel'}</button>
				<button type="submit">{isEditMode ? 'Update Patient' : 'Add Patient'}</button>
			  </div>
			</form>
            </div>
      
        ) :(null )}
            <button className="quick-link-button"  onClick={addbtn} type="submit">Add Patient</button>    </div>
    );
};

export default Addpatients;
