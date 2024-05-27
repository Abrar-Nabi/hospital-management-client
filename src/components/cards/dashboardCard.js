import React from 'react';
import "../styles/dashboardcard.css"


const DashboardCard =
	(
		{
			value,title,icon
			
		}
	) => {
		return (
			<div className="adminpatient-card">
				<span>{icon}</span>
				<h4>{title}</h4>
				<p>{value}</p>
				
		
				</div>
		);
	};

export default DashboardCard;