import React from 'react';
import '../styles/DoctorSection.css'; // Your custom styles for the DoctorsSection component
import { Link } from 'react-router-dom';
// import docImg from "../assets/images/doctorsSection.jpg"
const DoctorsSection = () => {
    return (
        <div className="doc-section">

            <div className="doctors-image">
                {/* <img src={docImg} alt="Doctor" /> */}
            </div>

            <div className="doctors-content">

                <h2 className="section-headline">Meet Our Experienced Doctors</h2>

                <p className="section-description">
                    Get to know our team of experienced and compassionate physicians who are dedicated to providing exceptional care.
                </p>
                <Link className="learn-more-button" to="/Doctor">View Doctors</Link>

            </div>

        </div>
    );
};

export default DoctorsSection;
