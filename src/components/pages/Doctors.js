import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorCard from '../cards/DoctorCard';
import '../styles/Doctors.css';
import Sidebar from '../pages/sidebar';
import { ToastContainer, toast } from 'react-toastify';
const Doctors = () => {
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
				toast.success("Doctor added successfully!",{autoClose: 2000,});
			})
			.catch(error => console.error('Error adding doctor:', error));
	};
	const handleUpdateDoctor =
		(id, e) => {
			e.preventDefault();
			axios
				.post(
					`http://localhost:5000/doctors/update/${id}`, selectedDoctor)
				.then(response => {
					const updateDoc = {
						...selectedDoctor,
						_id: id
					};toast.info("Doctor Updated Successfully",{
						autoClose: 2000,
					})

					console.log('update doc', updateDoc);

					setDoctors(
						doctors.map(
							doctor =>
								(doctor._id === id ? updateDoc : doctor)));

					setSelectedDoctor(null);
					setIsEditMode(false); // Switch back to Add mode
				})
				.catch(
					error =>
						console.error('Error updating doctor:', error));
		};

	const handleDeleteDoctor = (id) => {
		axios.delete(
			`http://localhost:5000/doctors/delete/${id}`)
			.then(response => {
				console.log(response.data);
				setDoctors(
					doctors
						.filter(doctor => doctor._id !== id)
				);	toast.error("Doctor Deleted Successfully",{
					autoClose: 2000,
				})
			})
			.catch(
				error =>
					console.error('Error deleting doctor:', error));
	};

	const handleEditDoctor =
		(doctor) => {
			setSelectedDoctor(doctor);
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
		<div className='doctorsMain'>
		 <ToastContainer/>
			<Sidebar />


			{isEditMode || addform ? (
				<div className='doctor-form-sections'>

					<form onSubmit={isEditMode ? (e) => handleUpdateDoctor(selectedDoctor._id, e) : handleAddDoctor}>
					<h4>{isEditMode ? 'Edit Doctor' : 'Add New Doctor'}</h4>
						<label>Name: </label>
						<input type="text" value={isEditMode ? selectedDoctor.name : newDoctor.name} onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, name: e.target.value }) : setNewDoctor({ ...newDoctor, name: e.target.value })} />
						<br />
						<label>Specialty: </label>
						<input type="text" value={isEditMode ? selectedDoctor.specialty : newDoctor.specialty} onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, specialty: e.target.value }) : setNewDoctor({ ...newDoctor, specialty: e.target.value })} />
						<label>Phone: </label>
						<input type="text" value={isEditMode ? selectedDoctor.phone : newDoctor.phone} onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, phone: e.target.value }) : setNewDoctor({ ...newDoctor, phone: e.target.value })} />
						<label>Email: </label>
						<input type="text" value={isEditMode ? selectedDoctor.email : newDoctor.email} onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, email: e.target.value }) : setNewDoctor({ ...newDoctor, email: e.target.value })} />
						<br />
						<div className='editformBtns'>
							<button onClick={cancelbtn}>{'Cancel'}</button>
							<button type="submit">{isEditMode ? 'Update Doctor' : 'Add Doctor'}</button>
						</div>
					</form>
				</div>) : (
				<div className='doctors-section'>
					<div className='adminHeader'>
						<h3>Doctors </h3>
						<div className='btncontainer'>
							<button onClick={addbtn} type="submit">Add Doctor</button>
						</div>
					</div>

					<div className="doctor-list">
						{doctors.map(doctor => (
							<DoctorCard
								key={doctor._id}
								doctor={doctor}
								onEdit={handleEditDoctor}
								onDelete={handleDeleteDoctor}
							/>
						))}
					</div>
				</div>)}


		</div>
	);
};

export default Doctors;