// src/components/DoctorCard.js

import React, { useEffect, useState } from "react";
import '../styles/Doctors.css';
const DoctorCard =
	(
		{
			doctor
		}
	) => {
	
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
					
				</div>
			</div>
		);
	};

export default DoctorCard;
