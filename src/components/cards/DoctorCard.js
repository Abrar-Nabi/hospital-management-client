// src/components/DoctorCard.js

import React from 'react';
import '../styles/Doctors.css'; 
const DoctorCard =
	(
		{
			doctor, onEdit,
			onDelete
		}
	) => {
		return (
			<div className="doctor-card">
				<p>
					{doctor.name} -
					{doctor.specialty}
				</p>
				<div className='btn-container'>
					<button onClick={
						() =>
							onEdit(doctor)
					}>
						Edit
					</button>
					<button onClick={
						() =>
							onDelete(doctor._id)
					}>
						Delete
					</button>
				</div>
			</div>
		);
	};

export default DoctorCard;
