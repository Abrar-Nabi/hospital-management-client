// src/components/DoctorCard.js

import React, { useEffect, useState } from "react";
import '../styles/Doctors.css';
const DoctorCard =
	(
		{
			doctor, onEdit,
			onDelete
		}
	) => {
		const [isAdmin, setisAdmin] = useState(false);
		useEffect(() => {
			const admin = localStorage.getItem('userType');
			if (admin === 'Admin') {
				setisAdmin(true);
			}
		  }, []);
		return (
			<div className="doctor-card">
				<div className="card-header">
					<h3>Doctor Details</h3>
				</div>
				<div className="card-body">
					<i class="ri-user-fill userIcon"></i>
					<p></p>
					<p><span>Name:</span> {doctor.name}  </p>
					<p><span>Specialty:</span> {doctor.specialty}</p>
					<p><span>Phone:</span> {doctor.phone}</p>
					<p><span>Email:</span> 	{doctor.email}
					</p>
					{isAdmin ? (
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
					</div>) : null}
				</div>
			</div>
		);
	};

export default DoctorCard;
