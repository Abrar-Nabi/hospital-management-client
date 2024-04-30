

import React from 'react';
import '../styles/ShowDoc.css'; 

const DoctorCard = ({ doctor }) => {
    return (
        <div className="Showdoctor-card">
            <p>{doctor.name} - {doctor.specialty}</p>
        </div>
    );
};

export default DoctorCard;
