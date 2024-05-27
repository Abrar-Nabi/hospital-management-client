import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Patients.css';
import PatientCard from '../cards/PatientCard';
import Sidebar from '../pages/sidebar';
import { ToastContainer, toast } from 'react-toastify';
const Patients = () => {
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
				setAddform(false);
				toast.success("Patient Added Successfully",{autoClose: 2000,})
			})
			.catch(error => console.error('Error adding patient:', error));
	};

	const handleUpdatePatient = (id, e) => {
		// Handle updating an existing patient
		e.preventDefault();
		const patientData = { ...selectedPatient, gender: selectedGender };
		axios.post(`http://localhost:5000/patients/update/${id}`, patientData)
			.then(response => {
				const updatedPatients = patients.map(patient =>
					patient._id === id ? { ...patient, gender: selectedGender } : patient
				);
				setPatients(updatedPatients);
				setSelectedPatient(null);
				setIsEditMode(false);
				setSelectedGender('');
				toast.info("Patient Updated Successfully",{autoClose: 2000,})
			})
			.catch(error => console.error('Error updating patient:', error));
	};

	const handleDeletePatient = (id) => {
		axios.delete(`http://localhost:5000/patients/delete/${id}`)
			.then(response => {
				console.log(response.data);
				setSelectedPatient(null);
				setPatients(patients.filter(patient => patient._id !== id));
				toast.error("Patient Deleted Successfully",{autoClose: 2000,})
			})
			.catch(error => console.error('Error deleting patient:', error));

	};

	const handleEditPatient = (patient) => {
		setSelectedPatient(patient);
		setSelectedGender(patient.gender); // Set selected gender when editing
		setIsEditMode(true); // Switch to Edit mode
		
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
			<Sidebar />

			{isEditMode || addform ? (
				<div className='patient-form-sections'>
					<form className='patient-form' onSubmit={isEditMode ? (e) => handleUpdatePatient(selectedPatient._id, e) : handleAddPatient}>
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
			) : (
				<div className='patients-section '>
					<div className='adminHeader'>
						<h3>Patients</h3>
						<div className='btncontainer'>
							<button onClick={addbtn} type="submit">Add Patient</button>
						</div>
					</div>
					<div className="patient-list">
						{patients.map(patient => (
							<PatientCard key={patient._id} patient={patient} onEdit={handleEditPatient} onDelete={handleDeletePatient} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Patients;
